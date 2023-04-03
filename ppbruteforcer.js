const checkButton = document.getElementById("checkAnswersButton");
const nonSelectInputField = document.getElementById("inputb");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function bruteForceLoop() {
    let testValue =  0;
    while (nonSelectInputField.className != "correctAnswer") {
        nonSelectInputField.value = "";
        testValue += 0.5;
        nonSelectInputField.value = testValue;
        checkButton.click();
        await sleep(100);
    }
}

bruteForceLoop()