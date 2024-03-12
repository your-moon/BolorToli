interface VerbIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

export const VerbIcon = (props: VerbIconProps) => {
  return (
    <svg
      width={props.width || 17}
      height={props.height || 16}
      viewBox={`0 0 ${props.width || 17} ${props.height || 16}`}
      fill={props.fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="17" height="16" rx="8" fill="#867070" />
      <path
        d="M11.1885 6L8.96973 12H8.03223L5.81348 6H6.81348L8.46973 10.7812H8.53223L10.1885 6H11.1885Z"
        fill="white"
      />
    </svg>
  );
};
