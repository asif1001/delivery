export function OilDeliveryLogo({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer circle */}
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="url(#gradient1)"
        stroke="#1e40af"
        strokeWidth="2"
      />
      
      {/* Oil drop shape */}
      <path
        d="M50 20C45 20 35 35 35 50C35 62 41.2 70 50 70C58.8 70 65 62 65 50C65 35 55 20 50 20Z"
        fill="#fbbf24"
      />
      
      {/* Truck silhouette */}
      <rect x="20" y="55" width="25" height="8" rx="2" fill="#1e40af" />
      <rect x="42" y="52" width="8" height="11" rx="2" fill="#1e40af" />
      <circle cx="27" cy="67" r="4" fill="#374151" />
      <circle cx="38" cy="67" r="4" fill="#374151" />
      
      {/* Tank/container */}
      <rect x="55" y="58" width="20" height="5" rx="2" fill="#6b7280" />
      <circle cx="75" cy="67" r="4" fill="#374151" />
      
      {/* Highlight on oil drop */}
      <ellipse cx="45" cy="35" rx="3" ry="5" fill="#fde047" opacity="0.8" />
      
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3b82f6" />
          <stop offset="100%" stopColor="#1e40af" />
        </linearGradient>
      </defs>
    </svg>
  );
}