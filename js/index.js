// if 1-mashq
document.getElementById('first__btn').addEventListener('click', function () {
    let firstValue = document.getElementById('first__value').value;

    if (firstValue > 0) {
        firstValue++;
    }
    alert(firstValue);
});





// if 2-mashq
document.getElementById('second__btn').addEventListener('click', function () {
    let secondValue = document.getElementById('second__value').value;

    if (secondValue > 0) {
        secondValue++;
    } else {
        secondValue -= 2;
    }
    alert(secondValue);
});







// if 3-mashq
document.getElementById('third__btn').addEventListener('click', function () {
    let thirdValue = document.getElementById('third__value').value;

    if (thirdValue > 0) {
        thirdValue++;
    } else if (thirdValue < 0) {
        thirdValue -= 2;
    } else {
        thirdValue = 10;
    }
    alert(thirdValue);
});






// if 4-mashq
document.getElementById('four__btn').addEventListener('click', function () {
    let fourFirstValue = document.getElementById('four__value--first').value;
    let fourSecondValue = document.getElementById('four__value--second').value;
    let fourThirdValue = document.getElementById('four__value--third').value;
    let fourCounter = 0;
    if (fourFirstValue > 0) {
        fourCounter++;
    }
    if (fourSecondValue > 0) {
        fourCounter++;
    }
    if (fourThirdValue > 0) {
        fourCounter++;
    }

    alert("Kiritilgan sonlar orasida " + fourCounter + " ta musbat son bor");
});



// if 5-mashq
document.getElementById('five__btn').addEventListener('click', function () {
    let fiveFirstValue = document.getElementById('five__value--first').value;
    let fiveSecondValue = document.getElementById('five__value--second').value;
    let fiveThirdValue = document.getElementById('five__value--third').value;

    let fivePositiveCounter = 0;
    let fiveNegativeCounter = 0;

    if (fiveFirstValue > 0) {
        fivePositiveCounter++;
    } else {
        fiveNegativeCounter++;
    }

    if (fiveSecondValue > 0) {
        fivePositiveCounter++;
    } else {
        fiveNegativeCounter++;
    }

    if (fiveThirdValue > 0) {
        fivePositiveCounter++;
    } else {
        fiveNegativeCounter++;
    }

    alert("Kiritilgan sonlar orasida " + fivePositiveCounter + " ta musbat va " + fiveNegativeCounter + " manfiy son bor");
});



// if 6-mashq
document.getElementById('six__btn').addEventListener('click', function () {
    let sixFirstValue = document.getElementById('six__value--first').value;
    let sixSecondValue = document.getElementById('six__value--second').value;

    let sixMax;
    let sixMaxIndex;

    if (sixFirstValue > sixSecondValue) {
        sixMax = sixFirstValue;
        sixMaxIndex = 1;
    } else {
        sixMax = sixSecondValue;
        sixMaxIndex = 2;
    }
    if (sixFirstValue == sixSecondValue) {
        alert("Kiritilgan sonlar teng");
    } else {
        alert("kiritilgan sonlaring eng kattasining qiymati " + sixMax + " va uning indeksi " + sixMaxIndex);
    }
});



// if 7-mashq
document.getElementById('seven__btn').addEventListener('click', function () {
    let sevenFirstValue = document.getElementById('seven__value--first').value;
    let sevenSecondValue = document.getElementById('seven__value--second').value;

    let sevenMin;
    let sevenMinIndex;

    if (sevenFirstValue < sevenSecondValue) {
        sevenMin = sevenFirstValue;
        sevenMinIndex = 1;
    } else {
        sevenMin = sevenSecondValue;
        sevenMinIndex = 2;
    }
    if (sevenFirstValue == sevenSecondValue) {
        alert("Kiritilgan sonlar teng");
    } else {
        alert("kiritilgan sonlaring eng kichigining indeksi " + sevenMinIndex + " va uning qiymati " + sevenMin);
    }

});


// if 8-mashq
document.getElementById('eight__btn').addEventListener('click', function () {
    let eightFirstValue = document.getElementById('eight__value--first').value;
    let eightSecondValue = document.getElementById('eight__value--second').value;

    let eightMin;
    let eightMax;

    if (eightFirstValue < eightSecondValue) {
        eightMin = eightFirstValue;
        eightMax = eightSecondValue;
    } else {
        eightMin = eightSecondValue;
        eightMax = eightFirstValue;
    }

    if (eightFirstValue == eightSecondValue) {
        alert("Kiritilgan sonlar teng");
    } else {
        alert("Kiritilgan sonlar orasida kattasi " + eightMax + " va kichigi " + eightMin);
    }

});





