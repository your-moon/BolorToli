import { getHash } from "./hash";

export async function getSuggestion(word: string): Promise<BolorResponse> {
  var hashtxt = "";

  await getHash(word).then((data) => (hashtxt = data));

  const response: BolorResponse = await chrome.runtime.sendMessage({
    hash: hashtxt,
    word: word,
    type: "search-suggest",
  });

  return response;
}

export async function getData(word: string): Promise<string> {
  var hashtxt = "";
  await getHash(word).then((data) => (hashtxt = data));
  const response = await chrome.runtime.sendMessage({
    hash: hashtxt,
    word: word,
    type: "translate",
  });

  return JSON.stringify(response);
}
