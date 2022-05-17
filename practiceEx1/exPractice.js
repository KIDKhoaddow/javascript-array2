let arrayEx
let maxNumber
let checkedNumber
//Tạo mảng với số lượng phần tử được nhập từ người dùng
function createArray() {
    arrayEx = new Array()
    let numerElement = document.getElementById("numberElement").value;
    for (let i = 0; i < numerElement; i++) {
        arrayEx[i] = +prompt("Xin mời nhập giá trị thứ" + (i + 1) + ":")
    }
}
//Tìm số lớn hơn mười bằng cách kiểm tra từng phần tử
function findNumberGreaterThan10() {
    let countNumber = 0
    for (let i = 0; i < arrayEx.length; i++) {
        if (arrayEx[i] >= 10) {
            countNumber += 1
        }
    }
    document.getElementById("result").innerText = "Có " + countNumber + " sô nguyên lớn hơn hoặc bằng 10"
}
//Kiểm tra từng phần tử trong mảng với số lớn nhất để tìm vị trí trong mảng bằng hàm findIndex
function maxElement(x) {
    return x == maxNumber
}
//Kiểm tra giá trị lần lượt của một phần tử và phần tử sau nó
function findMax() {
    maxNumber = arrayEx[0]
    let indexNumber
    for (let i = 1; i < arrayEx.length; i++) {
        if (maxNumber < arrayEx[i]) {
            maxNumber = arrayEx[i]
        }
    }
    indexNumber = arrayEx.findIndex(maxElement)
    document.getElementById("result").innerText = "Giá trị lớn nhất trong mảng là : "
        + maxNumber + "\n" + "ở vị trí thứ " + indexNumber
}


//- so sánh lần lượt giá trị của phần tử này với giá trị của phần tử sau nó để tim Max
//- đồng thời cộng giá trị của từng phần tử rồi chia cho độ dài mảng
function average() {
    let maxNumber = arrayEx[0]
    let indexNumber
    let sumNumber = arrayEx[0]
    for (let i = 1; i < arrayEx.length; i++) {
        if (maxNumber < arrayEx[i]) {
            maxNumber = arrayEx[i]
        }
        sumNumber += parseInt(arrayEx[i])
    }
    let averageNumber = sumNumber / arrayEx.length
    indexNumber = arrayEx.findIndex(maxElement)
    document.getElementById("result").innerText = "Giá trị lớn nhất trong mảng là : "
        + maxNumber + "\n" + "Giá trị trung bình các phần tử trong mảng là :" + averageNumber.toFixed(2)
}
//Đảo ngước các phần tử trong mảng
function reverseArray() {
    arrayEx.reverse()
    document.getElementById("result").innerText = arrayEx
}


//kiểm tra giá trị từng phần tử trong mảng với 0
function countVowel() {
    let vowelNumber = 0
    for (let i = 0; i < arrayEx.length; i++) {
        if (arrayEx[i] < 0) {
            vowelNumber += parseInt(arrayEx[i])
        }
    }
    document.getElementById("result").innerText = "Tổng số nguyên âm trong chuỗi là :" + vowelNumber
}

//so sánh từng giá trị của phần tử trong mảng với số cần kiểm tra
function findElement(x) {
    return x === checkedNumber
}
//Kiểm tra giá trị cần tìm có trong mảng ko thì thông báo
function checkNumber() {
    let isOnArray = true
    checkedNumber = +prompt("Xin mời nhập số cần kiểm tra")
    isOnArray = arrayEx.findIndex(findElement) + 1
    if (isOnArray) {
        document.getElementById("result").innerText = checkedNumber + " is in the array"
    } else {
        document.getElementById("result").innerText = checkedNumber + " is not in the array"
    }
}
/*kiểm tra giá trị của phần tử người dùng nhập vào có bằng
 với bất kỳ giá trị của phần tử nào trong mảng không rồi xóa nó khỏi mảng đó    */
function checkNumberExist() {
    let isOnArray = true
    checkedNumber = +prompt("Xin mời nhập số cần kiểm tra")
    isOnArray = arrayEx.findIndex(findElement) + 1
    if (isOnArray) {
        arrayEx.splice(arrayEx.findIndex(findElement), arrayEx.findIndex(findElement) + 1)
    }
    document.getElementById("result").innerText = arrayEx
}
//Sắp xếp mảng theo thứ tự tăng dần
function sortArray() {
    arrayEx.sort()
    document.getElementById("result").innerText = arrayEx
}
//Cộng hai mảng có giá trị các phần tử nhập từ người dùng thành một mảng mới
function linkArray() {
    let arrA = new Array()
    let arrB = new Array()
    let arrC = new Array(20)
    let numberElementArrA = prompt("xin mời nhập số lượng phần tử mảng a")
    for (let i = 0; i < numberElementArrA; i++) {
        arrA[i] = prompt("Xin mời nhập giá trị phần tử ở vị trí " + (i + 1))
    }
    let numberElementArrB = prompt("Xin mời nhập số lượng phần tử mảng b")
    for (let i = 0; i < numberElementArrB; i++) {
        arrB[i] = prompt("Xin mời nhập giá trị phần tử ở vị trí " + (i + 1))
    }
    arrC = arrA.concat(arrB)
    document.getElementById("result").innerText =arrC
}