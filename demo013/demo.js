function clock(){
    var hour=document.getElementById("hour");
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    var h=new Date().getHours();
    var m=new Date().getMinutes();
    var s=new Date().getSeconds();
    if(m<10){
        m='0'+m;
    }else if (h<10){
        h='0'+h;
    }else if(s<10){
        s='0'+s;
    }
    hour.innerHTML= h;
    minutes.innerHTML= m;
    seconds.innerHTML= s;
};
var interval=setInterval(clock,1000);