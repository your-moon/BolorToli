function Hash() {
  Hash.prototype.getSHA256Hash = async function (input) {
    const textAsBuffer = new TextEncoder().encode(input);
    const hashBuffer = await window.crypto.subtle.digest(
      "SHA-256",
      textAsBuffer
    );
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hash = hashArray
      .map((item) => item.toString(16).padStart(2, "0"))
      .join("");
    return hash;
  };

  Hash.prototype.printValue = function (s) {
    let result = 50;
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
      counter++;
      result += s.codePointAt(i) + 1;
    }
    return result.toString();
  };

  Hash.prototype.getHash = function (s) {
    const x = this.printValue(s);
    return this.getSHA256Hash(x).then((hash) => {
      return hash;
    });
  };
}

async function getData(word) {
  var hash = new Hash();
  var hashtxt = "";
  await hash.getHash(word).then((data) => (hashtxt = data));
  console.log(hashtxt);
  const response = await chrome.runtime.sendMessage({
    hash: hashtxt,
    word: word,
  });
  // do something with response here, not outside the function
  return JSON.stringify(response);
}
