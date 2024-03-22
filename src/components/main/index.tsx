import { Listbox, ListboxItem } from "@nextui-org/react";
import React from "react";
import { Word } from "../../utils/data";
import { IconWrapper } from "../iconWrapper";
import MainForm from "../form";
import LanguageSwitch from "../languageSwitch";

/**
 * BolorToli's Main component
 * @returns a page component
 */
const BolorToliMain: React.FC = () => {
  const [direction, setDirection] = React.useState<number>(1);
  const [words, setWords] = React.useState<Word[]>([]);
  const [value, setValue] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("Та үгээ оруулна уу!");

  return (
    <div className="h-96 pb-10">
      <LanguageSwitch direction={direction} setDirection={setDirection} />

      <MainForm
        value={value}
        setValue={setValue}
        setMessage={setMessage}
        setWords={setWords}
        direction={direction}
      />
      <p>{direction}</p>

      <Listbox
        className="justify-center items-center border-2 rounded-lg border-slate-200 max-w-[320px] max-h-96 overflow-y-auto "
        aria-label="listbox"
        emptyContent={
          <div className="h-full flex justify-center items-center ">
            <p className="text-base text-black font-mono">{message}</p>
          </div>
        }
      >
        {words.map((word) => (
          <ListboxItem
            key={word.word}
            endContent={<IconWrapper tag={word.tag} />}
          >
            {word.word}
          </ListboxItem>
        ))}
      </Listbox>
    </div>
  );
};
export default BolorToliMain;
