import {
  BolorResponse,
  TranslationSerde,
  TranslationStatus,
} from "../Serialization";

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
        sendResponse({ status: TranslationStatus.OK, data });
        saveSavedData(data, request.word);
      })
      .catch((error) => {
        sendResponse({
          status: TranslationStatus.ERROR,
          message: error.toString(),
        });
      });
    return true;
  }
  sendResponse({
    status: TranslationStatus.INVALID,
    message: "Invalid request",
  });
  return false;
}

chrome.runtime.onMessage.addListener(
  (request: Message, _sender, sendResponse) => {
    if (request.type === "translate" || request.type === "search-suggest") {
      console.log("incoming request translate or search-suggest", request);
      return handleIncomingMessage(request, sendResponse);
    }
  },
);

export interface ISavedData {
  data: TranslationSerde;
  text: string;
}

function saveSavedData(incomingData: any, savingText: string) {
  chrome.storage.local.get("savedData", (data) => {
    let savedData = data.savedData || [];
    // check if the savedData is exists in the local storage

    const isExists = savedData.some((data: any) => data.text === savingText);

    // if the savedData is not exists in the local storage then push it
    if (!isExists) {
      savedData.push({
        data: incomingData,
        text: savingText,
      });
      console.log("savedData", savedData);
      chrome.storage.local.set({ savedData });
    }
  });
}

export function getSavedData(): Promise<ISavedData[]> {
  return new Promise((resolve) => {
    chrome.storage.local.get("savedData", (data) => {
      resolve(data.savedData || []);
    });
  });
}
export function clearSavedData() {
  chrome.storage.local.remove("savedData");
}
