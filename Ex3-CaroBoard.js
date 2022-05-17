let isRivalTurn=true;

function play(x,y){
    let elementTitle="display"+x+y
    let isTicked=document.getElementById(elementTitle).value=="";
    if(isRivalTurn&&!isTicked){

        document.getElementById(elementTitle).innerText="x"
        isRivalTurn=false
    }else if(!isRivalTurn&&!isTicked){

        document.getElementById(elementTitle).innerText="o"
        isRivalTurn=true
    }
}
