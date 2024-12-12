//fiboncaci sserice

const prompt= require('prompt-sync')();
var n=parseInt(prompt("Enter the range: "));
let i,s1=0,s2=1;
console.log(s1);
console.log(s2);

for(i=2;i<=n;i++)
{
    s3=s1+s2;
    console.log(s3);
    s1=s2;
    s2=s3;
}