function plus(id){
    var current = document.getElementById(id).value;
    if(current<100){
        current = Number(current) + 1;
        document.getElementById(id).value = current;
    }
    if(current >= 100){
        document.getElementById(id).value = 99;
    }
    
}
function minus(id){
    var current = document.getElementById(id).value;
    if(current>0){
        current = Number(current) - 1;
        document.getElementById(id).value = current;
    }
    if(current <= 0){
        document.getElementById(id).value = 1;
    }
    
}
function showHidePopupsCart(){
    var check = document.getElementById("popups-cart").classList;
    check.forEach(item => {
        if(item === "hide"){
            check.remove("hide");
        }else{
            check.add("hide");
        }
    });
}