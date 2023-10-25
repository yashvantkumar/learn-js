"use strict";
let message = 'Hello World!';
console.log(message);
let regexp = new RegExp('ab+c');
// let array: Array<number> = [1, 2, 3, 4];
// let set: Set<number> = new Set(array);
class Queue {
    data = [];
    push(item) { this.data.push(item); }
    ;
    pop() { return this.data.shift(); }
    ;
}
;
let queue = new Queue();
queue.push(10);
console.log(queue);
let array = [1, 2, 3, 4, 5];
array = [1, 2, 3];
//Tuple
let tuple = ['0', 0];
tuple = ['1', 2];
let center = {
    x: 0,
    y: 0,
};
let unit = {
    x: 0,
    y: 0,
};
function add(a, b) {
    return a + b;
}
;
function log(message) {
    console.log(message);
}
;
function sum(...values) {
    return values.reduce((previous, current) => {
        return previous + current;
    });
}
;
console.log(sum(1, 2, 3, 4, 5));
let user = {
    id: 'user-1234',
};
let product = {
    id: 'product-1234',
};
let point2D = { x: 1, y: 2 };
let point3D = { x: 1, y: 2, z: 3 };
// Extra info is OK
point2D = point3D;
function takePoint2D(point) {
    return point2D;
}
;
// Duck typing
takePoint2D(point3D);
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    move(distanceInMeters) {
        console.log(name);
    }
}
;
class QueueHandler {
    data = [];
    push(item) {
        this.data.push(item);
    }
    ;
    pop() {
        return this.data.shift();
    }
    ;
}
;
const queue123 = new QueueHandler();
const queue456 = new QueueHandler();
queue123.push(123);
queue123.pop();
queue456.push("hello");
console.log(queue123, queue456);
