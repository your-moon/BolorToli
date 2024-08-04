import { Button, Listbox, ListboxItem } from "@nextui-org/react";
import { useEffect, useState } from "react";
import {
  ISavedData,
  clearSavedData,
  getSavedData,
} from "../../background/background";
import SavedWordDetail from "./detail";

const Saved = () => {
  const [saved, setSaved] = useState<ISavedData[]>([]);
  const [showDetails, setShowDetails] = useState(false);
  const [selected, setSelected] = useState<ISavedData | undefined>();

  useEffect(() => {
    //@ts-ignore
    getSavedData().then((data) => {
      console.log("IDATA", data);
      setSaved(data);
    });
  }, []);

  return (
    <div>
      {showDetails ? (
        <div>
          <SavedWordDetail
            show={showDetails}
            setShow={setShowDetails}
            detail={selected}
          />
        </div>
      ) : (
        <div>
          <Listbox
            className="justify-center items-center border-2 rounded-lg border-slate-200 min-w-[300px] max-w-[320px] max-h-96 overflow-y-auto mb-2 "
            aria-label="listbox"
            emptyContent={
              <div className="h-full flex justify-center items-center ">
                <p className="text-base text-black font-mono">{ }</p>
              </div>
            }
          >
            {saved.map((data, index) => (
              <ListboxItem
                key={index}
                onClick={() => {
                  setSelected(data);
                  setShowDetails(true);
                }}
              >
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
      )}
    </div>
  );
};
export default Saved;