// if 9-mashq
document.getElementById('nine__btn').addEventListener('click', function () {
    let nineFirstValue = document.getElementById('nine__value--first').value;
    let nineSecondValue = document.getElementById('nine__value--second').value;

    let nineMin;
    let nineMax;

    if (nineFirstValue < nineSecondValue) {
        nineMin = nineFirstValue;
        nineMax = nineSecondValue;
    } else {
        nineMin = nineSecondValue;
        nineMax = nineFirstValue;
    }

    nineFirstValue=nineMin;
    nineSecondValue=nineMax;
    alert("A:"+nineFirstValue+"   B:"+nineSecondValue);
    

});


// if 10-mashq
document.getElementById('ten__btn').addEventListener('click', function () {
    let tenFirstValue = parseFloat(document.getElementById('ten__value--first').value);
    let tenSecondValue = parseFloat(document.getElementById('ten__value--second').value);

    if (tenFirstValue == tenSecondValue) {
        tenSecondValue=0;
        tenFirstValue=0;
    } else {
        let tenTotal=tenFirstValue+tenSecondValue;
        tenFirstValue=tenTotal;
        tenSecondValue=tenTotal;
      }

    alert("A:"+tenFirstValue+"   B:"+tenSecondValue);
    
});




// if 11-mashq

document.getElementById('eleven__btn').addEventListener('click', function () {
    let elevenFirstValue = parseFloat(document.getElementById('eleven__value--first').value);
    let elevenSecondValue = parseFloat(document.getElementById('eleven__value--second').value);
    
    let elevenMaxValue;

    if (elevenFirstValue > elevenSecondValue) {
        elevenMaxValue = elevenFirstValue;
    } else if (elevenFirstValue < elevenSecondValue) {
        elevenMaxValue = elevenSecondValue;
    } else {
        elevenMaxValue = 0; 
    }

    elevenFirstValue = elevenMaxValue;
    elevenSecondValue = elevenMaxValue;

    alert("A: " + elevenFirstValue + "   B: " + elevenSecondValue);
});





// if 12-mashq
document.getElementById('twelve__btn').addEventListener('click', function () {
    let twelveFirstValue = parseFloat(document.getElementById('twelve__value--first').value);
    let twelveSecondValue = parseFloat(document.getElementById('twelve__value--second').value);
    let twelveThirdValue = parseFloat(document.getElementById('twelve__value--third').value);
    
    let twelveMin = twelveFirstValue;
    let twelveCounter = 1;

    if (twelveSecondValue < twelveMin) {
        twelveMin = twelveSecondValue;
        twelveCounter = 2;
    }
    if (twelveThirdValue < twelveMin) {
        twelveMin = twelveThirdValue;
        twelveCounter = 3;
    }

    alert("Kiritilgan sonlar orasidagi kichigining indeksi " + twelveCounter + " va uning qiymati " + twelveMin);
});





// if 13-mashq
document.getElementById('thirteen__btn').addEventListener('click', function () {
    let thirteenFirstValue = parseFloat(document.getElementById('thirteen__value--first').value);
    let thirteenSecondValue = parseFloat(document.getElementById('thirteen__value--second').value);
    let thirteenThirdValue = parseFloat(document.getElementById('thirteen__value--third').value);
    
    let thirteenMin = thirteenFirstValue;
    let thirteenMax=thirteenThirdValue;

    if (thirteenSecondValue < thirteenMin) {
        thirteenMin = thirteenSecondValue;
    }
    if (thirteenThirdValue < thirteenMin) {
        thirteenMin = thirteenThirdValue;
    }

    if (thirteenMax<thirteenFirstValue) {
        thirteenMax=thirteenFirstValue;
    }
    if (thirteenMax<thirteenSecondValue) {
        thirteenMax=thirteenSecondValue;
    }

    // alert(thirteenMax);
    // alert(thirteenMin);


    let thirteenCounter=0;
    let thirteenMedium=0;

    if (thirteenFirstValue > thirteenMin && thirteenFirstValue < thirteenMax) {
        thirteenCounter=1;
        thirteenMedium=thirteenFirstValue;
    }
   

    if (thirteenSecondValue > thirteenMin && thirteenSecondValue < thirteenMax) {
        thirteenCounter=2;
        thirteenMedium=thirteenSecondValue;
    }
    
    
    if (thirteenThirdValue > thirteenMin && thirteenThirdValue < thirteenMax) {
        thirteenCounter=3;
        thirteenMedium=thirteenThirdValue
    }
    
    
    alert("Kiritilgan sonlarnig ortachasi "+thirteenMedium+" va uning indeksi "+thirteenCounter);

});







