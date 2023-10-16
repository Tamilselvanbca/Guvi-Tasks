let obj1 = { name: 'person 1', age: 5 };
let obj2 = { age: 5, name: 'person 2' };
const obj1String = JSON.stringify(obj1, Object.keys(obj1).sort());
const obj2String = JSON.stringify(obj2, Object.keys(obj2).sort());
if (obj1String === obj2String) {
  console.log('The JSON objects are equivalent.');
} else {
  console.log('The JSON objects are not equivalent.');
}