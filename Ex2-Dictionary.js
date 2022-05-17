let englishWord=["apple","banana","ruler","book"]
let vietnamWord=["táo","chuối","thước kẻ","sách"]
var isVietSub=true
document.getElementById("language").innerText="English Translate"
function checkWordEnglish(x){
   return x ==document.getElementById("inputWord").value;
}
function checkWordVietnam(x){
   return x==document.getElementById("inputWord").value;
}
function findWord(){
if(isVietSub)

   document.getElementById("result").innerText=vietnamWord[englishWord.findIndex(checkWordEnglish )]
else
   document.getElementById("result").innerText=englishWord[vietnamWord.findIndex(checkWordVietnam )]

}
function languageSwap(){
   if(isVietSub){
      isVietSub=false
      document.getElementById("language").innerText="Viet Nam Translate"
   }else {
      isVietSub = true
      document.getElementById("language").innerText = "English Translate"
   }
}