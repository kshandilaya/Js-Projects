const input = document.querySelector("#user-input");
const btn1 = document.querySelector("#check-btn");
const btn2 = document.querySelector(("#clear-btn"));
const result = document.querySelector("#results-div");

btn1.onclick = function () {
    if(input.value === ""){
        alert("Please provide a phone number");
        return;
    }
    result.classList.remove("hidden");
    result.classList.add("visible");
    if (isValidUSPhoneNumber(input.value)) {
        result.innerText = `Valid US number: ${input.value}`;
        input.value="";
    } else {
        result.innerText = `Invalid US number: ${input.value}`;
        input.value="";
    }
};

btn2.onclick = function () {
    input.value="";
    result.innerText="";
    result.classList.remove("visible");
    result.classList.add("hidden");
}

function isValidUSPhoneNumber(str) {
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
}

// function isValidUSPhoneNumber(input) {
//     if (input === '') {
//         alert('Please provide a phone number');
//         return;
//     }

//     const countryCode = '^(1\\s?)?';
//     const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
//     const middleSeparator = '[\\s\\-]?';
//     const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';

//     const phoneRegex = new RegExp(
//         `${countryCode}${areaCode}${middleSeparator}${phoneNumber}`
//     );
//     if (phoneRegex.test(input)) {
//         result.innerText = `Valid US number: ${input}`;
//     } else {
//         result.innerText = `Invalid US number: ${input}`;
//     }
// }

