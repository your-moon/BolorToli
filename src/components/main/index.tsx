import React, { useEffect } from "react";
import { Word } from "../../utils/data";
import MainForm from "../form";
import LanguageSwitch from "../languageSwitch";
import { getOptions } from "../../optionsPage/api";
import WordList from "../word_list";

/**
 * BolorToli's Main component
 * @returns a page component
 */
const BolorToliMain: React.FC = () => {
  const [words, setWords] = React.useState<Word[]>([]);
  const [value, setValue] = React.useState<string>("");
  const [message, setMessage] = React.useState<string>("Та үгээ оруулна уу!");
  const [defaultDirection, setDefaultDirection] = React.useState<string>("");

  useEffect(() => {
    async function getOptionsData() {
      const options = await getOptions();
      setDefaultDirection(options.defaultDirection);
    }

    getOptionsData();
  }, []);

  return (
    <div className="h-96 pb-10">
      <LanguageSwitch
        direction={defaultDirection}
        setDirection={setDefaultDirection}
      />

      <MainForm
        value={value}
        setValue={setValue}
        setMessage={setMessage}
        setWords={setWords}
        direction={defaultDirection}
      />

      <WordList words={words} message={message} />
    </div>
  );
};
export default BolorToliMain;
