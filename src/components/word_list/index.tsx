import { Listbox, ListboxItem } from "@nextui-org/react";
import { Word } from "../../utils/data";
import { IconWrapper } from "../iconWrapper";

interface WordListProps {
  words: Word[];
  message: string;
}
const WordList: React.FC<WordListProps> = ({ words, message }) => {
  return (
    <Listbox
      className="justify-center items-center border-2 rounded-lg border-slate-200 min-w-[300px] max-w-[320px] max-h-96 overflow-y-auto "
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
  );
};

export default WordList;
