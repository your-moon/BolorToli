import { getHash } from "/src/utils/hash.ts.js";
export async function getSuggestion(word) {
  var hashtxt = "";
  await getHash(word).then((data) => hashtxt = data);
  const response = await chrome.runtime.sendMessage({
    hash: hashtxt,
    word,
    type: "search-suggest"
  });
  return response;
}
export async function getData(word) {
  var hashtxt = "";
  await getHash(word).then((data) => hashtxt = data);
  const response = await chrome.runtime.sendMessage({
    hash: hashtxt,
    word,
    type: "translate"
  });
  return JSON.stringify(response);
}
export async function getWordsFromData(data) {
  const words = [];
  const parsedData = JSON.parse(data);
  console.log(parsedData);
  const translates = parsedData.data.er;
  translates?.forEach((element) => {
    words.push({
      word: element.w.vars[0].w,
      tag: element.t.vars[0].tags?.class || "none"
    });
  });
  console.log(words);
  return words;
}
