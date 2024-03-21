import { Image } from "@nextui-org/react";

interface GermanyIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

export const GernamyIcon = (props: GermanyIconProps) => {
  return (
    <Image
      radius="none"
      src="/MN.svg"
      width={props.width}
      height={props.height}
    />
  );
};
