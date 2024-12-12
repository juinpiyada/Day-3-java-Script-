//s=1+(1+2)+(1+2+3)+(1+2+3+4)..............+N
const prompt=require('prompt-sync')();

var n=parseInt(prompt("Enter the rane: "));

let i; let s=0,s1=0;

for(i=1;i<=n;i++)
{
    s=s+i;
    s1=s+s1;
}

console.log(s1);