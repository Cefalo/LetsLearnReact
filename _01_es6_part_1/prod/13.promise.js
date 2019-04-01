import fetch from 'cross-fetch';

const surahList = 'https://muhhsinin.github.io/resources/surah.list.json';

export function getSurahListUsingPromise() {
    fetch(surahList)
        .then(response => response.json())
        .then(json => console.log(json[0]))
        .catch(error => console.log("failed"));
}
