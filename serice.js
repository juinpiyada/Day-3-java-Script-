//1.2.3.4.+..100
const prompt=require('prompt-sync')();
let s=0;
n=parseInt(prompt("Enter The Range: "));

for(let i=1;i<=n;i++)
{
     s=s+i;

}
console.log(s);