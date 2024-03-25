const assignmentOperator = (g, h, operator) => {
    switch (operator) {
        case "=":
            return `${g} = ${h} = ${g = h}`;
        case "+=":
            return `${g} += ${h} = ${g += h}`;
        case "-=":
            return `${g} -= ${h} = ${g -= h}`;
        case "*=":
            return `${g} *= ${h} = ${g *= h}`;
        case "/=":
            return `${g} /= ${h} = ${g /= h}`;
        case "%=":
            return `${g} %= ${h} = ${g %= h}`;
        case "**=":
            return `${g} **= ${h} = ${g **= h}`;
        case "<<=":
            return `${g} <<= ${h} = ${g <<= h}`;
        case ">>=":
            return `${g} >>= ${h} = ${g >>= h}`;
        case ">>>=":
            return `${g} >>>= ${h} = ${g >>>= h}`;
        case "&=":
            return `${g} &= ${h} = ${g &= h}`;
        case "^=":
            return `${g} ^= ${h} = ${g ^= h}`;
        case "|=":
            return `${g} |= ${h} = ${g |= h}`;
        default:
            return "Invalid operator";
    }
}

document.getElementById("as").addEventListener("click", () => {
    const g = Number(document.getElementById("g").value);
    const h = Number(document.getElementById("h").value);
    const result = assignmentOperator(g, h, "=");
    document.getElementById("result4").innerText = result;
});

document.getElementById("addas").addEventListener("click", () => {
    const g = Number(document.getElementById("g").value);
    const h = Number(document.getElementById("h").value);
    const result = assignmentOperator(g, h, "+=");
    document.getElementById("result4").innerText = result;
});

document.getElementById("subas").addEventListener("click", () => {
    const g = Number(document.getElementById("g").value);
    const h = Number(document.getElementById("h").value);
    const result = assignmentOperator(g, h, "-=");
    document.getElementById("result4").innerText = result;
});

document.getElementById("mulas").addEventListener("click", () => {
    const g = Number(document.getElementById("g").value);
    const h = Number(document.getElementById("h").value);
    const result = assignmentOperator(g, h, "*=");
    document.getElementById("result4").innerText = result;
});

document.getElementById("divas").addEventListener("click", () => {
    const g = Number(document.getElementById("g").value);
    const h = Number(document.getElementById("h").value);
    const result = assignmentOperator(g, h, "/=");
    document.getElementById("result4").innerText = result;
});

document.getElementById("modas").addEventListener("click", () => {
    const g = Number(document.getElementById("g").value);
    const h = Number(document.getElementById("h").value);
    const result = assignmentOperator(g, h, "%=");
    document.getElementById("result4").innerText = result;
});


export default assignmentOperator;