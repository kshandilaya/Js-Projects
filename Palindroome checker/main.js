const str = document.querySelector("#text-input");
const btn = document.querySelector("#check-btn")
btn.onclick = function () {
    if (str.value === "") {
        alert("Please input a value");
    }
    palindrome(str.value);
};
function palindrome(temp) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = temp.replace(/[^a-z0-9]/gi, '').toLowerCase();

    // Check if cleaned string equals its reverse
    const reversedStr = cleanStr.split('').reverse().join('');
    if (cleanStr === reversedStr) {
        document.querySelector("#result").innerText = `"${temp}" is a palindrome.`;
    }
    else {
        document.querySelector("#result").innerText = `"${temp}" is not a palindrome.`;
    }

}