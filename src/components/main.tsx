import { Button, Input, Listbox, ListboxItem } from "@nextui-org/react";
import { getData } from "../utils/hash";
import { SendIcon } from "../assets/icons/SendIcon";
import React from "react";

const Main: React.FC = () => {
  const [words, setWords] = React.useState<string[]>([]);
  const [value, setValue] = React.useState<string>("");
  React.useEffect(() => {
    const text = "This is a test text";
    setWords(text.split(" "));
  }, []);

  const clearInput = () => {
    value && setValue("");
  };

  const onSumb = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let data = await getData(value);
    let json_data: ReqObj = await JSON.parse(data);

    console.log(json_data);
  };

  return (
    <div>
      <form className="flex flex-row w-full" onSubmit={onSumb}>
        <Input
          isClearable
          type="text"
          label="Орчуулах үгээ оруулна уу"
          value={value}
          onValueChange={setValue}
          variant="bordered"
          onClear={clearInput}
          className="max-w-[260px] mb-1 mr-1.5 h-12"
        />
        <Button
          type="submit"
          className="h-12 min-w-[50px]"
          isIconOnly
          color="default"
        >
          <SendIcon />
        </Button>
      </form>

      <Listbox className="border-2 rounded-lg border-slate-200">
        {words.map((word) => (
          <ListboxItem key={word}>{word}</ListboxItem>
        ))}
      </Listbox>
      <div className="w-auto h-auto">Value: {value}</div>
    </div>
  );
};
export default Main;
