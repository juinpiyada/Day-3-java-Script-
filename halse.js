//1+1/2+1/3
const prompt=require('prompt-sync')();
n=parseInt(prompt("Enter The Range: "));

let s=0;
let i;
for(i=1;i<=n;i++)
{
    s=s+1/i;
}
console.log(s);