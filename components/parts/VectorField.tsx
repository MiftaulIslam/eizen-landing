export function VectorField() {
  return (
    <svg data-eigen="" viewBox="-240 -240 480 480" role="img" aria-label="Vectors around a circle transform under a matrix. Most turn. Those along two lines stay on their line and only change length.">
      {" "}
      <path className="ef-grid" />
      <path className="ef-turned" />
      <path className="ef-held" />
      {" "}
      <g className="ef-heads">
        <text className="ef-note" x="150" y="-190">λ = 2.5</text>
        <text className="ef-note" x="52" y="66">λ = 0.5</text>
      </g>
      {" "}
    </svg>
  );
}
