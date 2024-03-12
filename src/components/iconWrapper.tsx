import { Tooltip } from "@nextui-org/react";
import { AdjIcon } from "./icons/AdjIcon";
import { AdVerbIcon } from "./icons/AdverbIcon";
import { NounIcon } from "./icons/NounIcon";
import { VerbIcon } from "./icons/VerbIcon";

interface IconWrapperProps {
  tag: string;
}
export const IconWrapper = ({ tag }: IconWrapperProps) => {
  console.log("TAG", tag);
  if (tag === "noun") {
    return (
      <Tooltip content="Noun | Нэр үг" placement="top">
        <NounIcon />
      </Tooltip>
    );
  }
  if (tag === "verb") {
    return (
      <Tooltip content="Verb | Үйл үг" placement="top">
        <VerbIcon />
      </Tooltip>
    );
  }

  if (tag === "adv.") {
    return (
      <Tooltip content="Adverb | Үйлт нэр" placement="top">
        <AdVerbIcon />
      </Tooltip>
    );
  }

  if (tag === "adj.") {
    return (
      <Tooltip content="Adjective | Тэмдэг нэр" placement="top">
        <AdjIcon />
      </Tooltip>
    );
  }

  return <></>;
};
