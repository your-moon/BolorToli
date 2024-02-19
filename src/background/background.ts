interface Message {
  word: string;
  hash: string;
}

function handleIncomingMessage(
  request: Message,
  sendResponse: (response: {
    type: string;
    data?: any;
    message?: string;
  }) => void,
): boolean {
  if (!request.word || !request.hash) {
    sendResponse({ type: "error", message: "Invalid request" });
    return false;
  }

  translateWord(request)
    .then((data) => {
      sendResponse({ type: "ok", data });
    })
    .catch((error) => {
      sendResponse({ type: "error", message: error.toString() });
    });

  return true;
}

async function translateWord(request: Message): Promise<any> {
  const params = new URLSearchParams({
    word: request.word,
    direction: "1",
  });
  const headers = new Headers({
    "API-Key": request.hash,
  });

  const response = await fetch(
    "https://bolor-toli.com/pub/translate?" + params.toString(),
    {
      method: "GET",
      headers: headers,
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch translation");
  }

  return response.json();
}

chrome.runtime.onMessage.addListener(
  (request: Message, _sender, sendResponse) => {
    return handleIncomingMessage(request, sendResponse);
  },
);
