/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    const cars = [];

    for (let i = 0; i < position.length; i++) {
        cars.push([position[i], speed[i]]);
    }

    cars.sort((a, b) => b[0] - a[0]);

    const stack = [];

    for (const [currentPosition, currentSpeed] of cars) {
        const time = (target - currentPosition) / currentSpeed;

        if (
            stack.length === 0 ||
            time > stack[stack.length - 1]
        ) {
            stack.push(time);
        }
    }

    return stack.length;
};