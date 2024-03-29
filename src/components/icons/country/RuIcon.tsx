import { Image } from "@nextui-org/react";

interface RuIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

export const RuIcon = (props: RuIconProps) => {
  return (
    <Image
      radius="none"
      src="/RU.svg"
      width={props.width}
      height={props.height}
    />
  );
};
