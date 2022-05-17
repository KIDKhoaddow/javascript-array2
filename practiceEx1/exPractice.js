let arrayEx
let maxNumber
let checkedNumber
function createArray(){
    arrayEx=new Array()
    let numerElement=document.getElementById("numberElement").value;
    for (let i=0;i<numerElement;i++){
        arrayEx[i]=+prompt("Xin mời nhập giá trị thứ"+(i+1)+":")
    }
}

function findNumberGreaterThan10(){
    let countNumer=0
    for (let i=0;i<arrayEx.length;i++){
        if(arrayEx[i]>=10){
            countNumer+=1
        }
    }
    document.getElementById("result").innerText="Có "+countNumer+" sô nguyên lớn hơn hoặc bằng 10"
}
function maxElement(x){
    return x==maxNumber
}

function findMax(){
    maxNumber=arrayEx[0]
    let indexNumber
    for(let i=1;i<arrayEx.length;i++){
        if(maxNumber<arrayEx[i]){
            maxNumber=arrayEx[i]
        }
    }
    indexNumber=arrayEx.findIndex(maxElement)
    document.getElementById("result").innerText="Giá trị lớn nhất trong mảng là : "
        +maxNumber+"\n"+"ở vị trí thứ "+indexNumber
}

function average(){
    let maxNumber=arrayEx[0]
    let indexNumber
    let sumNumber=arrayEx[0]
    for(let i=1;i<arrayEx.length;i++){
        if(maxNumber<arrayEx[i]){
            maxNumber=arrayEx[i]
        }
        sumNumber+=parseInt(arrayEx[i])
    }
    let averageNumber=sumNumber/arrayEx.length
    indexNumber=arrayEx.findIndex(maxElement)
    document.getElementById("result").innerText="Giá trị lớn nhất trong mảng là : "
        +maxNumber +"\n"+"Giá trị trung bình các phần tử trong mảng là :"+averageNumber.toFixed(2)
}

function reverseArray(){
    arrayEx.reverse()
    document.getElementById("result").innerText=arrayEx
}
function countVowel(){
    let vowelNumber=0
    for(let i=0;i<arrayEx.length;i++){
        if(arrayEx[i]<0){
            vowelNumber+=parseInt(arrayEx[i])
        }
    }
    document.getElementById("result").innerText="Tổng số nguyên âm trong chuỗi là :"+vowelNumber
}


function findElement(x){
   return   x === checkedNumber
}
function checkNumber(){
    let isOnArray=true
    checkedNumber= +prompt("Xin mời nhập số cần kiểm tra")
    isOnArray=arrayEx.findIndex(findElement)+1
    if(isOnArray){
        document.getElementById("result").innerText=checkedNumber+" is in the array"
    }else {
        document.getElementById("result").innerText=checkedNumber+" is not in the array"
    }
}

function checkNumberExist(){
    let isOnArray=true
    checkedNumber= +prompt("Xin mời nhập số cần kiểm tra")
    isOnArray=arrayEx.findIndex(findElement)+1
    if(isOnArray){
        arrayEx.splice(arrayEx.findIndex(findElement),arrayEx.findIndex(findElement)+1)
    }
    document.getElementById("result").innerText=arrayEx
}

function sortArray(){
    arrayEx.sort()
    document.getElementById("result").innerText=arrayEx
}

function linkArray(){

}