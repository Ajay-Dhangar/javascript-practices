const arithmeticOperator = (a, b, operator) => {
  switch (operator) {
    case "+":
      return `${a} + ${b} = ${a + b}`;
    case "-":
      return `${a} - ${b} = ${a - b}`;
    case "*":
      return `${a} * ${b} = ${a * b}`;
    case "/":
      return `${a} / ${b} = ${a / b}`;
    case "%":
      return `${a} % ${b} = ${a % b}`;
    default:
      return "Invalid operator";
  }
};

document.getElementById("add").addEventListener("click", () => {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  const result = arithmeticOperator(a, b, "+");
  document.getElementById("result1").innerText = result;
});

document.getElementById("sub").addEventListener("click", () => {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  const result = arithmeticOperator(a, b, "-");
  document.getElementById("result1").innerText = result;
});

document.getElementById("mul").addEventListener("click", () => {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  const result = arithmeticOperator(a, b, "*");
  document.getElementById("result1").innerText = result;
});

document.getElementById("div").addEventListener("click", () => {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  const result = arithmeticOperator(a, b, "/");
  document.getElementById("result1").innerText = result;
});

document.getElementById("mod").addEventListener("click", () => {
  const a = Number(document.getElementById("a").value);
  const b = Number(document.getElementById("b").value);
  const result = arithmeticOperator(a, b, "%");
  document.getElementById("result1").innerText = result;
});

export default arithmeticOperator;