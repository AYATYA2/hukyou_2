
function MV(){
    var ax=MS(e);
    /*画像の位置を取ってくる */
    var inami=document.getElementById("inami");
    var cliantrect=inami.getBoundingClientRect();
    var sX=window.pageXOffset+cliantrect.left;
    var sY=window.pageYOffset+cliantrect.top;
       
    if(Math.abs(sX-ax.valmx)<=150){
            inami.style.left= ax.valmx +"px";
        if(sY<ax.valmy){inami.style.top= sY +100+"px";}
        else {inami.style.top= sY -100+"px";}
            }
        else if(sX>ax.valmx){
            inami.style.left= ax.valmx-100 +"px";
            if(sY<ax.valmy){inami.style.top= sY +100+"px";}
            else {inami.style.top= sY -100+"px";}
                }
            

                
        else{
            inami.style.left= sX+100 +"px";
            if(sY<ax.valmy){inami.style.top= sY +100+"px";}
            else {inami.style.top= sY -100+"px";}
                }
            
               
                
}

window.onload=function () {
    document.body.addEventListener("mousemove",function MS(e){
        var mX = e.pageX;
        var mY = e.pageY;
    
        var inami=document.getElementById("inami");
        var cliantrect=inami.getBoundingClientRect();
        var sX=window.pageXOffset+cliantrect.left;
        var sY=window.pageYOffset+cliantrect.top;
        document.getElementById("txtX").value=mX;
        document.getElementById("txtY").value=mY;
        document.getElementById("txtsX").value=sX;
        document.getElementById("txtsY").value=sY;
        
        if((sX-mX)*(sX-mX)+(sY-mY)*(sY-mY)<=22500)
            {
                inami.style.top= mY +"px";
                inami.style.left= mX +"px";
            }
        /*        
        inami.style.top="px";
        inami.style.left="px";
            */
        var obj=new Object();
        obj.valmx=mX;
        obj.valmy=mY;
        return obj;    
    
    });

    setInterval("MV()",2000);
    setInterval("iti()",20);    
}
   

function iti(){
    var h =MS(e); 
    document.getElementById("hi0").value=h.valmx;
    document.getElementById("hi1").value=h.valmy;
        
}