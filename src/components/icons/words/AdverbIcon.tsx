interface AdVerbIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

export const AdVerbIcon = (props: AdVerbIconProps) => {
  return (
    <svg
      width={props.width || 40}
      height={props.height || 16}
      viewBox={props.width ? `0 0 ${props.width} ${props.height}` : "0 0 40 16"}
      fill={props.fill || "none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="16" rx="8" fill="#C8C6C6" />
      <path
        d="M13.0327 12.1406C12.6525 12.1406 12.3075 12.069 11.9976 11.9258C11.6877 11.7799 11.4416 11.5703 11.2593 11.2969C11.077 11.0208 10.9858 10.6875 10.9858 10.2969C10.9858 9.95312 11.0535 9.67448 11.189 9.46094C11.3244 9.24479 11.5054 9.07552 11.7319 8.95312C11.9585 8.83073 12.2085 8.73958 12.4819 8.67969C12.758 8.61719 13.0353 8.56771 13.314 8.53125C13.6785 8.48437 13.9741 8.44922 14.2007 8.42578C14.4299 8.39974 14.5965 8.35677 14.7007 8.29687C14.8075 8.23698 14.8608 8.13281 14.8608 7.98437V7.95312C14.8608 7.56771 14.7554 7.26823 14.5444 7.05469C14.3361 6.84115 14.0197 6.73437 13.5952 6.73437C13.1551 6.73437 12.8101 6.83073 12.5601 7.02344C12.3101 7.21615 12.1343 7.42187 12.0327 7.64062L11.1577 7.32812C11.314 6.96354 11.5223 6.67969 11.7827 6.47656C12.0457 6.27083 12.3322 6.1276 12.6421 6.04687C12.9546 5.96354 13.2619 5.92188 13.564 5.92188C13.7567 5.92188 13.978 5.94531 14.228 5.99219C14.4806 6.03646 14.7241 6.12891 14.9585 6.26953C15.1955 6.41016 15.3921 6.6224 15.5483 6.90625C15.7046 7.1901 15.7827 7.57031 15.7827 8.04688V12H14.8608V11.1875H14.814C14.7515 11.3177 14.6473 11.457 14.5015 11.6055C14.3556 11.7539 14.1616 11.8802 13.9194 11.9844C13.6772 12.0885 13.3817 12.1406 13.0327 12.1406ZM13.1733 11.3125C13.5379 11.3125 13.8452 11.2409 14.0952 11.0977C14.3478 10.9544 14.5379 10.7695 14.6655 10.543C14.7957 10.3164 14.8608 10.0781 14.8608 9.82812V8.98437C14.8218 9.03125 14.7358 9.07422 14.603 9.11328C14.4728 9.14974 14.3218 9.18229 14.1499 9.21094C13.9806 9.23698 13.8153 9.26042 13.6538 9.28125C13.495 9.29948 13.366 9.3151 13.2671 9.32812C13.0275 9.35937 12.8035 9.41016 12.5952 9.48047C12.3895 9.54818 12.2228 9.65104 12.0952 9.78906C11.9702 9.92448 11.9077 10.1094 11.9077 10.3437C11.9077 10.6641 12.0262 10.9062 12.2632 11.0703C12.5028 11.2318 12.8062 11.3125 13.1733 11.3125ZM19.731 12.125C19.231 12.125 18.7896 11.9987 18.4067 11.7461C18.0239 11.4909 17.7244 11.1315 17.5083 10.668C17.2922 10.2018 17.1841 9.65104 17.1841 9.01563C17.1841 8.38542 17.2922 7.83854 17.5083 7.375C17.7244 6.91146 18.0252 6.55339 18.4106 6.30078C18.7961 6.04818 19.2414 5.92188 19.7466 5.92188C20.1372 5.92188 20.4458 5.98698 20.6724 6.11719C20.9015 6.24479 21.076 6.39062 21.1958 6.55469C21.3182 6.71615 21.4132 6.84896 21.481 6.95312H21.5591V4H22.481V12H21.5903V11.0781H21.481C21.4132 11.1875 21.3169 11.3255 21.1919 11.4922C21.0669 11.6562 20.8885 11.8034 20.6567 11.9336C20.425 12.0612 20.1164 12.125 19.731 12.125ZM19.856 11.2969C20.2257 11.2969 20.5382 11.2005 20.7935 11.0078C21.0487 10.8125 21.2427 10.543 21.3755 10.1992C21.5083 9.85286 21.5747 9.45312 21.5747 9C21.5747 8.55208 21.5096 8.16016 21.3794 7.82422C21.2492 7.48568 21.0565 7.22266 20.8013 7.03516C20.5461 6.84505 20.231 6.75 19.856 6.75C19.4653 6.75 19.1398 6.85026 18.8794 7.05078C18.6216 7.2487 18.4276 7.51823 18.2974 7.85937C18.1698 8.19792 18.106 8.57812 18.106 9C18.106 9.42708 18.1711 9.8151 18.3013 10.1641C18.4341 10.5104 18.6294 10.7865 18.8872 10.9922C19.1476 11.1953 19.4705 11.2969 19.856 11.2969ZM29.2036 6L26.9849 12H26.0474L23.8286 6H24.8286L26.4849 10.7812H26.5474L28.2036 6H29.2036Z"
        fill="white"
      />
    </svg>
  );
};