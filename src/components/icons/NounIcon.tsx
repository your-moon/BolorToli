interface NounIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

export const NounIcon = (props: NounIconProps) => {
  return (
    <svg
      width={props.width || 17}
      height={props.height || 16}
      viewBox={`0 0 ${props.width || 17} ${props.height || 16}`}
      fill={props.fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="17" height="16" rx="8" fill="#F0E5CF" />
      <path
        d="M7.04834 8.39062V12H6.12646V6H7.01709V6.9375H7.09521C7.23584 6.63281 7.44938 6.38802 7.73584 6.20313C8.0223 6.01563 8.39209 5.92188 8.84522 5.92188C9.25146 5.92188 9.60693 6.00521 9.91162 6.17187C10.2163 6.33594 10.4533 6.58594 10.6226 6.92187C10.7918 7.25521 10.8765 7.67708 10.8765 8.1875V12H9.95459V8.25C9.95459 7.77865 9.83219 7.41146 9.5874 7.14844C9.34261 6.88281 9.00667 6.75 8.57959 6.75C8.28532 6.75 8.0223 6.8138 7.79053 6.94141C7.56136 7.06901 7.38037 7.25521 7.24756 7.5C7.11475 7.74479 7.04834 8.04167 7.04834 8.39062Z"
        fill="#606060"
      />
    </svg>
  );
};
