function rand(){
            var num=Math.random()*10+1;
            if(num>=9){location.replace("./obenntuyo/ben.html");}
            else if(num>=7){location.replace("./holo/holo.html");}
            else if(num>=5){location.replace("./yuru/yuru.html");}
            else if(num>=3){location.replace("./zeno/zeno.html");}
            else{location.replace("./scp/scp.html");}
            
}