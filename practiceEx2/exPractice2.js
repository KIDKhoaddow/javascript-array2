let arrayM

function createArray(){
    arrayM=new Array()
    let arrayElement=document.getElementById("inputArray").value;
    let isMultiArray=arrayElement.includes(";")
    if(isMultiArray){
        arrayM=arrayElement.split(";")
        for(let i=0;i<arrayM.length;i++){
            arrayM[i]=arrayM[i].split(",")
        }
    }else{
        arrayM=arrayElement.split(",")
    }
    document.getElementById("result").innerText=arrayM
}


function printArray(){
    document.getElementById("result").innerText=arrayM
}


function reverseArray(){
    document.getElementById("result").innerText=arrayM.reverse()
}
function countNumbericCharacters(){
    let countNumber=0
    for (let i = 0; i < arrayM.length; i++) {
        // for (let j = 0; j <arrayM[i] ; j++) {
            if(!isNaN(arrayM[i])){
                countNumber+=1
            }
        // }

    }
    document.getElementById("result").innerText="Số ký tự số trong mảng là "+countNumber
}

function countNumber(){
    let inputString=document.getElementById("inputArray").value;
    let countNumberString=0
    for (let i = 0; i < inputString.length; i++) {
        if(!isNaN(inputString[i])){
            countNumberString+=1
        }
    }
    document.getElementById("result").innerText=countNumberString
}

function checkElement






let charToFind
function findElement(x){
    x==charToFind
}
function changeElement(){
    charToFind="-"
    for (let i = 0; i <arrayM.length ; i++) {
        if(arrayM[i]===charToFind){
            arrayM[i]="_"
        }
    }

    document.getElementById("result").innerText=arrayM
}
