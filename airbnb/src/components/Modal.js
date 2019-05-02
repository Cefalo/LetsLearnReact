import React, { Component } from "react"
import ModalContent from "./ModalContent"

class Modal extends Component {
  onClose = () => {
    this.props.onClose()
  }

  onClickAway = e => {
    if (this.modalNode && this.modalNode.contains(e.target)) return
    this.onClose()
  }

  render() {
    const { isOpen, children } = this.props
    return (
      <React.Fragment>
        {isOpen && (
          <ModalContent
            modalRef={n => (this.modalNode = n)}
            content={children}
            onClickAway={this.onClickAway}
            onClose={this.onClose}
            isOpen={isOpen}
          />
        )}
      </React.Fragment>
    )
  }
}

export default Modal
