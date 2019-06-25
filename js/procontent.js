window.onload=function(){
    //获取元素
let imglist=document.querySelectorAll(".content .conimg .left .leftin .image>img");
let dotlist=document.querySelectorAll(".content .conimg .left .leftin .dot .dotl");
let jlist=document.querySelectorAll(".content .conimg .left .leftin .jian>div")
let jian=document.querySelectorAll(".content .conimg .left .leftin .jian")
let bigbox=document.querySelector(".content .conimg .left .leftin");
imglist[0].style.left="0px";
dotlist[0].classList.add("dothover")    //第一张图片和第一个点的状态
let index=0;  //记录下标
let next=0;   //记录下标
let flag=true;  //设置开关

bigbox.onmouseover=()=>{   //鼠标移入
    jian.style.display="block"
}
bigbox.onmouseout=()=>{    //鼠标移出
    jian.style.display="none"
}

dotlist.forEach((v,i)=>{    //dot遍历
    v.onclick=()=>{        //dot点击
        if(i>index){     //将i与当前的index 比较，确定怎么移动
            if(!flag){return}     //开关
            flag=false
            next=i               //i为下一个
            dotlist.forEach((a)=>{a.classList.remove("dothover")})
            v.classList.add("dothover")
            imglist[index].style.left="0px";
            imglist[next].style.left="300px";    //当前和下一张图的初始位置
            animate(imglist[index],{left:-300}) 
            animate(imglist[next],{left:0},()=>{flag=true}) 
            index=next
        }
        if(i<index){     //将i与当前的index 比较，确定怎么移动
            if(!flag){return}     //开关
            flag=false
            next=i               //i为下一个
            dotlist.forEach((a)=>{a.classList.remove("dothover")})
            v.classList.add("dothover")
            imglist[index].style.left="0px";
            imglist[next].style.left="-300px";    //当前和下一张图的初始位置
            animate(imglist[index],{left:300}) 
            animate(imglist[next],{left:0},()=>{flag=true}) 
            index=next
        }

    }

})  
jlist[1].onclick=()=>{    //箭头右点击
    move()
}
jlist[0].onclick=()=>{    //箭头做点击
    if(!flag){return}     //开关
    flag=false
    next--             
    if(next<0){next=imglist.length-1} 
    imglist[index].style.left="0px";
    imglist[next].style.left="-1349px";    //当前和下一张图的初始位置
    animate(imglist[index],{left:1349}) 
    animate(imglist[next],{left:0},()=>{
        dotlist.forEach((a)=>{a.classList.remove("dothover")})
        dotlist[next].classList.add("dothover")
        flag=true
    }) 
    index=next
}
function move(){
    if(!flag){return}    //设置开关，针对箭头点击，如果为true,可执行下面
    flag=false          //开始轮播，设置为flase
    next++
    if(next>imglist.length-1){next=0}   //next在有限条件内变化
    imglist[index].style.left="0px";
    imglist[next].style.left="1349px";    //当前和下一张图的初始位置
    animate(imglist[index],{left:-1349}) 
    animate(imglist[next],{left:0},()=>{
        dotlist.forEach((a)=>{a.classList.remove("dothover")})
        dotlist[next].classList.add("dothover")
    })       //图片滚动后位置的变化,点的变化
    flag=true              //轮播变化结束，设置为true
    index=next;
}

}