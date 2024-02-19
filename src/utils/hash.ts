export const getSHA256Hash = async function (input: string) {
  const textAsBuffer = new TextEncoder().encode(input);
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", textAsBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hash = hashArray
    .map((item) => item.toString(16).padStart(2, "0"))
    .join("");
  return hash;
};

export const printValue = function (s: string) {
  let result = 50;
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    counter++;
    result += s.codePointAt(i)! + 1;
  }
  return result.toString();
};

export const getHash = async function (s: string) {
  const x = printValue(s);
  return getSHA256Hash(x).then((hash: string) => {
    return hash;
  });
};

export async function getData(word: string) {
  var hashtxt = "";
  await getHash(word).then((data) => (hashtxt = data));
  console.log(hashtxt);
  const response = await chrome.runtime.sendMessage({
    hash: hashtxt,
    word: word,
  });
  // do something with response here, not outside the function
  return JSON.stringify(response);
}
