//main homepage photos scroll down by using Jquery
$(document).ready(function () {
    $("#showcase .btn").on('click', function (event) {
        if (this.has !== "") {
            event.preventDefault();
            const hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });
});


//BMI calculating
//1.you find the way to hide Nan.
//2.You find the way to hid text and show later.

function bmi() {
    // e.preventDefault();
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;
    const textShow = document.getElementById('result');
    const formInputHeight = document.querySelector('.form-input-height');
    const formInputWeight = document.querySelector('.form-input-weight');

    const cal = weight / (height / 100 * height / 100);
    let con = parseFloat(cal.toFixed(2));
    if (isNaN(con)) {
        con = ' ';
    }
    if (con > 0) {
        textShow.style.opacity = 100;
    }
    if (con <= 18.5) {
        // textShow.style.opacity = 100;
        // document.getElementById('result').innerHTML = `Stay Healthy and fit`;
        document.getElementById('result').innerHTML = `* You are underweight. You BMI is ${con}. You should eat more healthy food and Juice.`;
    } else if (con >= 18 && con <= 24.9) {
        // textShow.style.opacity = 100;
        document.getElementById('result').innerHTML = `You are Healthy. You BMI is ${con}`;
    } else if (con >= 25.0 && con <= 29.9) {
        // textShow.style.opacity = 100;
        document.getElementById('result').innerHTML = `* You are Overweight. You BMI is ${con}. Will you consider to lose weight?`;
    } else if (con >= 30) {
        // textShow.style.opacity = 100;
        document.getElementById('result').innerHTML = `* You are Obese. You BMI is ${con}. Sorry, but it's true. You are fat`;
    } else {
        document.getElementById('result').innerHTML = `Please fill in number`;
    }
    // console.log(con);
    formInputHeight.value = formInputWeight.value = '';
}

bmi();

// slide
let move = 1;
const text = document.querySelector('.showcase-content');
const text1 = document.querySelector('.showcase-content1');
const text2 = document.querySelector('.showcase-content2');
const animeBox = document.querySelector('.transition');

setInterval(function () {
    document.getElementById('radio' + move).checked = true;
    move++
    text1.style.opacity = 100;
    text.style.opacity = 0;
    text2.style.opacity = 0;
    if (move > 3) {
        text1.style.opacity = 100;
        text2.style.opacity = 100;
        text1.style.opacity = 0;
        animeBox.style.opacity = 0;
        move = 1;
        text1.style.opacity = 0;
        text2.style.opacity = 100;
        text2.style.opacity = 0;
        text.style.opacity = 100;
    }
}, 5000)















