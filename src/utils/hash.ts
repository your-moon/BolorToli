export const getSHA256Hash = async function (input: string): Promise<string> {
  const textAsBuffer = new TextEncoder().encode(input);
  const hashBuffer = await window.crypto.subtle.digest("SHA-256", textAsBuffer);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  const hash = hashArray
    .map((item) => item.toString(16).padStart(2, "0"))
    .join("");
  return hash;
};

export const bolorHashString = function (s: string, direction: number): string {
  let result = 0;
  if (direction === 1) {
    result = 50;
  } else if (direction === 3) {
    result = 52;
  } else if (direction === 4) {
    result = 53;
  } else if (direction === 5) {
    result = 54;
  } else if (direction === 7) {
    result = 56;
  } else if (direction === 8) {
    result = 57;
  }

  // direction === 3 ? (result = 52) : (result = 50); // germany
  // direction === 4 ? (result = 53) : (result = 50); // kr
  // direction === 5 ? (result = 54) : (result = 50); // japan
  // direction === 7 ? (result = 56) : (result = 50); // cn
  // direction === 8 ? (result = 57) : (result = 50); // russia
  console.log("hashdirection", direction);
  console.log("result", result);
  let counter = 0;
  for (let i = 0; i < s.length; i++) {
    counter++;
    result += s.codePointAt(i)! + 1;
  }
  return result.toString();
};

export const getHash = async function (
  s: string,
  direction: number,
): Promise<string> {
  const hashString = bolorHashString(s, direction);
  return getSHA256Hash(hashString).then((hash: string) => {
    return hash;
  });
};
