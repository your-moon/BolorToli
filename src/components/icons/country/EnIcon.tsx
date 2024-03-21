import { Image } from "@nextui-org/react";

interface EnIconProps {
  width?: number;
  height?: number;
}

export const EnIcon = (props: EnIconProps) => {
  return (
    <Image
      radius="none"
      src="/EN.svg"
      width={props.width}
      height={props.height}
    />
  );
};
