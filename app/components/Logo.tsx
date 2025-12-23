export default function Logo({
  className = "",
  color = "currentColor"
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      aria-label="Future Social Housing logo"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Block 1 - Top left */}
      <rect x="4" y="6" width="14" height="4" fill={color} rx="0.5" />
      {/* Block 2 - Center */}
      <rect x="7" y="13" width="14" height="4" fill={color} rx="0.5" />
      {/* Block 3 - Bottom right */}
      <rect x="10" y="20" width="14" height="4" fill={color} rx="0.5" />
    </svg>
  );
}
