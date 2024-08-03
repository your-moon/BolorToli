import { Button, Listbox, ListboxItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import {
  ISavedData,
  clearSavedData,
  getSavedData,
} from "../../background/background";

const Saved = () => {
  const [saved, setSaved] = useState<ISavedData[]>([]);

  useEffect(() => {
    //@ts-ignore
    getSavedData().then((data) => {
      setSaved(data);
    });
  }, []);

  return (
    <div>
      <Listbox
        className="justify-center items-center border-2 rounded-lg border-slate-200 max-w-[320px] max-h-96 overflow-y-auto "
        aria-label="listbox"
        emptyContent={
          <div className="h-full flex justify-center items-center ">
            <p className="text-base text-black font-mono">{}</p>
          </div>
        }
      >
        {saved.map((data, index) => (
          <ListboxItem key={index}>
            <p className="text-base text-black font-mono">{data.text}</p>
          </ListboxItem>
        ))}
      </Listbox>
      <Button
        onClick={() => {
          clearSavedData();
          setSaved([]);
        }}
      >
        Clear
      </Button>
    </div>
  );
};

export default Saved;
