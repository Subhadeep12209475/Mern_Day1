let juice = 50
let gstOnJuice = 0.1
let fries = 70
let gstOnfries = 0.05

let juicebill = juice+juice*gstOnJuice
let friesbill = fries+fries*gstOnJuice

const totalbill= juicebill+friesbill

console.log("finalbill: ",totalbill)