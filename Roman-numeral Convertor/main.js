const input = document.querySelector("#number");
const btn = document.querySelector("#convert-btn");
const output = document.querySelector("#output");
btn.addEventListener("click", function () {
    if (input.value < 0) {
        output.classList.remove("hidden");
        output.classList.add("error");
        output.innerText = "Please enter a number greater than or equal to 1";
    }
    else if (input.value > 3999) {
        output.classList.remove("hidden");
        output.classList.add("error");
        output.innerText = "Please enter a number less than or equal to 3999";
    }
    else if (input.value === "") {
        output.classList.remove("hidden");
        output.classList.add("error");
        output.innerText = "Please enter a valid number";
    }
    else {
        output.classList.remove("hidden");
        output.classList.add("visible");
        intToRoman(input.value);
    }

});
function intToRoman(num) {
    const val = [
        1000, 900, 500, 400,
        100, 90, 50, 40,
        10, 9, 5, 4, 1
    ];
    const symbol = [
        "M", "CM", "D", "CD",
        "C", "XC", "L", "XL",
        "X", "IX", "V", "IV", "I"
    ];

    let roman = "";
    for (let i = 0; i < val.length; i++) {
        while (num >= val[i]) {
            num -= val[i];
            roman += symbol[i];
        }
    }
    document.querySelector("#output").innerText = `${roman}`;
}
