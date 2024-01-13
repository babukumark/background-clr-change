"use strict"


 

let div =document.createElement("div");
div.setAttribute("id","container");
document.body.append(div);



let button1=document.createElement("button");
button1.setAttribute("id","click");
button1.innerText="submite";

let button2=document.createElement("button");
button2.setAttribute("id","colour-code-name");
button2.innerText="color code";

div.append(button1,button2)

document.body.append(button1,button2)

let colortypes = [
        "#FF5733",
        "#33FF57",
        "#5733FF",
        "#33FFF1",
        "#F133FF",
        "#33FF71",
        "#FF333D",
        "#33FFD7",
        "#FFC233",
        "#D433FF",
        "#33FFB5",
        "#FF3337",
        "#33FF8B",
        "#B333FF",
        "#33FFEC"
    ];
    
    let colorCount=0;

    function colorchange(){
        document.body.style.backgroundColor=colortypes[colorCount];
        button2.innerHTML=colortypes[colorCount];
        colorCount++
        if(colorCount==colortypes.length-1){
            colorCount=0
        }
    
    }
    button1.addEventListener("click",colorchange);

    

















    


