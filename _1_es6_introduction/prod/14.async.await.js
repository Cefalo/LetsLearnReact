import fetch from 'cross-fetch';

const surahList = 'https://muhhsinin.github.io/resources/surah.list.json';

export async function getSurahListAsync() {
    const response = await fetch(surahList);
    const json = await response.json();
    console.log(json[0]);
}