export function DemoLane() {
  return (
    <div className="med rise">
      <div className="ui dl" data-demo-lane="">
        {" "}
        <div className="row b">
          <b>Try a lane</b>
          <span className="m">A demo. Nothing runs on your machine</span>
        </div>
        {" "}
        <div className="dl-input" style={{ marginTop: "12px" }}>Add a Download CSV button above the invoice table.</div>
        {" "}
        <div className="dl-btns">
          <button type="button" className="dl-lane" aria-pressed="true">Lane</button>
          <button type="button" className="dl-send">Send</button>
        </div>
        {" "}
        <ul className="dl-log" aria-live="polite" />
        {" "}
        <div className="dl-end" hidden>
          <button type="button" className="dl-merge">Merge into main</button>
          <button type="button" className="dl-remove">Remove lane</button>
          <label>
            <input type="checkbox" className="dl-conflict" />
            {" "}Make it conflict
          </label>
        </div>
        {" "}
        <div className="dl-result" aria-live="polite" />
        {" "}
      </div>
    </div>
  );
}