// if 14-mashq
document.getElementById('fourteen__btn').addEventListener('click', function () {
    let fourteenFirstValue = parseFloat(document.getElementById('fourteen__value--first').value);
    let fourteenSecondValue = parseFloat(document.getElementById('fourteen__value--second').value);
    let fourteenThirdValue = parseFloat(document.getElementById('fourteen__value--third').value);
    
    let fourteenMin = fourteenFirstValue;
    let fourteenMax=fourteenThirdValue;

    if (fourteenSecondValue < fourteenMin) {
        fourteenMin = fourteenSecondValue;
    }
    if (fourteenThirdValue < fourteenMin) {
        fourteenMin = fourteenThirdValue;
    }

    if (fourteenMax<fourteenFirstValue) {
        fourteenMax=fourteenFirstValue;
    }
    if (fourteenMax<fourteenSecondValue) {
        fourteenMax=fourteenSecondValue;
    }

     alert("Kiritilgan raqamlar orasida eng kichigi "+fourteenMin+" va eng kattasi "+fourteenMax);



});











// if 15-mashq

document.getElementById('fiveteen__btn').addEventListener('click', function () {
    let fiveteenFirstValue = parseFloat(document.getElementById('fiveteen__value--first').value);
    let fiveteenSecondValue = parseFloat(document.getElementById('fiveteen__value--second').value);
    let fiveteenThirdValue = parseFloat(document.getElementById('fiveteen__value--third').value);
    
    let fiveteenFirstSum=fiveteenFirstValue+fiveteenSecondValue;
    let fiveteenSecondSum=fiveteenSecondValue+fiveteenThirdValue;
    let fiveteenThirdSum=fiveteenFirstValue+fiveteenThirdValue;
    let fiveteenMaxSum=fiveteenFirstSum;
    let fiveteenCounter="1 chi va 2 chi sonlar";
    // 1+2==2+3
    // 1+3==2+3

    if (fiveteenMaxSum<fiveteenSecondSum) {
        fiveteenMaxSum=fiveteenSecondSum;
        fiveteenCounter="2 chi va 3 chi sonlar";
        
    }
    if (fiveteenMaxSum<fiveteenThirdSum) {
        fiveteenMaxSum=fiveteenThirdSum;
        fiveteenCounter="1chi va 3 chi sonlar";
    }

    alert("Yig'indisi eng katta qiymat xosil qiluvchi juft qiymatlar "+fiveteenCounter+" va ularning qiymati "+fiveteenMaxSum);


});








// boolean 1-mashq

document.getElementById('bool__first__btn').addEventListener('click', function () {
    let boolfirstValue = document.getElementById('bool__first__value').value;
    let boolFirstCheck=false;
    if (boolfirstValue > 0) {
        boolFirstCheck=true;
    }

    if (boolFirstCheck==true) {
        alert("Rost");
    } else {
        alert("Yolg'on");
    }

    // alert(boolFirstCheck);
});









// boolean 2-mashq

document.getElementById('bool__second__btn').addEventListener('click', function () {
    let boolSecondValue = document.getElementById('bool__second__value').value;
    let boolSecondCheck=false;
    if (boolSecondValue%2==1) {
        boolSecondCheck=true;
    }

    if (boolSecondCheck==true) {
        alert("Rost");
    } else {
        alert("Yolg'on");
    }

});









// boolean 3-mashq

document.getElementById('bool__third__btn').addEventListener('click', function () {
    let boolThirdValue = document.getElementById('bool__third__value').value;
    let boolThirdCheck=false;
    if (boolThirdValue%2==0) {
        boolThirdCheck=true;
    }

    if (boolThirdCheck==true) {
        alert("Rost");
    } else {
        alert("Yolg'on");
    }

});









// boolean 4-mashq

document.getElementById('bool__four__btn').addEventListener('click', function () {
    let boolFourFirstValue = document.getElementById('bool__four__value--first').value;
    let boolFourSecondValue = document.getElementById('bool__four__value--second').value;
    let boolFourCheck=false;


    if (boolFourFirstValue>2&&boolFourSecondValue<=3) {
        boolFourCheck=true;
    }

    if (boolFourCheck==true) {
        alert("Rost");
    } else {
        alert("Yolg'on");
    }

});








// boolean 5-mashq

document.getElementById('bool__five__btn').addEventListener('click', function () {
    let boolFiveFirstValue = document.getElementById('bool__five__value--first').value;
    let boolFiveSecondValue = document.getElementById('bool__five__value--second').value;
    let boolFiveCheck=false;


    if (boolFiveFirstValue>=0||boolFiveSecondValue<-2) {
        boolFiveCheck=true;
    }

    if (boolFiveCheck==true) {
        alert("Rost");
    } else {
        alert("Yolg'on");
    }

});







