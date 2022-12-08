const x = ["", 4, true];
//const test = 3;
const a = [];
function checktype(x) {
  // check the whole array
  for (let i = 0; i < x.length; i++) {
    //pushes the object type to a new array
    a.push(typeof x[i]);
  }
  //logs the array with the object types
  console.log(a);
}
