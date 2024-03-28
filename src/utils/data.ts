import { getHash } from "./hash";

export async function getSuggestion(
  word: string,
  direction: string,
): Promise<BolorResponse> {
  var hashtxt = "";

  await getHash(word, parseInt(direction)).then((data) => (hashtxt = data));

  const response: BolorResponse = await chrome.runtime.sendMessage({
    hash: hashtxt,
    word: word,
    type: "search-suggest",
    direction: direction,
  });

  return response;
}

export async function getData(
  word: string,
  direction: string,
): Promise<string> {
  console.log("getData direction", direction);
  var hashtxt = "";
  await getHash(word, parseInt(direction)).then((data) => (hashtxt = data));
  console.log(hashtxt);
  const response: BolorResponse = await chrome.runtime.sendMessage({
    hash: hashtxt,
    word: word,
    type: "translate",
    direction: direction,
  });

  console.log("getData response", response);

  return JSON.stringify(response);
}

export interface Word {
  word: string;
  tag: string;
}

export async function getWordsFromData(data: string): Promise<Word[]> {
  const words: Word[] = [];
  const parsedData: TranslationSerde = JSON.parse(data);
  console.log("parsedData", parsedData);
  const translates = parsedData.data.er;
  translates?.forEach((element) => {
    if (parsedData.data.to_mn === true) {
      words.push({
        word: element.w.vars[0].w,
        tag: element.t.vars[0].tags?.class || "none",
      });
    } else {
      words.push({
        word: element.t.vars[0].w,
        tag: element.t.vars[0].tags?.class || "none",
      });
    }
  });
  console.log(words);
  return words;
}
