// if 1-mashq
document.getElementById('first__btn').addEventListener('click', function() {
    let firstValue = document.getElementById('first__value').value;

    if (firstValue>0) {
        firstValue++;
    }
    alert(firstValue);
});

// if 2-mashq
document.getElementById('second__btn').addEventListener('click', function() {
    let secondValue = document.getElementById('second__value').value;

    if (secondValue>0) {
        secondValue++;
    }else{
        secondValue-=2;
    }
    alert(secondValue);
});

// if 3-mashq
document.getElementById('third__btn').addEventListener('click', function() {
    let thirdValue = document.getElementById('third__value').value;

    if (thirdValue>0) {
        thirdValue++;
    }else if(thirdValue<0){
        thirdValue-=2;
    }else{
        thirdValue=10;
    }
    alert(thirdValue);
});

// if 4-mashq
document.getElementById('four__btn').addEventListener('click', function() {
    let fourFirstValue = document.getElementById('four__value--first').value;
    let fourSecondValue = document.getElementById('four__value--second').value;
    let fourThirdValue = document.getElementById('four__value--third').value;
    let fourCounter=0;
    if (fourFirstValue>0) {
        fourCounter++;
    }
    if (fourSecondValue>0) {
        fourCounter++;
    }
    if (fourThirdValue>0) {
        fourCounter++;
    }


    alert("Kiritilgan sonlar orasida "+fourCounter+" ta musbat son bor");
});

// if 5-mashq
document.getElementById('five__btn').addEventListener('click', function() {
    let fiveFirstValue = document.getElementById('five__value--first').value;
    let fiveSecondValue = document.getElementById('five__value--second').value;
    let fiveThirdValue = document.getElementById('five__value--third').value;

    let fivePositiveCounter=0;
    let fiveNegativeCounter=0;
    
    if (fiveFirstValue>0) {
        fivePositiveCounter++;
    }else if(fiveFirstValue<0){
        fiveNegativeCounter++;
    }

    if (fiveSecondValue>0) {
        fivePositiveCounter++;
    }else if(fiveSecondValue<0){
        fiveNegativeCounter++;
    }

    if (fiveThirdValue>0) {
        fivePositiveCounter++;
    }else if(fiveThirdValue<0){
        fiveNegativeCounter++;
    }


    alert("Kiritilgan sonlar orasida "+fivePositiveCounter+" ta musbat va "+fiveNegativeCounter+" manfiy son bor");
});
