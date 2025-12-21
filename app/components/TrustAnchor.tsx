import SectionContainer from "./SectionContainer";

export default function TrustAnchor() {
  const cities = ["Manchester", "Birmingham", "Leeds", "Bristol"];

  return (
    <SectionContainer className="border-t border-zinc-800">
      <div className="max-w-3xl">
        <h2 className="text-4xl font-medium tracking-tight text-zinc-50 mb-6">
          Built alongside live operating portfolios
        </h2>
        <p className="text-lg leading-relaxed text-zinc-400 mb-8">
          This framework has been developed alongside active operating companies
          managing residential portfolios across multiple UK cities.
        </p>

        <div className="border border-zinc-800 bg-zinc-900/50 p-8">
          <div className="font-mono text-sm text-zinc-500 mb-2">
            Operating Partner
          </div>
          <div className="text-xl text-zinc-300 mb-6">
            Verified Operating Company Ltd
          </div>

          <div className="font-mono text-sm text-zinc-500 mb-3">
            Active Locations
          </div>
          <div className="flex flex-wrap gap-3">
            {cities.map((city) => (
              <div
                key={city}
                className="px-4 py-2 bg-zinc-800/50 border border-zinc-700 text-sm text-zinc-300"
              >
                {city}
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
