const prompt=require('prompt-sync')();
const n=prompt(parseInt("Enter the Number: "));

const a=n%10;
 const b=Math.floor (n/10);
const c=b%10;
 const d=Math.floor(b/10);

const rev=a*100+c*10+d;

console.log("the reverse is ",rev);