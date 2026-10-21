/**
 * Emblemat UE (flaga) wg oficjalnej konstrukcji geometrycznej:
 * proporcje 3:2, 12 gwiazd na okręgu o promieniu 1/3 wysokości,
 * kolory Reflex Blue #003399 i Yellow #FFCC00.
 */
const STAR =
  "0,-11.11 2.49,-3.43 10.57,-3.43 4.04,1.31 6.53,8.99 0,4.24 -6.53,8.99 -4.04,1.31 -10.57,-3.43 -2.49,-3.43";

const POSITIONS: [number, number][] = [
  [150, 33.33], [183.33, 42.27], [207.74, 66.67], [216.67, 100],
  [207.74, 133.33], [183.33, 157.74], [150, 166.67], [116.67, 157.74],
  [92.26, 133.33], [83.33, 100], [92.26, 66.67], [116.67, 42.27],
];

export default function EuEmblem({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 200" className={className} role="img" aria-label="Flag of the European Union">
      <rect width="300" height="200" fill="#003399" />
      {POSITIONS.map(([x, y]) => (
        <polygon key={`${x}-${y}`} points={STAR} transform={`translate(${x} ${y})`} fill="#FFCC00" />
      ))}
    </svg>
  );
}
