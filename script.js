let ismm = prompt("siz necha yosh siz")
if(Number(ismm) >= 18){
    alert("Siz voyaga yetkansiz")
} else{
    alert("Siz voyaga yetmagansiz")
}
alert("Hozir sizga random son chiqadi")
let soni = Math.ceil(Math.random() * 100)
alert(soni)

if(soni % 2 === 0) {
    alert("U juft son")
} else {
    alert("U toq son")
}


let son = prompt("Son kiriting")
let sonn = prompt("Son kiriting")

alert(`${son} + ${sonn} = ${Number(son) + Number(sonn)} \n  ${son} * ${sonn} = ${(son) * (sonn)} \n ${son} / ${sonn} = ${(son) / (sonn)} \n ${son} - ${sonn} = ${(son) - (sonn)}   `)

let ism = prompt("Ismingizni kiriting");

console.log("Katta harflarda:", ism.toUpperCase());
console.log("Ism uzunligi:", ism.length);
console.log("Birinchi harfi:", ism[0]);

let student = {
    name: "Abror",
    age: 16,
    course: "JavaScript",
    isActive: true
};

console.log(student);