import { Tab, Tabs } from "@nextui-org/react";
import "./App.css";
import BolorToliMain from "./components/main";
import Settings from "./components/settings";
import { getOptions, saveOptions } from "./optionsPage/api";
import Saved from "./components/saved";
import { Key } from "@react-types/shared/src/key";
import { useState } from "react";

function App() {
  const [selected, setSelected] = useState<Key | null | undefined>("main");

  return (
    <div className="flex flex-col items-center m-2 w-96 min-h-[500px] overflow-auto">
      <div className="flex flex-col items-center w-9/12 ">
        <div className="mb-2 w-auto">
          <Tabs
            className="w-full min-h-[40px]"
            color="default"
            aria-label="Tabs colors"
            radius="full"
            fullWidth={true}
            size="md"
            onSelectionChange={setSelected}
            selectedKey={selected}
          >
            <Tab key="saved" title="Saved">
              <Saved />
            </Tab>
            <Tab key="main" title="Main">
              <BolorToliMain />
            </Tab>
            <Tab key="settings" title="Settings">
              <Settings getOptions={getOptions} saveOptions={saveOptions} />
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default App;
