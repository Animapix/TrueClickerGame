// Grabbing essential stuff, don't ask why.
const clickButton = document.getElementById('clickButton');
const scoreElement = document.getElementById('score');
const infoText = document.getElementById('infoText');

let score = 0; // Counting clicks because why not?

// Array full of wisdom or nonsense? You decide.
const messages = [ /* lots of motivational lies here */
    { min: 0,   max: 9,    text: "" },
    { min: 10,  max: 19,   text: "10 clicks? Congrats, you completed the tutorial! 🎉" },
    { min: 20,  max: 29,   text: "You're already mastering the fine art of clicking." },
    { min: 30,  max: 39,   text: "Keep going, you might unlock something amazing... Or not." },
    { min: 40,  max: 49,   text: "Expecting a reward? Just a bit more effort!" },
    { min: 50,  max: 68,   text: "Great job, you've earned absolutely nothing!" },
    { min: 69,  max: 69,   text: "69... very mature of you." },
    { min: 70,  max: 79,   text: "Next milestone: a truly exceptional surprise... maybe." },
    { min: 80,  max: 89,   text: "Your efforts will soon be rewarded. Promise (🤞)." },
    { min: 90,  max: 99,   text: "You're nearing 100 clicks. The suspense is killing me!" },
    { min: 100, max: 109,  text: "100 clicks! Your endurance is remarkable." },
    { min: 110, max: 124,  text: "Still clicking? Hope springs eternal." },
    { min: 125, max: 139,  text: "Nothing at this milestone, but the next one is incredible, I swear!" },
    { min: 140, max: 159,  text: "Still here? Admirable persistence." },
    { min: 160, max: 179,  text: "At 200 points, an unbelievable secret will be revealed." },
    { min: 180, max: 199,  text: "You're unstoppable, almost." },
    { min: 200, max: 219,  text: "Here's the secret: there's no secret! 😈" },
    { min: 220, max: 249,  text: "Having fun yet? Because I am!" },
    { min: 250, max: 279,  text: "Nearly 300... Something legendary is coming! (or not)" },
    { min: 280, max: 299,  text: "I'm beginning to think you actually enjoy clicking." },
    { min: 300, max: 329,  text: "At 500 clicks, you'll gain incredible powers! (Not really.)" },
    { min: 330, max: 359,  text: "Still no reward, but your patience is impressive." },
    { min: 360, max: 399,  text: "You officially beat nobody. Congrats." },
    { min: 400, max: 449,  text: "Approaching half a thousand. Getting exciting!" },
    { min: 450, max: 499,  text: "Prepare mentally for disappointment at 500 clicks." },
    { min: 500, max: 549,  text: "500 clicks achieved! Now things get serious... or not." },
    { min: 550, max: 599,  text: "600, a nice round number coming soon. I love it." },
    { min: 600, max: 649,  text: "Noticed you've been clicking for a while now? I have." },
    { min: 650, max: 699,  text: "700 soon, this time something crazy happens! (Still nope)" },
    { min: 700, max: 799,  text: "It's nice to believe in something. Even this game." },
    { min: 800, max: 899,  text: "You really are persistent. Or stubborn?" },
    { min: 900, max: 999,  text: "At 1000 points, everything changes... or maybe not." },
    { min: 1000, max: 1199, text: "1000 clicks, huge respect for your extraordinary tenacity!" },
    { min: 1200, max: 1499, text: "Expecting a trophy? Sorry, out of stock." },
    { min: 1500, max: 1799, text: "Clicking is your full-time job now?" },
    { min: 1800, max: 1999, text: "Approaching 2000 clicks. Soon you'll be click-rich." },
    { min: 2000, max: 2499, text: "2000 clicks! Eternal respect (until you close this page)." },
    { min: 2500, max: 2999, text: "Almost 3000 clicks, still no point. Beautiful." },
    { min: 3000, max: 3499, text: "3000 clicks, you're officially a legend of useless clicking." },
    { min: 3500, max: 3999, text: "Expecting something at 4000? So am I." },
    { min: 4000, max: 4499, text: "4000 clicks, consider taking a break... or not." },
    { min: 4500, max: 4999, text: "5000 clicks ahead, you'll be the absolute king of nothing." },
    { min: 5000, max: 5000, text: "5000 clicks reached! Congrats, but now it's really the end, promise." }
];
function updateInfo(score) {
    const message = messages.find(m => score >= m.min && score <= m.max);
    const newText = message ? message.text : "";

    if (infoText.textContent !== newText) { // Checks if you deserve a new message.
        infoText.classList.remove("text-change-animation");
        void infoText.offsetWidth; // This line is here to confuse beginners. Enjoy.
        infoText.textContent = newText;
        infoText.classList.add("text-change-animation"); // Fancy animation added here. Wow.
    }
}

clickButton.addEventListener('click', () => {
    score++; // Yes, another click. Keep going champ.
    scoreElement.textContent = `Score: ${score}`; // Updates your pointless achievement.
    updateInfo(score); // Updates the message you probably ignore anyway.
});

// Initializes your journey of endless clicks.
updateInfo(score);
