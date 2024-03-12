interface AdVerbIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

export const AdVerbIcon = (props: AdVerbIconProps) => {
  return (
    <svg
      width={props.width || 17}
      height={props.height || 16}
      viewBox={`0 0 ${props.width || 17} ${props.height || 16}`}
      fill={props.fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="17" height="16" rx="8" fill="#C8C6C6" />
      <path
        d="M8.01025 12.1406C7.63005 12.1406 7.28499 12.069 6.9751 11.9258C6.6652 11.7799 6.41911 11.5703 6.23682 11.2969C6.05452 11.0208 5.96338 10.6875 5.96338 10.2969C5.96338 9.95312 6.03109 9.67448 6.1665 9.46094C6.30192 9.24479 6.48291 9.07552 6.70947 8.95312C6.93604 8.83073 7.18604 8.73958 7.45947 8.67969C7.73551 8.61719 8.01286 8.56771 8.2915 8.53125C8.65609 8.48437 8.95166 8.44922 9.17822 8.42578C9.40739 8.39974 9.57406 8.35677 9.67822 8.29687C9.78499 8.23698 9.83838 8.13281 9.83838 7.98437V7.95312C9.83838 7.56771 9.73291 7.26823 9.52197 7.05469C9.31364 6.84115 8.99723 6.73437 8.57275 6.73437C8.13265 6.73437 7.7876 6.83073 7.5376 7.02344C7.2876 7.21615 7.11182 7.42187 7.01025 7.64062L6.13525 7.32812C6.2915 6.96354 6.49984 6.67969 6.76025 6.47656C7.02327 6.27083 7.30973 6.1276 7.61963 6.04687C7.93213 5.96354 8.23942 5.92188 8.5415 5.92188C8.73421 5.92188 8.95557 5.94531 9.20557 5.99219C9.45817 6.03646 9.70166 6.12891 9.93604 6.26953C10.173 6.41016 10.3696 6.6224 10.5259 6.90625C10.6821 7.1901 10.7603 7.57031 10.7603 8.04688V12H9.83838V11.1875H9.7915C9.729 11.3177 9.62484 11.457 9.479 11.6055C9.33317 11.7539 9.13916 11.8802 8.89697 11.9844C8.65479 12.0885 8.35921 12.1406 8.01025 12.1406ZM8.15088 11.3125C8.51546 11.3125 8.82275 11.2409 9.07275 11.0977C9.32536 10.9544 9.51546 10.7695 9.64307 10.543C9.77327 10.3164 9.83838 10.0781 9.83838 9.82812V8.98437C9.79932 9.03125 9.71338 9.07422 9.58057 9.11328C9.45036 9.14974 9.29932 9.18229 9.12744 9.21094C8.95817 9.23698 8.79281 9.26042 8.63135 9.28125C8.47249 9.29948 8.34359 9.3151 8.24463 9.32812C8.00505 9.35937 7.78109 9.41016 7.57275 9.48047C7.36702 9.54818 7.20036 9.65104 7.07275 9.78906C6.94775 9.92448 6.88525 10.1094 6.88525 10.3437C6.88525 10.6641 7.00374 10.9062 7.24072 11.0703C7.48031 11.2318 7.78369 11.3125 8.15088 11.3125Z"
        fill="white"
      />
    </svg>
  );
};
