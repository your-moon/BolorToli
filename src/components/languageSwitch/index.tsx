import { Chip } from "@nextui-org/react";
import { MnIcon } from "../icons/country/MnIcon";
import { MoreIcon } from "../icons/moreIcon";

const LanguageSwitch = () => {
  return (
    <div className="flex flex-row items-center justify-center mb-2">
      <Chip color="default" size="md" radius="sm">
        <MnIcon />
      </Chip>
      <MoreIcon />
      <Chip color="default" size="md" radius="sm">
        <MnIcon />
      </Chip>
    </div>
  );
};

export default LanguageSwitch;
