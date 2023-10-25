let message: number;
// console.log(message);
message = 23;

let regexp: RegExp = new RegExp('ab+c');

// let array: Array<number> = [1, 2, 3, 4];

// let set: Set<number> = new Set(array);

class Queue<T> {
    private data: Array<T> = [];
    push(item: T) { this.data.push(item) };
    pop(): T | undefined { return this.data.shift() };
};

let queue: Queue<number> = new Queue();

queue.push(10);
console.log(queue);

let array: number[] = [1, 2, 3, 4, 5];

array = [1, 2, 3];

//Tuple
let tuple: [string, number] = ['0', 0];


tuple = ['1', 2];


//Objects

type Point = { x: number, y: number };

let center: { x: number, y: number } = {
    x: 0,
    y: 0,
};

let unit: Point = {
    x: 0,
    y: 0,
};


function add(a: number, b: number): number {
    return a + b;
};

function log(message: string): void {
    console.log(message);
};

function sum(...values: number[]) {
    return values.reduce((previous, current) => {
        return previous + current;
    });
};

console.log(sum(1, 2, 3, 4, 5))

// let add: (a: number, b: number) => number;

// add = function (a: number, b: number): number {
//     return a + b;
// };

type User = {
    id: string,
};

type Product = {
    id: string,
};

let user: User = {
    id: 'user-1234',
}

let product: Product = {
    id: 'product-1234',
};

type Point2D = { x: number, y: number };
type Point3D = { x: number, y: number, z: number };

let point2D: Point2D = { x: 1, y: 2 };
let point3D: Point3D = { x: 1, y: 2, z: 3 };

// Extra info is OK
point2D = point3D;

function takePoint2D(point: Point2D): Point2D {
    return point2D
};

// Duck typing
takePoint2D(point3D);


class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }

    public move(distanceInMeters: number): void {
        console.log(name);
    }
};


class QueueHandler<T> {
    data: T[] = [];
    push(item: T): void {
        this.data.push(item);
    };
    pop(): T | undefined {
        return this.data.shift();
    };
};

const queue123 = new QueueHandler<number>();
const queue456 = new QueueHandler<string>();

queue123.push(123);
queue123.pop();
queue456.push("hello");
console.log(queue123, queue456);