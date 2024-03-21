import { Image } from "@nextui-org/react";

interface KrIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

export const KrIcon = (props: KrIconProps) => {
  return (
    <Image
      radius="none"
      src="/KR.svg"
      width={props.width}
      height={props.height}
    />
  );
};
