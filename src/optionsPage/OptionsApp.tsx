import Settings from "../components/settings";

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

// Function to update options in Chrome storage
export async function updateOptions(
  updates: Partial<Options>,
): Promise<Options> {
  try {
    const currentOptions = await getOptions();
    const updatedOptions: Options = { ...currentOptions, ...updates };
    await saveOptions(updatedOptions);
    return updatedOptions;
  } catch (error) {
    throw new Error(`Error updating options: ${error}`);
  }
}

function OptionsApp() {
  // Build your options page like any other react app
  return (
    <div>
      <Settings
        getOptions={getOptions}
        saveOptions={saveOptions}
        updateOptions={updateOptions}
      />
    </div>
  );
}

export default OptionsApp;
