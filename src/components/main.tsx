import { Button, Listbox, ListboxItem } from "@nextui-org/react";
import { SendIcon } from "../assets/icons/SendIcon";
import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import React from "react";
import { getData, getSuggestion } from "../utils/data";

interface suggestionObj {
  id: number;
  value: string;
}
const Main: React.FC = () => {
  const [words, setWords] = React.useState<string[]>([]);
  const [value, setValue] = React.useState<string>("");
  const [suggestions, setSuggestions] = React.useState<suggestionObj[]>([]);
  React.useEffect(() => {
    const text = "This is a test text";
    setWords(text.split(" "));
    value && setValue("");
  }, []);

  const onInputChanged = async (value: string) => {
    if (value.length === 0) {
      setSuggestions([]);
      return;
    }
    const data_suggestions = await getSuggestion(value);
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
    const data = await getData(value);
    const json_data: ReqObj = await JSON.parse(data);

    console.log(json_data);
  };

  return (
    <div>
      <form className="flex flex-row w-full h-14" onSubmit={onSumb}>
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
        className="border-2 rounded-lg border-slate-200"
        aria-label="listbox"
      >
        {words.map((word) => (
          <ListboxItem key={word}>{word}</ListboxItem>
        ))}
      </Listbox>
      <div className="w-auto h-auto">Value: {value}</div>
    </div>
  );
};
export default Main;

// <Input
//   isClearable
//   type="text"
//   label="Орчуулах үгээ оруулна уу"
//   value={value}
//   onValueChange={setValue}
//   variant="bordered"
//   onClear={clearInput}
//   className="max-w-[260px] mb-1 mr-1.5 h-12"
// />
