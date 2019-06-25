window.onload=function(){

/*轮播 */
//获取元素
let imglist=document.querySelectorAll(".slideshow .image>div");
let dotlist=document.querySelectorAll(".slideshow .dot>div");
let jlist=document.querySelectorAll(".slideshow .key>div")
let bigbox=document.querySelector(".slideshow");
imglist[0].style.left="0px";
dotlist[0].classList.add("dothover")    //第一张图片和第一个点的状态
let index=0;  //记录下标
let next=0;   //记录下标
let flag=true;  //设置开关
let timer=null   //定义函数

timer=setInterval(move,1500)  //实现自动轮播
bigbox.onmouseover=()=>{   //鼠标移入整体停止轮播
    clearInterval(timer)
}
bigbox.onmouseout=()=>{    //鼠标移出开始轮播
    timer=setInterval(move,1500)
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
            imglist[next].style.left="1349px";    //当前和下一张图的初始位置
            animate(imglist[index],{left:-1349}) 
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
            imglist[next].style.left="-1349px";    //当前和下一张图的初始位置
            animate(imglist[index],{left:1349}) 
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


/*四块内容*/ 
let sbox=document.querySelectorAll(".segment .segin .box .boxin")
let sboxw=document.querySelector(".segment")
if(window.scrollY>=sboxw.offsetTop-303){

    
}






}
