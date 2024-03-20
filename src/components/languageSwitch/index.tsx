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
interface IconProps {
  height?: number;
  width?: number;
}

interface LanguagePair {
  id: number;
  name: string;
  Icon1: React.ComponentType<IconProps>;
  Icon2: React.ComponentType<IconProps>;
}

const languagePairs: LanguagePair[] = [
  {
    id: 1,
    name: "mn-to-en",
    Icon1: MnIcon,
    Icon2: EnIcon,
  },
  {
    id: 2,
    name: "mn-to-ru",
    Icon1: MnIcon,
    Icon2: RuIcon,
  },
];

interface LanguagePairSelectorProps {
  lId: number;
  onClick?: () => void;
}

interface SelectedLanguagePairProps {
  lId: number;
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
const LanguageSwitch: React.FC = () => {
  const [selectedPair, setSelectedPair] = React.useState<number>(1);
  return (
    <Dropdown>
      <DropdownTrigger>
        <div>
          <SelectedLanguagePair lId={selectedPair} />
        </div>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        {languagePairs.map((pair) => (
          <DropdownItem key={pair.id} onClick={() => setSelectedPair(pair.id)}>
            <LanguagePairSelector lId={pair.id} />
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default LanguageSwitch;
