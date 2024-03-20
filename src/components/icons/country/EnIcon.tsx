import { Image } from "@nextui-org/react";

interface EnIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

export const EnIcon = (props: EnIconProps) => {
  return (
    <Image
      radius="none"
      src="../../../../public/EN.svg"
      width={props.width}
      height={props.height}
    />
  );
};
