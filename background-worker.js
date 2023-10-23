chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.word == null && request.hash == null) {
    sendResponse({ type: "error", message: "Word or Hash is null" });
  }

  const params = new URLSearchParams({
    word: request.word,
    direction: 1,
  });
  const headers = new Headers({
    "API-Key": request.hash.toString(),
  });
  fetch("https://bolor-toli.com/pub/translate?" + params.toString(), {
    method: "GET",
    headers: headers,
  })
    .then((response) => response.json())
    .then((data) => {
      sendResponse({ type: "ok", data });
    })
    .catch((error) => {
      sendResponse({ type: "error", message: error.toString() });
    });
  return true;
});
