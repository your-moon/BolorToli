import { Image } from "@nextui-org/react";

interface GermanyIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

export const GermanyIcon = (props: GermanyIconProps) => {
  return (
    <Image
      radius="none"
      src="/Gr.svg"
      width={props.width}
      height={props.height}
    />
  );
};
