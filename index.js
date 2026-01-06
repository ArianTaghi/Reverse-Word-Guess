const min = 1;
const max = 100;
const number = Math.floor(Math.random() * (max - min + 1));

const yeahBtn = document.getElementById("yeahBtn");
const guessInput = document.getElementById("guessInput");
const guessLabel = document.getElementById("guessLabel");
const submitBtn = document.getElementById("submitBtn");

guessLabel.textContent = `I have a number in my mind,You wanna guess?Its between ${min} and ${max}`
guessInput.style.display = "none";
submitBtn.style.display = "none";

let attemps = 0;
let guess;

yeahBtn.onclick = function() {
    guessInput.style.display = "inline-block";
    guessLabel.textContent = "Start guessing:";
    yeahBtn.style.display = "none";
    submitBtn.style.display = "inline-block";
}
submitBtn.onclick = function() {
    guess = Number(guessInput.value);
    attemps++;
    console.log(guess);
        if(Number.isNaN(guess))
            guessLabel.textContent = "Enter a valid number:";
        else if ((guess > max) || (guess < min))
            guessLabel.textContent = `Enter a number between [${min} - ${max}]`;
        else {
            if (number > guess)
                    guessLabel.textContent = `Not ${guess} , Try bigger:`;
            else if (number < guess)
                    guessLabel.textContent = `Not ${guess} , Try smaller:`;
            else {
                guessLabel.textContent = `Thats right! you got it in ${attemps} attemps!`;
                guessInput.style.display = "none";
                submitBtn.style.display = "none";
            }
        }
    guessInput.value = "";


}


