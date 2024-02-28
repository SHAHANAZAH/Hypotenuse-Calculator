//let a;
//let b;
//let c;

//a=window.prompt("Enter the value of side a");
//a=Number(a);

//b=window.prompt("Enter the value of side b");
//b=Number(b);

//c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));

//console.log("Side C:",c);

document.getElementById("on").onclick=function(){
    let a=document.getElementById("tA").value;
    a=Number(a);
    let b=document.getElementById("tB").value;
    b=Number(b);
    let c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    document.getElementById("clabel").innerHTML= "Side C:"+ " "+c;
}

