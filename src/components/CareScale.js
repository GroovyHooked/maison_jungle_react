import { useState } from "react";

function CareScale({ scaleValue, careType }) {
  //const [careValue, setCareValue] = useState();
  const range = [1, 2, 3];
  const bar = ["peu", "beaucoup", "À la folie"];

  const scaleType = careType === "light" ? "☀️" : "💧";
  const element = careType === "light" ? "d'ensoleillement" : "d'arrosage";

  const Foo = (value) => {
    //setCareValue(bar[value - 1]);
    return bar[value - 1];
  };

  return (
    <div>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <span
            key={rangeElem.toString()}
            data-value={scaleValue}
            onClick={(e) =>
              alert(
                "Il faut " +
                  Foo(
                    Number(e.target.attributes.getNamedItem("data-value").value)
                  ) +
                  " " +
                  element
              )
            }
          >
            {scaleType}
          </span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
