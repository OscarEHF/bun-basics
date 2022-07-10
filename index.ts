import path  from "node:path";

const a:string = "Hello world! :D";
console.log(a);

console.log(Bun.env.HELLO);
console.log(Bun.env.PORT);

console.log(path.join('hello', 'world'));
