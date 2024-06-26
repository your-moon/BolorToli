import React from "react";
import {
  Chip,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import { MnIcon } from "../icons/country/MnIcon";
import { MoreIcon } from "../icons/moreIcon";
import { EnIcon } from "../icons/country/EnIcon";
import { RuIcon } from "../icons/country/RuIcon";
import { CnIcon } from "../icons/country/CnIcon";
import { KrIcon } from "../icons/country/KrIcon";
import { GermanyIcon } from "../icons/country/GermanyIcon";
interface IconProps {
  height?: number;
  width?: number;
}

export interface LanguagePair {
  id: string;
  name: string;
  Icon1: React.ComponentType<IconProps>;
  Icon2: React.ComponentType<IconProps>;
}

export const languagePairs: LanguagePair[] = [
  {
    id: "1",
    name: "mn-to-en",
    Icon1: MnIcon,
    Icon2: EnIcon,
  },
  {
    id: "8",
    name: "mn-to-ru",
    Icon1: MnIcon,
    Icon2: RuIcon,
  },
  {
    id: "3",
    name: "mn-to-germany",
    Icon1: MnIcon,
    Icon2: GermanyIcon,
  },
  {
    id: "4",
    name: "mn-to-kr",
    Icon1: MnIcon,
    Icon2: KrIcon,
  },
  {
    id: "7",
    name: "mn-to-cn",
    Icon1: MnIcon,
    Icon2: CnIcon,
  },
];

interface LanguagePairSelectorProps {
  lId: string;
  onClick?: () => void;
}

interface SelectedLanguagePairProps {
  lId: string;
  onClick?: () => void;
}

const SelectedLanguagePair = (props: SelectedLanguagePairProps) => {
  let pair = languagePairs.find((pair) => pair.id === props.lId);
  if (!pair) {
    pair = languagePairs[0];
  }
  return (
    <div
      className="flex flex-row items-center justify-center mb-2"
      onClick={props.onClick}
    >
      <Chip color="default" size="md" radius="sm">
        <pair.Icon1 />
      </Chip>
      <MoreIcon />
      <Chip color="default" size="md" radius="sm">
        <pair.Icon2 />
      </Chip>
    </div>
  );
};

const LanguagePairSelector = (props: LanguagePairSelectorProps) => {
  let pair = languagePairs.find((pair) => pair.id === props.lId);
  if (!pair) {
    pair = languagePairs[0];
  }

  return (
    <div
      className="flex flex-row items-center justify-center gap-3"
      onClick={props.onClick}
    >
      <pair.Icon1 width={20} />
      <MoreIcon />
      <pair.Icon2 width={20} />
    </div>
  );
};

interface LanguageSwitchProps {
  direction: string;
  setDirection: React.Dispatch<React.SetStateAction<string>>;
}

const LanguageSwitch = ({ direction, setDirection }: LanguageSwitchProps) => {
  return (
    <Dropdown className="bg-neutral-100">
      <DropdownTrigger>
        <div>
          <SelectedLanguagePair lId={direction} />
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {languagePairs.map((pair) => (
          <DropdownItem key={pair.id} onClick={() => setDirection(pair.id)}>
            <LanguagePairSelector lId={pair.id} />
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default LanguageSwitch;
