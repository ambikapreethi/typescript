//function returns number value.

function add(a:number,b:number):number{         
    let c=a+b;
    let para1=document.getElementById("para1");
    if(para1 != null)
    {
        para1.innerHTML = c.toString(); 
    }
    return c;
}



