// Nicknames list
let nicknames = [
    "Boss",
    "Rockstar",
    "Legend",
    "Champion",
    "King",
    "Queen",
    "Hero",
    "Mastermind",
    "Superstar",
    "Tiger"
];

// Access elements
let btn = document.getElementById("btn");
let nameInput = document.getElementById("name");
let result = document.getElementById("result");

// Button click event
btn.addEventListener("click", () => {

    let userName = nameInput.value;

    if (userName === "") {
        result.textContent = "Please enter your name first ❗";
        return;
    }

    // Random nickname logic
    let randomIndex = Math.floor(Math.random() * nicknames.length);
    let randomNick = nicknames[randomIndex];

    // Display output
    result.textContent = `${userName}, your nickname is "${randomNick}" `;
});
