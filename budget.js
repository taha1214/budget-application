const input = document.getElementById("input");
const button = document.getElementById("button");
let exArr = [];
button.onclick =()=>{
 const input2 = input.value;
 exArr.push({"expenses" : input2});
 console.log(exArr);
  let str = JSON.stringify(exArr);
 localStorage.setItem("expense", str);
}
