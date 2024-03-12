interface NoneIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

export const NoneIcon = (props: NoneIconProps) => {
  return (
    <svg
      width={props.width || 17}
      height={props.height || 16}
      viewBox={`0 0 ${props.width || 17} ${props.height || 16}`}
      fill={props.fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="17" height="16" rx="8" fill="#2C2C2C" />
    </svg>
  );
};
