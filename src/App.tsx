import { Button, Input, Tab, Tabs } from "@nextui-org/react";
import "./App.css";
import { Key, useEffect, useState } from "react";
import { SendIcon } from "./assets/icons/SendIcon";

function App() {
  const [value, setValue] = useState<string>("");
  const [words, setWords] = useState<string[]>([]);
  const [selected, setSelected] = useState<Key>("main");

  useEffect(() => {
    const text = "This is a test text";
    setWords(text.split(" "));
  }, []);

  const clearInput = () => {
    value && setValue("");
  };

  return (
    <div className="flex flex-col items-center m-2 w-96 h-36">
      <div className="flex flex-col items-center w-4/6">
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
            <Tab key="main" title="Main"></Tab>
            <Tab key="settings" title="Settings"></Tab>
          </Tabs>
        </div>
        <div className="flex flex-row w-full">
          <Input
            isClearable
            type="text"
            label="Орчуулах үгээ оруулна уу"
            value={value}
            onValueChange={setValue}
            variant="bordered"
            onClear={clearInput}
            className="max-w-[260px] mb-1 mr-1.5 h-12"
          />
          <Button className="h-12 min-w-[50px]" isIconOnly color="default">
            <SendIcon />
          </Button>
        </div>

        <div>Words: {words}</div>
        <div>Value: {value}</div>
      </div>
    </div>
  );
}

export default App;
