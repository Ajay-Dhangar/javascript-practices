const logicOperator = (e, f, operator) => {
    switch (operator) {
        case "&&":
            return `${e} && ${f} = ${e && f}`;
        case "||":
            return `${e} || ${f} = ${e || f}`;
        case "!":
            if (e) {
                return `!${e} = ${!e}`;
            }
            return `!${f} = ${!f}`;

        default:
            return "Invalid operator";
    }
};

document.getElementById("and").addEventListener("click", () => {
    const e = document.getElementById("e").value;
    const f = document.getElementById("f").value;
    const result = logicOperator(e, f, "&&");
    document.getElementById("result3").innerText = result;
});

document.getElementById("or").addEventListener("click", () => {
    const e = document.getElementById("e").value;
    const f = document.getElementById("f").value;
    const result = logicOperator(e, f, "||");
    document.getElementById("result3").innerText = result;
});

document.getElementById("not").addEventListener("click", () => {
    const e = document.getElementById("e").value;
    const f = document.getElementById("f").value;
    const result = logicOperator(e, f, "!");
    document.getElementById("result3").innerText = result;
});


export default logicOperator;