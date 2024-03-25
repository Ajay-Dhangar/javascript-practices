import arithmeticOperator from "./operators/arithmeticOperator.js"
import compareOperator from "./operators/compareOperator.js"
import logicOperator from "./operators/logicOperator.js"
import assignmentOperator from "./operators/assignmentOperator.js"


console.log(arithmeticOperator(1, 2, "+"));
console.log(compareOperator(1, 2, "=="));
console.log(logicOperator(true, false, "&&"));
console.log(assignmentOperator(1, 2, "+="));