// woo, moneys
// by https://joemoses.co.uk, orignally used as an internal tool

let inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    input.addEventListener('keyup', calcTotal);
});


function calcTotal() {
    // find hourly rate
    if(document.getElementById('rate-value').value.length !== 0) {

        let rate = parseInt(document.getElementById('rate-value').value);
    
    
        // hours
        let hours = document.querySelectorAll('.hour');
        let totalH = 0;
        hours.forEach(hour => {
            if(hour.value !== "") {
                totalH = totalH + parseInt(hour.value);
            }
        });
        // h to £
        hToPound = rate * totalH;
    
        // mins
        let minutes = document.querySelectorAll('.minute');
        let totalM = 0;
        minutes.forEach(hour => {
            if(hour.value !== "") {
                totalM = totalM + parseInt(hour.value);
            }
        });
        totalM = totalM / 60;
        total = Math.round(((totalM + totalH) * rate) * 100) /100;
        document.getElementById('value').innerText = total;
    }
}