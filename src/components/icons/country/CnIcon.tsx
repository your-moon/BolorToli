import { Image } from "@nextui-org/react";

interface CnIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

export const CnIcon = (props: CnIconProps) => {
  return (
    <Image
      radius="none"
      src="/CN.svg"
      width={props.width}
      height={props.height}
    />
  );
};
