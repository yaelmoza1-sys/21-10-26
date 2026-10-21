let a="yael"
let b="moza"

function function1(a,b)
{
    a = a+b
    b = a.slice(0, a.length - b.length)
    a = a.slice(b.length)
    console.log("a:",a)
    console.log("b:",b)
}
function1(a,b)