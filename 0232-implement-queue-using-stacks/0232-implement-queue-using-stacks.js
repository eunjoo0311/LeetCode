
var MyQueue = function () {
    this.input = []
    this.output = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
    this.input.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
    this.moveToOutput()

    return this.output.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
    this.moveToOutput()
    return this.output[this.output.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
    return this.input.length === 0 && this.output.length === 0
};

MyQueue.prototype.moveToOutput = function () {
    if (this.output.length === 0) {
        while (this.input.length > 0) {
            this.output.push(this.input.pop())
        }
    }
};


/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */