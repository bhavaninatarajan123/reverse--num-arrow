var a=parseInt(prompt("enter the numbers"));
let num=(number)=>{
temp=number;
var b
var c=0;
while(number>0){
    b=number%10;
    number=parseInt(number/10);
    c=c*10+b;
    
}
document.write(c)
}
(num(a))
