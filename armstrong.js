//armstrong number
const prompt=require('prompt-sync')();
var n=parseInt(prompt("Enter the number to check: "));
a=n%10;
b=Math.floor(n/10);
c=b%10;
d=Math.floor(b/10);

sum=a*a*a+c*c*c+d*d*d;

{
    if(sum==n)
        console.log("The Number is Armstrong: ",n);
    else
        console.log("The Number is Not Armstrong: ",n);
}