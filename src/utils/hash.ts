export const getSHA256Hash = async function (input: string): Promise<string> {
  const textAsBuffer = new TextEncoder().encode(input);
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", textAsBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hash = hashArray
    .map((item) => item.toString(16).padStart(2, "0"))
    .join("");
  return hash;
};

export const bolorHashString = function (s: string): string {
  let result = 50;
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    counter++;
    result += s.codePointAt(i)! + 1;
  }
  return result.toString();
};

export const getHash = async function (s: string): Promise<string> {
  const hashString = bolorHashString(s);
  return getSHA256Hash(hashString).then((hash: string) => {
    return hash;
  });
};
