import { Button, Listbox, ListboxItem } from "@nextui-org/react";
import { SendIcon } from "../assets/icons/SendIcon";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import React, { Key } from "react";
import { getData, getSuggestion, getWordsFromData } from "../utils/data";
interface suggestionObj {
  id: number;
  value: string;
}

/**
 * BolorToli's Main component
 * @returns a page component
 */
const BolorToliMain: React.FC = () => {
  const [words, setWords] = React.useState<string[]>([]);
  const [value, setValue] = React.useState<string>("");
  const [suggestions, setSuggestions] = React.useState<suggestionObj[]>([]);

  const onInputChanged = async (value: string) => {
    if (value.length === 0) {
      setSuggestions([]);
      return;
    }
    const data_suggestions = await getSuggestion(value.toLowerCase());
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

  const onSumb = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = await getData(value.toLowerCase());

    let wordList = await getWordsFromData(data);
    let onlyWords = wordList.map((item) => item.word);

    console.log(wordList);
    setWords(onlyWords);
  };

  const onSelectionChange = async (key: Key) => {
    const id = key.valueOf();
    const value = suggestions[id as number].value;
    let data = await getData(value.toLowerCase());
    let wordList = await getWordsFromData(data);

    let onlyWords = wordList.map((item) => item.word);

    console.log(wordList);
    setWords(onlyWords);
  };

  return (
    <div className="h-72 mb-10">
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
          autoFocus={false}
          value={value}
          onValueChange={setValue}
          onInputChange={onInputChanged}
          allowsEmptyCollection={false}
          allowsCustomValue={true}
          onSelectionChange={onSelectionChange}
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

      <Listbox
        className="border-2 rounded-lg border-slate-200 max-w-[320px] max-h-96 overflow-y-auto pb-10"
        aria-label="listbox"
        emptyContent={
          <div className="h-full flex justify-center items-center ">
            <p className="text-sm text-black font-mono">Та үгээ оруулна уу</p>
          </div>
        }
      >
        {words.map((word) => (
          <ListboxItem key={word}>{word}</ListboxItem>
        ))}
      </Listbox>
    </div>
  );
};
export default BolorToliMain;
