import { Image } from "@nextui-org/react";

interface MnIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

export const MnIcon = (props: MnIconProps) => {
  return (
    <Image
      radius="none"
      src="/MN.svg"
      width={props.width}
      height={props.height}
    />
  );
};
