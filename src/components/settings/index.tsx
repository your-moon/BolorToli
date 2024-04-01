import { Select, SelectItem, Selection } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { languagePairs } from "../languageSwitch";
import { MoreIcon } from "../icons/moreIcon";
import BSwitch from "../switch";
import { Options } from "../../optionsPage/api";

interface SettingsProps {
  getOptions: () => Promise<Options>;
  saveOptions: (options: Options) => Promise<void>;
}

const Settings = ({ getOptions, saveOptions }: SettingsProps) => {
  const [options, setOptions] = useState<Options | null>(null);
  const [selectedPair, setSelectedPair] = useState<string>();

  useEffect(() => {
    async function getOptionsData() {
      const options = await getOptions();
      setOptions(options);
      setSelectedPair(options.defaultDirection);
    }

    getOptionsData();
  }, []);

  const selectionChange = (selected: Selection) => {
    let selectedArr = Array.from(selected)[0].toString();
    setOptions((prev) => {
      if (prev) {
        saveOptions({
          ...prev,
          defaultDirection: selectedArr,
        });
        console.log(getOptions());
        return { ...prev, defaultDirection: selectedArr };
      }
      return null;
    });
    setSelectedPair(selectedArr);
  };

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Тохиргоо</h1>
      <Select
        label="Үндсэн хэлний хослолыг сонгоно уу"
        placeholder="Хэлний хослолыг сонгоно уу"
        selectedKeys={selectedPair ? [selectedPair] : []}
        onSelectionChange={selectionChange}
        className="mb-4 max-w-xs"
      >
        {languagePairs.map((pair) => (
          <SelectItem
            key={pair.id}
            value={pair.name}
            endContent={
              <div className="flex flex-row items-center justify-center gap-3">
                <pair.Icon1 width={20} />
                <MoreIcon />
                <pair.Icon2 width={20} />
              </div>
            }
          >
            {pair.name}
          </SelectItem>
        ))}
      </Select>
      <BSwitch
        getOptions={getOptions}
        setOptions={setOptions}
        saveOptions={saveOptions}
        options={options}
      />
    </div>
  );
};

export default Settings;
