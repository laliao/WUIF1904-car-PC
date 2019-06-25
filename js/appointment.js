window.onload=function(){
    /*验证码*/ 
    let img=document.querySelector(".content .cselect .card .text-box2>img")
    let shua=document.querySelector(".content .cselect .card .text-box2>i")
    let big=document.querySelector(".content .cselect .card .text-box2")
    big.onmouseover=(e)=>{
        shua.style.opacity=1;
        img.style.opacity=0.4;
        e.stopPropagation()
    }
    big.onmouseout=()=>{
        shua.style.opacity=0;
        img.style.opacity=1;
    }

}