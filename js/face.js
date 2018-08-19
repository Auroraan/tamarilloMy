/**
 * Created by ASUS on 2018/7/28.
 */
$(function(){
    var index=0;
    var zIndex=0;
    //调整层   注意：层已经调整好，但是不显示
    var imgindex=$(".banner");
    /*imgindex.eq(0).css("opacity",1);*/
    for(var i=0;i<imgindex.length;i++){
        imgindex.eq(i).css("z-index",imgindex.length-i-1);
    }
    $(".dian").eq(0).css("backgroundColor","red");
    function fun(res){
        //设置点点  再次进入的时候将之前点点颜色清除
       $(".dian").eq(index).css("backgroundColor","");
        if(res=="right"){
            index++;
            if(index==4){
                index=0;
            }
        }
        else{
            index--;
            if(index<0){
                index=3
            }
        }
        $(".dian").eq(index).css("backgroundColor","red");

        //图片切换
        for(var j=0;j<imgindex.length;j++){
            zIndex=imgindex.eq(j).css("z-index");
            if(res=="right"){
                zIndex++;
                if(zIndex==4){
                   imgindex.eq(j).css("opacity",0);
                }
                if(zIndex==3){
                    imgindex.eq(j).css("opacity",1);
                }
                imgindex.eq(j).css("z-index",parseInt(zIndex>3?0:zIndex))
            }
            else{
                zIndex--;
                if(zIndex==-1) {
                    imgindex.eq(j).css("opacity", 1);
                }
                if(zIndex==2){
                    imgindex.eq(j).css("opacity",0) ;
                }
                imgindex.eq(j).css("z-index",parseInt(zIndex<0?3:zIndex))
            }
        }
    }
  var timer= setInterval(function(){
        fun("right")
    },2000);
    //进入home  清除计时器
    $(".banner").mouseenter(function(){
        clearInterval(timer)
    });
    $(".banner").mouseleave(function(){
        timer= setInterval(function(){
            fun("right")
        },2000);
    });
    //鼠标进入点点
    $(".dian").each(function(index){
        $(this).mouseenter(function(){
          /*  console.log(index);*/
            clearInterval(timer);
            $(this).siblings().css("backgroundColor","");
            $(this).css("backgroundColor","red");
            //图片随点点切换
            console.log(index);
            var azIndex=zIndex;
            console.log(azIndex);
            var num=index-azIndex>0?index-azIndex:index-azIndex+4;
            console.log(num);
            for(var k=0;k<num;k++){
                console.log(1)
                fun("right");
            }
        });
        $(this).mouseleave(function(){
            timer=setInterval(function(){
                fun("right");
            },2000)
        })
    });
//导航栏菜单点击事件
    var ullist=$(".ullist");
    var headericon=$(".headericon");
    headericon.on("click",function(){
        //添加display属性时，可以间接设置自定义属性，方便修改
        /*ullist.toggleClass("ullist");*/
       if( ullist.attr("istrue")=="true"){
           ullist.css("display","block");
           ullist.attr("istrue","false")
       }
        else{
           ullist.css("display","none");
           ullist.attr("istrue","true")
       }
    })
});