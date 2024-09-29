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






