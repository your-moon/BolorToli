type SuggestionMessage = "search-suggest";
type TranslateMessage = "translate";
type MessageType = SuggestionMessage | TranslateMessage;
interface Message {
  word: string;
  hash: string;
  type: MessageType;
  direction: string;
}

async function fetchFromAPI(endpoint: string, request: Message): Promise<any> {
  console.log("fetch request", request);
  const params = new URLSearchParams({
    word: request.word,
    direction: request.direction,
  });

  const headers = new Headers({
    "API-Key": request.hash,
  });

  console.log(`https://bolor-toli.com/pub/${endpoint}?${params.toString()}`);

  const response = await fetch(
    `https://bolor-toli.com/pub/${endpoint}?${params.toString()}`,
    {
      method: "GET",
      headers: headers,
    },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch ${endpoint}`);
  }

  return endpoint === "translate" ? response.json() : response.text();
}

function handleIncomingMessage(
  request: Message,
  sendResponse: (response: BolorResponse) => void,
): boolean {
  if (request.type === "search-suggest" || request.type === "translate") {
    fetchFromAPI(request.type, request)
      .then((data) => {
        sendResponse({ type: "ok", data });
      })
      .catch((error) => {
        sendResponse({ type: "error", data: "", message: error.toString() });
      });
    return true;
  }
  sendResponse({ type: "error", data: "", message: "Invalid request" });
  return false;
}

chrome.runtime.onMessage.addListener(
  (request: Message, _sender, sendResponse) => {
    return handleIncomingMessage(request, sendResponse);
  },
);
