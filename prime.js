//prime number
const prompt= require('prompt-sync')();

var n=parseInt(prompt("Enter the Numner To Check: "));
let p=0,i;
for(i=2;i<n;i++)
{
    if(n%i==0)
    {
        p=1;
    }
}
if(p==0)
    console.log("prime: ",n);
else
    console.log("not prime: ",n);