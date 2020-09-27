var on = 0;
function btnChange(){
    // console.log("msh");
    if(!on){
        document.getElementById("bulbId").src = 'img/lighton.png';
        on = !on;
    }else{
        document.getElementById("bulbId").src = 'img/lightoff.png';
        on = !on;
    }
}