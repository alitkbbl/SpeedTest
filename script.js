const timerSet = document.querySelector(".timer");
const testArea = document.querySelector("#test-area");
const originTxt = document.querySelector("#origin-text p").innerHTML;
const testWrapper = document.querySelector(".test-wrapper");
const restart = document.querySelector("#reset");

 var timer=[0,0,0];
 var s=1;
 let timerTime;

function creatcheck(timer) {
    
    if(timer<=9) timer='0'+timer;
    return timer;
}

 function setTimerShow() {

    let craete = creatcheck(timer[0]) + ":" + creatcheck(timer[1]) + ":"+creatcheck(timer[2])%100;
    timer[2]++;
    timer[0]= Math.floor(timer[2]/100/60);
    timer[1]= Math.floor(timer[2]/100-timer[0]*60);

    timerSet.innerHTML = craete;
 }


 function startProsess() {
    if(s==1){
       timerTime = setInterval(setTimerShow,10);
        s=0;
    }
 }
 

 function spell() {

    let textEntered=testArea.value;
    let originTextTMP = originTxt.substring(0,textEntered.length);
    


    if(textEntered == originTxt){
        testWrapper.style.borderColor="green";
        clearInterval(timerTime);
    }
    else{
        if(textEntered == originTextTMP){
            testWrapper.style.borderColor="yellow";
        }
        else{
            testWrapper.style.borderColor="red";
        }
    }
    
 }

function reset() {

    clearInterval(timerTime);
    timer=[0,0,0];
    s=1;
    testArea.value="";
    timerSet.innerHTML="00:00:00";
    testWrapper.style.borderColor="grey";
}

 testArea.addEventListener("keypress",startProsess);
 testArea.addEventListener("keyup",spell);
 restart.addEventListener("click",reset)


