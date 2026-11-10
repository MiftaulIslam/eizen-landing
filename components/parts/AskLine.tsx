export function AskLine() {
  return (
    <div className="live" data-seq="700,800,900,800" data-hold="3400">
      <div className="ui" style={{ minHeight: "340px" }}>
        {" "}
        <div className="code">
          {" "}
          <div>
            <i>7</i>
            <span>
              <span className="kw">function</span>
              {" "}
              <span className="fn">total</span>
              {"(status) {"}
            </span>
          </div>
          {" "}
          <div>
            <i>8</i>
            <span>{"}"}</span>
          </div>
          {" "}
          <div className="hl">
            <i>9</i>
            <span>
              <span className="kw">const</span>
              {" "}TERMS_DAYS ={" "}
              <span className="st2">30</span>
            </span>
          </div>
          {" "}
          <div>
            <i>10</i>
            <span>
              <span className="kw">const</span>
              {" "}DAY_MS ={" "}
              <span className="st2">86400000</span>
            </span>
          </div>
          {" "}
          <div>
            <i>11</i>
            <span />
          </div>
          {" "}
          <div>
            <i>12</i>
            <span>
              <span className="kw">function</span>
              {" "}
              <span className="fn">daysOverdue</span>
              {"(item, today) {"}
            </span>
          </div>
          {" "}
          <div>
            <i>13</i>
            <span>
              {" "}
              <span className="kw">const</span>
              {" "}due = Date.parse(item.issued)
            </span>
          </div>
          {" "}
        </div>
        {" "}
        <div className="al-card a1">
          <div className="row b">
            <span className="m">Line 9</span>
            <span className="m">Alt+L</span>
          </div>
          <b>Invoice table days overdue column</b>
          <div className="m">Lines 9 to 19, 8m ago</div>
          {" "}
          <div className="lab a2">You asked</div>
          <p className="a2">Add a Days overdue column. Terms are 30 days from the issued date.</p>
          {" "}
          <div className="lab a3">Why</div>
          <p className="a3" data-type="3">Due date is issued plus 30 days. Whole days are compared at UTC midnight so time zones can't shift the count.</p>
        </div>
        {" "}
      </div>
    </div>
  );
}
