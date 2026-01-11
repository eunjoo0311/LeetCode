/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = []

    for(const x of tokens) {
        if(x === "+" || x === "-" || x === "*" || x=== "/") {
            const b = stack.pop()
            const a = stack.pop()

            let v;

            if(x === '+') v = a+b;
            else if(x === '-') v= a-b;
            else if(x === "*") v = a*b;
            else {
                v = Math.trunc(a/b)
            }

            stack.push(v)
        } else {
            stack.push(Number(x))
        }
    }
    return stack.pop()
};