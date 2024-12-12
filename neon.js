//neon number cheack 

const prompt=require('prompt-sync')();

 var n=parseInt(prompt("Enter The Number To Cheack: "));

let q;
q=n*n;
a=n%10;
b=Math.floor(n/10);

sum=a+b;
if(n==sum)
    console.log("neon");
else
    console.log("not neon");