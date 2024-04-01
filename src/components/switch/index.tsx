import { Switch, cn } from "@nextui-org/react";
import { Options } from "../../optionsPage/api";

export interface BSwitchProps {
  getOptions: () => Promise<Options>;
  setOptions: React.Dispatch<React.SetStateAction<Options | null>>;
  saveOptions: (options: Options) => Promise<void>;
  options: Options | null;
}

const BSwitch = ({
  getOptions,
  setOptions,
  saveOptions,
  options,
}: BSwitchProps) => {
  return (
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
  );
};

export default BSwitch;
