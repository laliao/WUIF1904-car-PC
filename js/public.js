
    /*返回顶部*/
    let re=document.querySelector(".return")
    let floor=document.querySelector(".footer-wrap") //获取元素
    let speed,scroy,times  //声明变量和函数
    let topf=document.querySelector(".topfix")   //顶部导航
    window.onscroll=()=>{
        if(window.scrollY>=floor.offsetTop-356){   //判断，页面滚动高度大于等于底部距离页面顶部的高度
            re.style.opacity="1"   //return显示
        }else{
            re.style.opacity="0"
        }

/*顶部导航*/ 
        if(window.scrollY>="90"){
            topf.style.display="block"
            topf.style.transition="all .8s linear"
            topf.style.height="58px"
        }else{
            topf.style.transition="0s"
            topf.style.height="0"
        }
    }

    re.onclick=()=>{
        times=setInterval(()=>{
            // clearInterval(times)   
            scroy=document.documentElement.scrollTop   //获取滚动过的距离
            speed=Math.floor((0-scroy)/10)      //滚动速度
            scroy+=speed
            scrollTo(0,scroy)    //要滚到的位置
            if(scroy==0){      //终止条件
                clearInterval(times)
            }
        },20)
    }











