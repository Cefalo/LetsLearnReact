import React, { useRef, useEffect, useMemo } from 'react';
import {
  min,
  max,
  scaleLinear,
  axisBottom,
  select,
  axisLeft,
  line,
  curveCatmullRom,
  area,
  mouse,
  bisector,
  extent
} from 'd3';

import Indicator from './indicator/Indicator';
import { useDetailsContext } from '../Details';
import Gradient from './Gradient';
import Graph from './Graph';
import * as Styled from './styled';
import {getSlopeColor} from '../../misc/helpers'

const svgWidth = 600;
const svgHeight = 160;

const margin = { top: 30, left: 50 };
const graphWidth = svgWidth - margin.left * 2;
const graphHeight = svgHeight - margin.top * 2;

const bisectDistance = bisector(d => d.distance).left;

export default function ElevationProfile() {
  const [state, dispatch] = useDetailsContext();

  const xAxis = useRef();
  const yAxis = useRef();
  const rectRef = useRef();

  const { route } = state.selectedRoute;

  // Every scale has range and domain
  const xScale = scaleLinear()
    .range([0, graphWidth])
    .domain(extent(route, d => d.distance));

  const yScale = scaleLinear()
    .range([graphHeight, 0])
    .domain([
      min(route, d => d.elevation - 10),
      max(route, d => d.elevation),
    ]);

  // This component gets re-rendered pretty often because of <Indicator> animation on mousemove
  // Computations below are pretty costly and we want to wrap them with useMemo
  // Otherwise these will be called on every render and noticeably reduce rendering performance

  const elevationLine = line()
    .curve(curveCatmullRom.alpha(1))
    .x(d => xScale(d.distance))
    .y(d => yScale(d.elevation))

  const elevationArea = area()
    .curve(curveCatmullRom.alpha(1))
    .x(d => xScale(d.distance))
    .y0(graphHeight)
    .y1(d => yScale(d.elevation));

  // depends on elevationLine as well
  const pathLine = elevationLine(route);

  // depends on elevationLine as well
  const pathArea = elevationArea(route);

  // When using d3 with react it's not possible to do everything declaratively
  // Shirley Wu did a nice talk about this: https://www.youtube.com/watch?v=zXBdNDnqV2Q
  useEffect(() => {
    if (xAxis.current) {
      select(xAxis.current).call(
        axisBottom(xScale)
          .ticks(4)
          .tickFormat(d => `${d}km`)
      );
    }

    if (yAxis.current) {
      select(yAxis.current).call(
        axisLeft(yScale)
          .ticks(4)
          .tickFormat(d => `${d}m`)
      );
    }
  }, [route]);

  // Change indicator position on mousemove
  useEffect(() => {
    if (rectRef.current) {
      select(rectRef.current)
        .on('mousemove', null)
        .on('mousemove', function() {
          // Get distance which corresponds to current mouse X position
          const relativeX = mouse(this)[0];
          const distanceForThisX = xScale.invert(relativeX);

          // Get an actual point from our data array based on distance
          let i = bisectDistance(route, distanceForThisX, 1),
            p0 = route[i - 1],
            p1 = route[i],
            foundPoint = distanceForThisX - p0.distance > p1.distance - distanceForThisX ? p1 : p0;

          dispatch({
            type: 'SET_INDICATOR',
            payload: foundPoint
          });
        });
    }
  }, [route]);

  return <Styled.Container>
    {state.isIndicatorVisible && state.indicator && (
      <Indicator
        parentWidth={rectRef.current.getBoundingClientRect().width}
        ratioTop={margin.top / svgHeight}
        ratioLeft={margin.left / svgWidth}
      />
    )}

    {/* Instead of using d3.append we can just use React */}
    <svg
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      style={{ display: 'block' }}
    >
      {/*<Gradient route={route} xScale={xScale}/>*/}
      <defs>
        <linearGradient id="slopeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          {route.map((point, index) => {
            const slopeColor = getSlopeColor(point.slope);

            return <stop
              key={index}
              offset={`${xScale(point.distance) * 100 / 500}%`}
              style={{ stopColor: slopeColor, stopOpacity: 1 }}
            />;
          })}
        </linearGradient>
      </defs>

      <g transform={`translate(${margin.left} ${margin.top})`}>
        {/*<Graph pathLine={pathLine} pathArea={pathArea}/>*/}
        <path d={pathLine} stroke="url(#slopeGradient)" strokeWidth="8" fill="none"/>
        <path d={pathArea} fill="#383838"/>

        <Styled.Axis ref={xAxis} transform={`translate(0 ${graphHeight})`}/>
        <Styled.Axis ref={yAxis}/>

        {/* Transparent overlay on top of graph which is going to register our mouse events */}
        <rect
          ref={rectRef}
          width={graphWidth}
          height={graphHeight}
          fill="transparent"
          onMouseEnter={() => dispatch({ type: 'SHOW_INDICATOR' })}
          onMouseLeave={() => dispatch({ type: 'HIDE_INDICATOR' })}
        />
      </g>
    </svg>
  </Styled.Container>;
}