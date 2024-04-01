import Settings from "../components/settings";
import { getOptions, saveOptions } from "./api";
function OptionsApp() {
  return (
    <div>
      <Settings getOptions={getOptions} saveOptions={saveOptions} />
    </div>
  );
}

export default OptionsApp;
