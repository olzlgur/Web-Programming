const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

let text = "";
fruits.forEach (function(value, key) {
  console.log(key,value);
})