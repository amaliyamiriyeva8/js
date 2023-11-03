//let message="hello";
//alert(message);

//const myBirthday='08.07.2003';
//alert(myBirthday);

//let message="hello";
//console.log(message);

//let isGreater=4>7;
//alert(isGreater);

//let x=prompt('eded daxil edin')

//if(x>0){
 //console.log("musbetdir")
//}
//else{
   // console.log("menfidir")
//}

//a=prompt();
//b=prompt();
//c=prompt();

//if(a>b && a>c){
   // console.log("a en boyuyudur")
//}
//else if(b>c){
   // console.log("b en boyuyudur")
//}
//else{
   // console.log("c en boyuyudur")
//}
//let myage=prompt("yasinizi daxil edin");
//if (myage>18){
   // alert("masin sure bilerem")
//}
//else{
   // alert("masin sure bilmerem")
//}

//function dilimle(meyvesayi){
    //let dilim=meyvesayi*5;
    //console.log(dilim);
    //return dilim;
//}
//let almadilimininsayi=dilimle(8);
//console.log(almadilimininsayi);

//const imtahan=function(girishbali, chixishbali){
  //  return
//}

const umumibal=function(girishbali,chixishbali){
    return(girishbali+chixishbali)
}

const exam=function(a,b){
    if(a+b>=17){
        return("tebrikler imtahandan kecdiniz")
    }
    else if((a+b)>51 && (a+b)<60){
        return ("E")
    }
    else{
        return("imtahandan kesildiniz")
    }
}
console.log(exam(umumibal(5,2),umumibal(1,7)));