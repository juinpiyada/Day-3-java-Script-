//s=5+10+15+..................n

const prompt=require('prompt-sync')();
var n=parseInt(prompt("Enter The Range: "));
let i;
let s=0;
for(i=5;i<=n;i+=5)
{
    s=s+i;

}

console.log(s);
