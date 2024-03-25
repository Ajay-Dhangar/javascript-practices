const compareOperator = (c, d, operator) => {
  switch (operator) {
    case "==":
      return `${c} == ${d} = ${c == d}`;
    case "===":
      return `${c} === ${d} = ${c === d}`;
    case "!=":
      return `${c} != ${d} = ${c != d}`;
    case "!==":
      return `${c} !== ${d} = ${c !== d}`;
    case ">":
      return `${c} > ${d} = ${c > d}`;
    case "<":
      return `${c} < ${d} = ${c < d}`;
    case ">=":
      return `${c} >= ${d} = ${c >= d}`;
    case "<=":
      return `${c} <= ${d} = ${c <= d}`;
    default:
      return "Invalid operator";
  }
};

document.getElementById("eq").addEventListener("click", () => {
    const c = Number(document.getElementById("c").value);
    const d = Number(document.getElementById("d").value);
    const result = compareOperator(c, d, "==");
    document.getElementById("result2").innerText = result;
    }
);

document.getElementById("neq").addEventListener("click", () => {
    const c = Number(document.getElementById("c").value);
    const d = Number(document.getElementById("d").value);
    const result = compareOperator(c, d, "!=");
    document.getElementById("result2").innerText = result;
    }
);

document.getElementById("seq").addEventListener("click", () => {
    const c = Number(document.getElementById("c").value);
    const d = Number(document.getElementById("d").value);
    const result = compareOperator(c, d, "===");
    document.getElementById("result2").innerText = result;
    }
);

document.getElementById("sneq").addEventListener("click", () => {
    const c = Number(document.getElementById("c").value);
    const d = Number(document.getElementById("d").value);
    const result = compareOperator(c, d, "!==");
    document.getElementById("result2").innerText = result;
    }
);

document.getElementById("gt").addEventListener("click", () => {
    const c = Number(document.getElementById("c").value);
    const d = Number(document.getElementById("d").value);
    const result = compareOperator(c, d, ">");
    document.getElementById("result2").innerText = result;
    }
);

document.getElementById("lt").addEventListener("click", () => {
    const c = Number(document.getElementById("c").value);
    const d = Number(document.getElementById("d").value);
    const result = compareOperator(c, d, "<");
    document.getElementById("result2").innerText = result;
    }
);

document.getElementById("gte").addEventListener("click", () => {
    const c = Number(document.getElementById("c").value);
    const d = Number(document.getElementById("d").value);
    const result = compareOperator(c, d, ">=");
    document.getElementById("result2").innerText = result;
    }
);

document.getElementById("lte").addEventListener("click", () => {
    const c = Number(document.getElementById("c").value);
    const d = Number(document.getElementById("d").value);
    const result = compareOperator(c, d, "<=");
    document.getElementById("result2").innerText = result;
    }
);

export default compareOperator;