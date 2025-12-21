export default function DiagramSVG() {
  return (
    <div className="w-full max-w-4xl mx-auto my-16">
      {/* Mobile: Vertical Layout */}
      <svg
        viewBox="0 0 320 750"
        className="w-full h-auto md:hidden"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Operator Box with subtle background */}
        <rect
          x="60"
          y="20"
          width="200"
          height="110"
          fill="#18181b"
          stroke="#3b82f6"
          strokeWidth="2"
          rx="4"
        />
        <text
          x="160"
          y="70"
          textAnchor="middle"
          className="fill-zinc-100 text-lg font-medium"
        >
          Operator
        </text>
        <text
          x="160"
          y="100"
          textAnchor="middle"
          className="fill-zinc-500 text-xs"
        >
          Controlled entry
        </text>

        {/* Arrow 1 (pointing down) */}
        <line
          x1="160"
          y1="130"
          x2="160"
          y2="190"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <polygon points="160,190 155,180 165,180" fill="#3b82f6" />

        {/* Framework Box */}
        <rect
          x="60"
          y="210"
          width="200"
          height="110"
          fill="#18181b"
          stroke="#3b82f6"
          strokeWidth="2"
          rx="4"
        />
        <text
          x="160"
          y="260"
          textAnchor="middle"
          className="fill-zinc-100 text-lg font-medium"
        >
          Framework
        </text>
        <text
          x="160"
          y="290"
          textAnchor="middle"
          className="fill-zinc-500 text-xs"
        >
          Moderated access
        </text>

        {/* Arrow 2 (pointing down) */}
        <line
          x1="160"
          y1="320"
          x2="160"
          y2="380"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <polygon points="160,380 155,370 165,370" fill="#3b82f6" />

        {/* Regulated Ecosystem Box */}
        <rect
          x="60"
          y="400"
          width="200"
          height="110"
          fill="#18181b"
          stroke="#3b82f6"
          strokeWidth="2"
          rx="4"
        />
        <text
          x="160"
          y="440"
          textAnchor="middle"
          className="fill-zinc-100 text-lg font-medium"
        >
          Regulated
        </text>
        <text
          x="160"
          y="460"
          textAnchor="middle"
          className="fill-zinc-100 text-lg font-medium"
        >
          Ecosystem
        </text>
        <text
          x="160"
          y="490"
          textAnchor="middle"
          className="fill-zinc-500 text-xs"
        >
          Provider integration
        </text>
      </svg>

      {/* Desktop: Horizontal Layout */}
      <svg
        viewBox="0 0 900 280"
        className="w-full h-auto hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Operator Box */}
        <rect
          x="40"
          y="85"
          width="220"
          height="110"
          fill="#18181b"
          stroke="#3b82f6"
          strokeWidth="2"
          rx="4"
        />
        <text
          x="150"
          y="135"
          textAnchor="middle"
          className="fill-zinc-100 text-lg font-medium"
        >
          Operator
        </text>
        <text
          x="150"
          y="160"
          textAnchor="middle"
          className="fill-zinc-500 text-sm"
        >
          Controlled entry
        </text>

        {/* Arrow 1 (pointing right) */}
        <line
          x1="260"
          y1="140"
          x2="310"
          y2="140"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <polygon points="310,140 300,135 300,145" fill="#3b82f6" />

        {/* Framework Box */}
        <rect
          x="330"
          y="85"
          width="220"
          height="110"
          fill="#18181b"
          stroke="#3b82f6"
          strokeWidth="2"
          rx="4"
        />
        <text
          x="440"
          y="135"
          textAnchor="middle"
          className="fill-zinc-100 text-lg font-medium"
        >
          Framework
        </text>
        <text
          x="440"
          y="160"
          textAnchor="middle"
          className="fill-zinc-500 text-sm"
        >
          Moderated access
        </text>

        {/* Arrow 2 (pointing right) */}
        <line
          x1="550"
          y1="140"
          x2="600"
          y2="140"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
        <polygon points="600,140 590,135 590,145" fill="#3b82f6" />

        {/* Regulated Ecosystem Box */}
        <rect
          x="620"
          y="85"
          width="220"
          height="110"
          fill="#18181b"
          stroke="#3b82f6"
          strokeWidth="2"
          rx="4"
        />
        <text
          x="730"
          y="125"
          textAnchor="middle"
          className="fill-zinc-100 text-lg font-medium"
        >
          Regulated
        </text>
        <text
          x="730"
          y="145"
          textAnchor="middle"
          className="fill-zinc-100 text-lg font-medium"
        >
          Ecosystem
        </text>
        <text
          x="730"
          y="170"
          textAnchor="middle"
          className="fill-zinc-500 text-sm"
        >
          Provider integration
        </text>
      </svg>
    </div>
  );
}
