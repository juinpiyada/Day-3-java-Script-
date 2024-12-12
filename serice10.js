//1+(1*2)+(1*2*3)+................N
const prompt=require('prompt-sync')();
var n = parseInt(prompt("Enter the range: "));

let i,s=1,s1=0;

for(i=1;i<=n;i++)
{
    s=s*i;
    s1=s1+s;
}
console.log(s1);