// boolean 6-mashq

document.getElementById('bool__six__btn').addEventListener('click', function () {
    let boolSixFirstValue = document.getElementById('bool__six__value--first').value;
    let boolSixSecondValue = document.getElementById('bool__six__value--second').value;
    let boolSixThirdValue = document.getElementById('bool__six__value--third').value;
    let boolSixCheck=false;


    if (boolSixFirstValue<=boolSixSecondValue&&boolSixSecondValue<=boolSixThirdValue) {
        boolSixCheck=true;
    }

    if (boolSixCheck==true) {
        alert("Rost");
    } else {
        alert("Yolg'on");
    }

});









// boolean 7-mashq

document.getElementById('bool__seven__btn').addEventListener('click', function () {
    let boolSevenFirstValue = document.getElementById('bool__seven__value--first').value;
    let boolSevenSecondValue = document.getElementById('bool__seven__value--second').value;
    let boolSevenThirdValue = document.getElementById('bool__seven__value--third').value;
    let boolSevenCheck=false;


    if (boolSevenThirdValue>boolSevenSecondValue&&boolSevenSecondValue>boolSevenFirstValue) {
        boolSevenCheck=true;
    }

    if (boolSevenCheck==true) {
        alert("Rost");
    } else {
        alert("Yolg'on");
    }

});








// boolean 8-mashq

document.getElementById('bool__eight__btn').addEventListener('click', function () {
    let boolEightFirstValue = document.getElementById('bool__eight__value--first').value;
    let boolEightSecondValue = document.getElementById('bool__eight__value--second').value;
    let boolEightCheck=false;

    if (boolEightFirstValue%2==1&&boolEightSecondValue%2==1) {
        boolEightCheck=true;
    }

    if (boolEightCheck==true) {
        alert("Rost");
    } else {
        alert("Yolg'on");
    }

});









// boolean 9-mashq

document.getElementById('bool__nine__btn').addEventListener('click', function () {
    let boolNineFirstValue = document.getElementById('bool__nine__value--first').value;
    let boolNineSecondValue = document.getElementById('bool__nine__value--second').value;
    let boolNineCheck=false;

    if (boolNineFirstValue%2==1||boolNineSecondValue%2==1) {
        boolNineCheck=true;
    }

    if (boolNineCheck==true) {
        alert("Rost");
    } else {
        alert("Yolg'on");
    }

});






// boolean 10-mashq

document.getElementById('bool__ten__btn').addEventListener('click', function () {
    let boolTenFirstValue = document.getElementById('bool__ten__value--first').value;
    let boolTenSecondValue = document.getElementById('bool__ten__value--second').value;
    
    let boolTenCheck=false;
    let boolTenCounter=0;



    if (boolTenFirstValue%2==1) {
        boolTenCounter++;
    }
    if (boolTenSecondValue%2==1) {
        boolTenCounter++;
    }
    if (boolTenCounter==1) {
        boolTenCheck=true;
    }
        
    if (boolTenCheck==true) {
        alert("Rost");
    } else {
        alert("Yolg'on");
    }

});









// Xarajat hisoblagch

document.getElementById('cost__btn').addEventListener('click', function () {
    

    let userMoneyValue = document.getElementById('user__money--value').value;

    let dollorConvertCost=11000.34;
    let euroConvertCost=12354.03;

    let avia$Cost=500;
    let hotel$Cost=250;
    let mouseumEuroCost=120

    let totalCost=((avia$Cost*dollorConvertCost)+(hotel$Cost*dollorConvertCost)+(mouseumEuroCost*euroConvertCost));

    if (totalCost<=userMoneyValue) {
        alert("Oq yo'l, Alisher!");
    } else {
        alert("Alisher, ozgina sabr qilish kerak bo'lar ekan.")
    }

});












// Xarajat hisoblagch Promt orqali 
// vazifa shartida promt orqali qabul qilinishi kerak deyilgani uchun ikki xil usulda bajaridim

    

    userMoneyPromtValue=+prompt("Necha pulingiz borligini 'so'm' da kiriting:");

    let dollorPromtConvertCost=11000.34;
    let euroPromtConvertCost=12354.03;

    let avia$PromtCost=500;
    let hotel$PromtCost=250;
    let mouseumPromtEuroCost=120

    let totalPromtCost=((avia$PromtCost*dollorPromtConvertCost)+(hotel$PromtCost*dollorPromtConvertCost)+(mouseumPromtEuroCost*euroPromtConvertCost));

    if (totalPromtCost<=userMoneyPromtValue) {
        alert("Oq yo'l, Alisher!");
    } else {
        alert("Alisher, ozgina sabr qilish kerak bo'lar ekan.")
    }

