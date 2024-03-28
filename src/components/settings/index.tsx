import { Select, SelectItem, Switch, cn } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { Options } from "../../optionsPage/OptionsApp";
import { languagePairs } from "../languageSwitch";
import { MoreIcon } from "../icons/moreIcon";

interface SettingsProps {
  getOptions: () => Promise<Options>;
  saveOptions: (options: Options) => Promise<void>;
  updateOptions?: (updates: Partial<Options>) => Promise<Options>;
}

const Settings = ({ getOptions, saveOptions }: SettingsProps) => {
  const [options, setOptions] = useState<Options | null>(null);
  // const [value, setValue] = React.useState<Selection>(new Set([]));

  useEffect(() => {
    async function getOptionsData() {
      const options = await getOptions();
      setOptions(options);
    }

    getOptionsData();

    return () => {};
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-4">Тохиргоо</h1>
      <Select
        label="Үндсэн хэлний хослолыг сонгоно уу"
        placeholder="Select an animal"
        // startContent={<PetIcon />}
        defaultSelectedKeys={[options?.defaultDirection]}
        onSelectionChange={(selected) => {
          let selectedArr = Array.from(selected);
          console.log("Selected Pair ID: ", selectedArr[0].toString());
          setOptions((prev) => {
            if (prev) {
              saveOptions({
                ...prev,
                defaultDirection: selectedArr[0].toString(),
              });
              console.log(getOptions());
              return { ...prev, defaultDirection: selectedArr[0].toString() };
            }
            return null;
          });
        }}
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
      <Switch
        className="bg-neutral-100"
        isSelected={options?.inpageTranslation}
        onValueChange={(value) => {
          setOptions((prev) => {
            if (prev) {
              saveOptions({ ...prev, inpageTranslation: value });
              console.log(getOptions());
              return { ...prev, inpageTranslation: value };
            }
            return null;
          });
        }}
        classNames={{
          base: cn(
            "inline-flex flex-row-reverse w-full max-w-md bg-content1 hover:bg-content2 items-center",
            "justify-between cursor-pointer rounded-lg gap-2 p-4 border-2 border-transparent",
            "data-[selected=true]:border-primary",
          ),
          wrapper: "p-0 h-4 overflow-visible",
          thumb: cn(
            "w-6 h-6 border-2 shadow-lg",
            "group-data-[hover=true]:border-primary",
            //selected
            "group-data-[selected=true]:ml-6",
            // pressed
            "group-data-[pressed=true]:w-7",
            "group-data-[selected]:group-data-[pressed]:ml-4",
          ),
        }}
      >
        <div className="flex flex-col gap-1">
          <p className="text-medium">Нэг товчилтот орчуулга</p>
          <p className="text-tiny text-default-400">
            Хуудас дээрх товчилтот орчуулга идэвхжүүлэх
          </p>
        </div>
      </Switch>
    </div>
  );
};

export default Settings;
