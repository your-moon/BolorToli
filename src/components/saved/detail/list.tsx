import React, { useEffect } from "react";
import { TranslationSerdeData } from "../../../Serialization";
import { Word, getWordsFromSerdeData } from "../../../utils/data";
import WordList from "../../word_list";

interface DetailTranslationsProps {
  detail?: TranslationSerdeData;
}
const DetailTranslations: React.FC<DetailTranslationsProps> = ({ detail }) => {
  const [words, setWords] = React.useState<Word[]>([]);

  useEffect(() => {
    async function fetchWords() {
      if (detail) {
        let ws = await getWordsFromSerdeData(detail);
        setWords(ws);
      }
    }

    fetchWords();
  }, [detail]);

  return <WordList words={words} message="No translations found" />;
};

export default DetailTranslations;
