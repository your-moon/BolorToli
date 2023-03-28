
  chrome.runtime.onMessage.addListener(
     (request, sender, sendResponse) => {
        const params = new URLSearchParams({
        'word': request.word,
        'direction': 1
        });
        const headers = new Headers({
      "API-Key": request.hash.toString(),
        });
        fetch("https://bolor-toli.com/pub/translate?" + params.toString(), {
        method: "GET",
        headers: headers,
        })
        .then(response => response.json())
        .then(data => {
            sendResponse({data})
            }
            ).catch(error => {
                sendResponse({ type: 'error', message: error.toString() });
              });
        return true;
    }
  );