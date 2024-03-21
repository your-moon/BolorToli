import { Autocomplete, AutocompleteItem, Button } from "@nextui-org/react";
import React, { Key } from "react";
import {
  Word,
  getData,
  getSuggestion,
  getWordsFromData,
} from "../../utils/data";
import { SendIcon } from "../../assets/icons/SendIcon";

interface suggestionObj {
  id: number;
  value: string;
}

interface MainFormProps {
  value: string;
  setValue: (value: string) => void;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  setWords: React.Dispatch<React.SetStateAction<Word[]>>;
  direction: number;
}

const MainForm = ({
  value,
  setValue,
  setMessage,
  setWords,
  direction,
}: MainFormProps) => {
  const [suggestions, setSuggestions] = React.useState<suggestionObj[]>([]);

  const onSumb = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setWords([]);
    const data = await getData(value.toLowerCase(), direction.toString());

    let wordList = await getWordsFromData(data);

    if (wordList.length == 0) {
      setMessage("Уучлаарай, үг олдсонгүй");
      return;
    }

    console.log(wordList);
    setWords(wordList);
  };

  const onInputChanged = async (value: string) => {
    if (value.length === 0) {
      setSuggestions([]);
      setMessage("Та үгээ оруулна уу!");
      return;
    }
    const data_suggestions = await getSuggestion(
      value.toLowerCase(),
      direction.toString(),
    );
    if (data_suggestions.type === "error") {
      return;
    }
    const parsedSuggestions: string[] = JSON.parse(data_suggestions.data);

    const parsedSuggestionsObj: suggestionObj[] = parsedSuggestions.map(
      (item, index) => {
        return { id: index, value: item };
      },
    );
    setSuggestions(parsedSuggestionsObj);
  };

  const onSelectionChange = async (key: Key) => {
    setWords([]);
    const id = key.valueOf();
    const value = suggestions[id as number].value;
    let data = await getData(value.toLowerCase(), direction.toString());
    let wordList = await getWordsFromData(data);

    if (wordList.length == 0) {
      setMessage("Уучлаарай, үг олдсонгүй");
      return;
    }

    console.log(wordList);
    setWords(wordList);
  };

  return (
    <form className="flex flex-row h-14 max-w-[420px]" onSubmit={onSumb}>
      <Autocomplete
        variant="bordered"
        className="max-w-[260px] mb-1 mr-1.5"
        size="sm"
        items={suggestions}
        radius="md"
        menuTrigger="input"
        aria-label="Autocomplete"
        label="Орчуулах үгээ оруулна уу"
        value={value}
        onValueChange={setValue}
        onInputChange={onInputChanged}
        allowsEmptyCollection={false}
        allowsCustomValue={true}
        onSelectionChange={onSelectionChange}
        autoFocus={true}
      >
        {(item) => (
          <AutocompleteItem key={item.id}>{item.value}</AutocompleteItem>
        )}
      </Autocomplete>
      <Button
        type="submit"
        className="h-12 min-w-[50px]"
        isIconOnly
        color="default"
      >
        <SendIcon />
      </Button>
    </form>
  );
};
export default MainForm;
