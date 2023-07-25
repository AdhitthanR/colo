const color=["#4A772F" , "#61ba49" ,"#337aad" ,"#b2a533" ,"#c227b7"];
const val=["BABY", "I DON,T NEED","DOLLAR BILLS","TO HAVE","FUN TONIGHT","I LOVE CHEAP THRILLS"];

const title = document.querySelector(".text");
const bg = document.querySelector(".col");
    let i =0;
    setInterval(()=>{
    switch(i)
    {
        case 0:
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            {
            title.innerHTML = val[i];
            bg.setAttribute("style", `background: ${color[i]}; opacity:0.8;`);
            i++;
            break;
            }
            default:
                {
                    i=0;
                }
    }
    },400);
