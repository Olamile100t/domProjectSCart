 var total = 0
 const totalPrice = document.querySelector(".total")


var count1 = 0
function increase1(){
    total += 100
    count1++
    document.querySelector('.quantity1').innerText=count1
    totalPrice.innerText=total + '$'
};
function decrease1(){
    if (count1>0) {
        total -=100
        count1--
        document.querySelector('.quantity1').innerText=count1
        totalPrice.innerText=total + '$'
    }
}function zero(){
    total-=100*count1
    count1=0
    document.querySelector('.quantity1').innerText=count1
    totalPrice.innerText=total + '$'
};
const liked1 = document.querySelector('#like1')
function like1(){

    if (liked1.style.color==="black") {
        liked1.style.color="red"
    }else{
         liked1.style.color="black"
    }
}



var count2 = 0
function increase2(){
    total+=20
    count2++
    document.querySelector('.quantity2').innerText=count2
    totalPrice.innerText= total + '$'
};
function decrease2(){
    if (count2>0) {
        total -= 20
        count2--
        document.querySelector('.quantity2').innerText=count2
        totalPrice.innerText= total + '$'
    }
}function nothin(){
    total -=20*count2
    count2=0
    document.querySelector('.quantity2').innerText=count2
    totalPrice.innerText= total + '$'
    

};
 const liked2 = document.querySelector('#like2')
function like2(){

    if (liked2.style.color==="black") {
        liked2.style.color="red"
    }else{
         liked2.style.color="black"
    }
}








var count3 = 0
function increase3(){
    total +=50
    count3++
    document.querySelector('.quantity3').innerText=count3
    totalPrice.innerText= total + '$'
};
function decrease3(){
    if (count3>0) {
        total -=50
        count3--
        document.querySelector('.quantity3').innerText=count3
        totalPrice.innerText = total + '$'
    }
}
function not(){
    total -= 50*count3
    count3=0
    document.querySelector('.quantity3').innerText=count3
    totalPrice.innerText=total + '$'

}const liked3 = document.querySelector('#like3')
function like3(){

    if (liked3.style.color==="black") {
        liked3.style.color="red"
    }else{
         liked3.style.color="black"
    }
}
    
