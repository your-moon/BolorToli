import { Tab, Tabs } from "@nextui-org/react";
import "./App.css";
import { Key, useState } from "react";
import BolorToliMain from "./components/main";

function App() {
  const [selected, setSelected] = useState<Key>("main");

  return (
    <div className="flex flex-col items-center m-2 w-96 h-36">
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
            <Tab key="saved" title="Saved"></Tab>
            <Tab key="main" title="Main">
              <BolorToliMain />
            </Tab>
            <Tab key="settings" title="Settings"></Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
}

export default App;
