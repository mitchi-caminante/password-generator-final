const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generatePasswordBtn = document.getElementById("generate-pass")
let passwordOneOutput = document.getElementById("output-1")
let passwordTwoOutput = document.getElementById("output-2")
let passwordOutputs = document.getElementById("outputs")
let copyMsg = document.getElementById("copy-msg");
let passwordLength = 12;

let resetBtn = document.getElementById("reset-btn")


//functions for generating characters//

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
}

function generateRandomPassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomCharacter()         
    }
    return randomPassword
}


//event listeners for buttons//

generatePasswordBtn.addEventListener("click", function() {
    passwordOneOutput.textContent = generateRandomPassword()
    passwordTwoOutput.textContent = generateRandomPassword()
    passwordOneOutput.classList.add("hasContent");
    passwordTwoOutput.classList.add("hasContent");
    copyMsg.style.display = "none"
})

resetBtn.addEventListener("click", () => {
    passwordOneOutput.textContent = "";
    passwordTwoOutput.textContent = "";
    passwordOneOutput.classList.remove("hasContent");
    passwordTwoOutput.classList.remove("hasContent");
    copyMsg.style.display = "none"
})

// this copy on click event doesn't work in Scrimba because of the security protocols but it works when it's deployed on Netlify. I used a span element for my output boxes and I didn't want to change everything to an input element, because it's not really an input element. I've commented out the line that doesn't work so that the animations that are rendered on click still work//

passwordOutputs.addEventListener("click", function(event) {
    if (event.target.dataset.password && event.target.classList.contains("hasContent")) {
        let password = event.target.textContent;
        navigator.clipboard.writeText(password);
        copyMsg.style.display = "inline";
    }
})