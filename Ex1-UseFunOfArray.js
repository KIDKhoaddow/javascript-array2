let arrEx1=["Red","Green","White","Black"];
function linkArray(){
    let stringEx1=arrEx1.join(",")
    document.getElementById("result").innerText=stringEx1;
}

function showFoneNumber(){
    let stringEx2=document.getElementById("phoneNumber").value;
    let foneNumer=stringEx2.split("")
    let showString=""
    for (let i = 0; i < foneNumer.length; i++) {
        if(foneNumer[i]%2==0&&foneNumer[i+1]%2==0){
            showString+=""+foneNumer[i]+"-"

        }
        else {
            showString+=""+foneNumer[i]
        }
    }
    document.getElementById("result").innerText=showString

}


function showString(){
    let stringEx3=document.getElementById("inputString").value;
    let arrString=stringEx3.split("")
    let showString=""
    for (let i = 0; i < arrString.length; i++) {
        if(arrString[i]==arrString[i].toUpperCase()){
            showString+=""+arrString[i].toLowerCase()
        }else{
            showString+=""+arrString[i].toUpperCase()
        }
    }
    document.getElementById("result").innerHTML=""+showString
}