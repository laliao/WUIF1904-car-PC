window.onload=function(){
    //选项卡  
    let dhlist=document.querySelectorAll(".content .topp li>span")
    let conlist=document.querySelectorAll(".content .bottom .bottom-bt")
    let big=document.querySelector(".content .bottom")
    dhlist[0].classList.add("hover1")
    conlist[0].style.display="block"
    dhlist.forEach((v,i)=>{
        v.onclick=()=>{
            conlist.forEach((a,b)=>{
                a.style.display="none"
                dhlist[b].classList.remove("hover1")
            })
            v.classList.add("hover1")
            conlist[i].style.display="block"
        }


    })
    dhlist[2].addEventListener("click",()=>{
        big.style.height="260px"
    })
    dhlist[3].addEventListener("click",()=>{
        big.style.height="260px"
    })
    dhlist[0].addEventListener("click",()=>{
        big.style.height="582px"
    })
    dhlist[1].addEventListener("click",()=>{
        big.style.height="582px"
    })




}