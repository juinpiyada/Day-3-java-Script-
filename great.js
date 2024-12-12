//greatest among threee number

const prompt=require('prompt-sync')();

var a=parseInt(prompt("Enter the Number: "));
var b=parseInt(prompt("Enter The Number: "));
var c=parseInt(prompt("Enter The Number: "));

{
if(a>b)
    if(a>c)
    console.log("The Number is greatest: ",a);
else 
    console.log("The greatews is: ",b);

    if(b>c)
        console.log("The Greates Number is: ",b);
    else
        console.log("The Greates Number is: ",c);


}