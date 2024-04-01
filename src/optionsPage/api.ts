export interface Options {
  inpageTranslation: boolean;
  defaultDirection: string;
}
// Function to retrieve options from Chrome storage
export function getOptions(): Promise<Options> {
  return new Promise((resolve, _reject) => {
    chrome.storage.sync.get(
      {
        inpageTranslation: false,
        defaultDirection: "1",
      },
      function (items) {
        const options: Options = {
          inpageTranslation: items.inpageTranslation,
          defaultDirection: items.defaultDirection,
        };
        console.log("Options retrieved", options);
        resolve(options);
      },
    );
  });
}

// Function to save options to Chrome storage
export function saveOptions(options: Options): Promise<void> {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.set(options, function () {
      if (chrome.runtime.lastError) {
        reject(chrome.runtime.lastError);
      } else {
        resolve();
      }
    });
  });
}
