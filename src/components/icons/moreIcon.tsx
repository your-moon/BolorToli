interface MoreIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

export const MoreIcon = (props: MoreIconProps) => {
  return (
    <svg
      width={props.width || 25}
      height={props.height || 24}
      viewBox={props.width ? `0 0 ${props.width} ${props.height}` : "0 0 25 24"}
      fill={props.fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M11 9L8 12L11 15" stroke="#151515" />
      <path d="M14 9L17 12L14 15" stroke="#151515" />
    </svg>
  );
};
