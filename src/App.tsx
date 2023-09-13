import React, { useEffect, useState } from "react";
import "./App.css";
import "gridjs/dist/theme/mermaid.css";
import { Grid, _ } from "gridjs-react";

function App() {
  const [valueData, setData] = useState<any>(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
      });
  }, []);

  return (
    <div className="App">
      {valueData !== null ? (
        <Grid
          data={
            valueData &&
            valueData.map(
              (r: any) =>
                [
                  r.id,
                  r.title,
                  r.price,
                  _(<button type="button">ver</button>),
                ] || []
            )
          }
          columns={["id", "title", "price", ""]}
          search={true}
          sort={true}
          style={{
            th: {
              "background-color": `#cecece`,
              color: `#000`,
              "border-bottom": "3px solid #fff",
              "text-align": "center",
              "font-size": "12px",
            },
            td: {
              "text-align": "center",
            },
          }}
          pagination={{
            limit: 5,
          }}
        />
      ) : (
        <Grid
          data={[]}
          columns={["id", "title", "price", ""]}
          search={true}
          sort={true}
          style={{
            th: {
              "background-color": `#cecece`,
              color: `#000`,
              "border-bottom": "3px solid #fff",
              "text-align": "center",
              "font-size": "12px",
            },
            td: {
              "text-align": "center",
            },
          }}
          pagination={{
            limit: 5,
          }}
        />
      )}
    </div>
  );
}

export default App;
