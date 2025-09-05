// Dice-Roller Program
function rollDice() {
    const numofDice = parseInt(document.getElementById("numofDice").value);
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");

    const values = [];  // use plural name
    const images = [];

    for (let i = 0; i < numofDice; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;  // single dice roll
        values.push(roll);
        images.push(`<img src="dice_images/${roll}.png" alt="dice${roll}">`);
    }

    diceResult.textContent = `Dice: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}
