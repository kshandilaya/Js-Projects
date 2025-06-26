
let price = 3.26;
let cid = [
    ['PENNY', 1.01],
    ['NICKEL', 2.05],
    ['DIME', 3.1],
    ['QUARTER', 4.25],
    ['ONE', 90],
    ['FIVE', 55],
    ['TEN', 20],
    ['TWENTY', 60],
    ['ONE HUNDRED', 100]
];

const input = document.querySelector("#cash");
const btn = document.querySelector("#purchase-btn");
const output = document.querySelector("#change-due");
const block2 = document.querySelector("#block2");

const unitValues = {
    'PENNY': 0.01,
    'NICKEL': 0.05,
    'DIME': 0.10,
    'QUARTER': 0.25,
    'ONE': 1.00,
    'FIVE': 5.00,
    'TEN': 10.00,
    'TWENTY': 20.00,
    'ONE HUNDRED': 100.00
};

btn.onclick = function () {
    let cashGiven = Number(input.value);
    let changeDue = parseFloat((cashGiven - price).toFixed(2));

    if (changeDue === 0) {
        output.classList.remove("hidden");
        output.classList.add("visible");
        output.innerText = "No change due - customer paid with exact cash";

        block2.classList.remove("hidden");
        block2.classList.add("visible");
        block2.innerText = getCidString();
        return;
    }

    if (changeDue < 0) {
        alert("Customer does not have enough money to purchase the item");
        return;
    }

    const change = getChange(changeDue);
    output.classList.remove("hidden");
    output.classList.add("visible");
    output.innerText = change;

    block2.classList.remove("hidden");
    block2.classList.add("visible");
    block2.innerText = getCidString();
};

function getChange(changeDue) {
    const totalCid = parseFloat(cid.reduce((sum, curr) => sum + curr[1], 0).toFixed(2));

    if (totalCid < changeDue) {
        return "Status: INSUFFICIENT_FUNDS";
    }

    if (totalCid === changeDue) {
        return `Status: CLOSED\n${cid
            .slice()
            .reverse()
            .filter(item => item[1] > 0)
            .map(item => `${item[0]}: $${item[1].toFixed(2)}`)
            .join("\n")}`;
    }

    // Status: OPEN logic
    let cidCopy = JSON.parse(JSON.stringify(cid)).reverse();
    let changeArray = [];

    for (let i = 0; i < cidCopy.length; i++) {
        let coinName = cidCopy[i][0];
        let coinTotal = cidCopy[i][1];
        let coinValue = unitValues[coinName];
        let amountToReturn = 0;

        while (changeDue >= coinValue && coinTotal >= coinValue) {
            amountToReturn += coinValue;
            coinTotal -= coinValue;
            changeDue = parseFloat((changeDue - coinValue).toFixed(2));
        }

        if (amountToReturn > 0) {
            changeArray.push([coinName, parseFloat(amountToReturn.toFixed(2))]);

            let indexInOriginal = cid.findIndex(item => item[0] === coinName);
            cid[indexInOriginal][1] = parseFloat((cid[indexInOriginal][1] - amountToReturn).toFixed(2));
        }
    }

    if (changeDue > 0) {
        return "Status: INSUFFICIENT_FUNDS";
    }

    return `Status: OPEN\n${changeArray.map(item => `${item[0]}: $${item[1]}`).join("\n")}`;
}

function getCidString() {
    return `Change in drawer:\n${cid.map(item => `${item[0]}: $${item[1].toFixed(2)}`).join("\n")}`;
}
