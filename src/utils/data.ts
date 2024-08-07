import {
  BolorResponse,
  TranslationSerde,
  TranslationSerdeData,
} from "../Serialization";
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

export async function getWordsFromData(
  data: string | TranslationSerde,
): Promise<Word[]> {
  const words: Word[] = [];

  let parsedData: TranslationSerde;

  if (typeof data === "string") {
    parsedData = JSON.parse(data);
  } else {
    parsedData = data;
  }

  console.log("parsedData", parsedData);
  const translates = parsedData?.data?.er;

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

export async function getWordsFromSerdeData(
  serdeData: TranslationSerdeData,
): Promise<Word[]> {
  const words: Word[] = [];

  const translates = serdeData?.er;

  translates?.forEach((element) => {
    if (serdeData.to_mn === true) {
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
