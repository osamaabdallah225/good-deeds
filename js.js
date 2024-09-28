// تعريف ال buttons & span 
let button1 = document.getElementById("button-1");
let span1 = document.getElementById("span-1");
let button2 = document.getElementById("button-2");
let span2 = document.getElementById("span-2");
let button3 = document.getElementById("button-3");
let span3 = document.getElementById("span-3");
let button4 = document.getElementById("button-4");
let span4 = document.getElementById("span-4");
let button5 = document.getElementById("button-5");
let span5 = document.getElementById("span-5");
let button6 = document.getElementById("button-6");
let span6 = document.getElementById("span-6");
let button7 = document.getElementById("button-7");
let span7 = document.getElementById("span-7");
let buttontotal = document.getElementById("button-total");
let spantotal = document.getElementById("span-total");


// القيم الاولوية للمتغيرات
let i = 0 ;
let ii = 0 ;
let iii = 0 ;
let x = 0 ;
let y = 0 ;
let m = 0 ;
let n = 0 ;
let t = 0 ;
// فانكشن الزر الاول 
button1.addEventListener("click", function() {
     t++ ;
     i++ ;
     span1.innerText = i ;
     spantotal.innerText = t ;
    this.style.backgroundColor = "#4CB050" ;

    if (i>=100) {
    button1.style.backgroundColor = "#958774" ;
}
// فانكشن الزر الثاني 
})
button2.addEventListener("click", function() {
     ii++ ;
     t++ ;
     span2.innerText = ii ;
     spantotal.innerText = t ;
    this.style.backgroundColor = "#4CB050" ;
    if (ii>=100) {
        button2.style.backgroundColor = "#958774" ;
    }
    // فانكشن الزر الثالت 
})
button3.addEventListener("click", function() {
     iii++ ;
     t++ ;
     span3.innerText = iii ;
     spantotal.innerText = t ;
    this.style.backgroundColor = "#4CB050" ;
    if (iii>=100) {
        button3.style.backgroundColor = "#958774" ;
    }
    // فانكشن الزر الرابع 
})
button4.addEventListener("click", function() {
     x++ ;
     t++ ;
     span4.innerText = x ;
     spantotal.innerText = t ;
    this.style.backgroundColor = "#4CB050" ;
    if (x>=100) {
        button4.style.backgroundColor = "#958774" ;
    }  
})
button5.addEventListener("click", function() {
     y++ ;
     t++ ;
     span5.innerText = y ;
     spantotal.innerText = t ;
    this.style.backgroundColor = "#4CB050" ;
    if (y>=100) {
        button5.style.backgroundColor = "#958774" ;
    }
   
})
button6.addEventListener("click", function() {
     m++ ;
     t++ ;
     span6.innerText = m ;
     spantotal.innerText = t ;
    this.style.backgroundColor = "#4CB050" ;
    if (m>=100) {
        button6.style.backgroundColor = "#958774" ;
    }
   
})
button7.addEventListener("click", function() {
     n++ ;
     t++ ;
     span7.innerText = n ;
     spantotal.innerText = t ;
    this.style.backgroundColor = "#4CB050" ;
    if (n>=100) {
        button7.style.backgroundColor = "#958774" ;
    }
})
//  فانكشن اعادة القيم والازرار الي حالتها الطبيعية 
let icon = document.getElementById("icon");
icon.addEventListener("click", function(){
    i = 0 ;
    span1.innerText = "" ;
    button1.style.backgroundColor = "#FF9700" ;
    ii = 0 ;
    span2.innerText = "" ;
    button2.style.backgroundColor = "#FF9700" ;
   
    iii = 0 ;
    span3.innerText = "" ;
    button3.style.backgroundColor = "#FF9700" ;
 
    x = 0 ;
    span4.innerText = "" ;
    button4.style.backgroundColor = "#FF9700" ;
  
    y = 0 ;
    span5.innerText = "" ;
    button5.style.backgroundColor = "#FF9700" ;

    m = 0 ;
    span6.innerText = "" ;
    button6.style.backgroundColor = "#FF9700" ;

    n = 0 ;
    span7.innerText = "" ;
    button7.style.backgroundColor = "#FF9700" ;

    t = 0 ;
    spantotal.innerText = "" ;
    buttontotal.style.backgroundColor = "#018BBA" ;
   
})




