const bitwiseOperator = (i, j, operator) => {
    switch (operator) {
        case "&":
            return `${i} & ${j} = ${i & j}`;
        case "|":
            return `${i} | ${j} = ${i | j}`;
        case "~":
            if (e) {
                return `~${i} = ${~i}`;
            }
            return `~${j} = ${~j}`;
        case "^":
            return `${ i } ^ ${ j } = ${ i ^ j } `;
        case "<<":
            return `${ i } << ${ j } = ${ i << j } `;
        case ">>":
            return `${ i } >> ${ j } = ${ i >> j } `;
        case ">>>":
            return `${ i } >>> ${ j } = ${ i >>> j } `;
        default:
            return "Invalid operator";
    }
}    

export default bitwiseOperator;
