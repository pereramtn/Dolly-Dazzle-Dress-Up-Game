// fashion wardrobe items
const wardrobe = {

    frocks: [
        {
            name: "Pink Princess Frock",
            file: "Images/clothes/frocks/pink-pricess.png",
            emoji: "👗",
            tags: ["birthday", "wedding", "gala"]
        },
        {
            name: "Purple Party Frock",
            file: "Images/clothes/frocks/purple-wedding.png",
            emoji: "💜",
            tags: ["party", "gala"]
        },
        {
            name: "Floral Summer Frock",
            file: "Images/clothes/frocks/summer-frock.png",
            emoji: "🌸",
            tags: ["beach", "summer"]
        },
        {
            name: "Elegant White Frock",
            file: "Images/clothes/frocks/white-frock.png",
            emoji: "🤍",
            tags: ["wedding", "gala"]
        }
    ],

    tops: [
        {
            name: "Pink Heart Top",
            file: "Images/clothes/tops/pink-top.png",
            emoji: "💗",
            tags: ["birthday", "date", "party"]
        },
        {
            name: "White Cute Top",
            file: "Images/clothes/tops/white-top.png",
            emoji: "🤍",
            tags: ["college", "casual"]
        },
        {
            name: "Purple Crop Top",
            file: "Images/clothes/tops/purple-top.png",
            emoji: "💜",
            tags: ["party", "fashion"]
        }
    ],

    skirts: [
        {
            name: "Pink Mini Skirt",
            file: "Images/clothes/skirts/pink-skirt.png",
            emoji: "🎀",
            tags: ["birthday", "date", "party"]
        },
        {
            name: "Denim Skirt",
            file: "Images/clothes/skirts/denim-skirt.png",
            emoji: "💙",
            tags: ["college", "casual"]
        },
        {
            name: "Purple Tulle Skirt",
            file: "Images/clothes/skirts/purple-skirt.png",
            emoji: "💜",
            tags: ["fashion", "gala"]
        }
    ],

    shoes: [
        {
            name: "Pink Sneakers",
            file: "Images/clothes/shoes/pink-sneker.png",
            emoji: "👟",
            tags: ["college", "casual", "beach"]
        },
        {
            name: "Pink High Heels",
            file: "Images/clothes/shoes/pink-heels.png",
            emoji: "👠",
            tags: ["birthday", "date", "party"]
        },
        {
            name: "Elegant White Shoes",
            file: "Images/clothes/shoes/white-shoes.png",
            emoji: "🤍",
            tags: ["wedding", "gala"]
        }
    ],

    hairstyles: [
        {
            name: "Long Brown Hair",
            file: "Images/clothes/hairs/Long-Brown.png",
            emoji: "🤎",
            tags: ["birthday", "date", "casual"]
        },
        {
            name: "Pink Curly Hair",
            file: "Images/clothes/hairs/Pink-Curly.png",
            emoji: "🩷",
            tags: ["party", "fashion"]
        },
        {
            name: "Blonde Ponytail",
            file: "Images/clothes/hairs/Blonde-Ponytail.png",
            emoji: "💛",
            tags: ["college", "casual"]
        }
    ],

    accessories: [
        {
            name: "Pink Bow",
            file: "Images/clothes/accesories/pink-bow.png",
            emoji: "🎀",
            tags: ["birthday", "date", "party"]
        },
        {
            name: "Diamond Necklace",
            file: "Images/clothes/accesories/diamond.png",
            emoji: "💎",
            tags: ["wedding", "gala"]
        },
        {
            name: "Pink Handbag",
            file: "Images/clothes/accesories/pink-handbag.png",
            emoji: "👜",
            tags: ["birthday", "college", "date"]
        },
        {
            name: "Heart Sunglasses",
           file: "Images/clothes/accesories/sunglases.png",
            emoji: "🕶️",
            tags: ["beach", "summer"]
        }
    ]

};


//game levels

const levels = [
    {
        name: "Birthday Party",
        emoji: "🎂",
        description: "Create a beautiful look for a birthday party Using Dolly Dazzle's Fashion Wardrobe!",
        tag: "birthday"
    },
    {
        name: "Beach Party",
        emoji: "🏖️",
        description: "Choose a fresh and colourful summer look Using Dolly Dazzle's Fashion Wardrobe!",
        tag: "beach"
    },
    {
        name: "College Day",
        emoji: "🎒",
        description: "Create a cute and comfortable college outfit Using Dolly Dazzle's Fashion Wardrobe!",
        tag: "college"
    },
    {
        name: "Romantic Date",
        emoji: "💕",
        description: "Get ready for a lovely romantic date Using Dolly Dazzle's Fashion Wardrobe!",
        tag: "date"
    },
    {
        name: "Wedding Ceremony",
        emoji: "💍",
        description: "Choose an elegant outfit for a wedding Using Dolly Dazzle's Fashion Wardrobe!",
        tag: "wedding"
    },
    {
        name: "Job Interview",
        emoji: "💼",
        description: "Create a smart and professional appearance Using Dolly Dazzle's Fashion Wardrobe!",
        tag: "formal"
    },
    {
        name: "Winter Vacation",
        emoji: "❄️",
        description: "Create a cosy winter fashion look Using Dolly Dazzle's Fashion Wardrobe!",
        tag: "winter"
    },
    {
        name: "Fashion Show",
        emoji: "👑",
        description: "Show your creativity on the fashion runway Using Dolly Dazzle's Fashion Wardrobe!",
        tag: "fashion"
    },
    {
        name: "New Year Celebration",
        emoji: "🎆",
        description: "Celebrate with a sparkling party outfit Using Dolly Dazzle's Fashion Wardrobe!",
        tag: "party"
    },
    {
        name: "Grand Fashion Gala",
        emoji: "✨",
        description: "Create your most glamorous fashion look Using Dolly Dazzle's Fashion Wardrobe!",
        tag: "gala"
    }
];


//game variables

let currentLevel = 0;
let currentCategory = "frocks";

let selectedItems = {
    frocks: null,
    tops: null,
    skirts: null,
    shoes: null,
    hairstyles: null,
    accessories: null
};

let unlockedLevel = Number(localStorage.getItem("dollyUnlocked")) || 1;

let completedLevels = JSON.parse(
    localStorage.getItem("dollyCompleted") || "[]"
);


//html events

const wardrobeItems = document.getElementById("wardrobeItems");
const gameMessage = document.getElementById("gameMessage");

const layers = {
    frocks: document.getElementById("frockLayer"),
    tops: document.getElementById("topLayer"),
    skirts: document.getElementById("skirtLayer"),
    shoes: document.getElementById("shoeLayer"),
    hairstyles: document.getElementById("hairLayer"),
    accessories: document.getElementById("accessoryLayer")
};


//show wardrobe items

function showWardrobe(category) {

    currentCategory = category;
    wardrobeItems.innerHTML = "";

    document.querySelectorAll(".category-btn").forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.category === category
        );
    });

    const items = wardrobe[category];

    if (!items || items.length === 0) {
        wardrobeItems.innerHTML =
            '<p class="empty-wardrobe">No fashion items available 💗</p>';
        return;
    }

    items.forEach((item, index) => {

        const button = document.createElement("button");

        button.className = "wardrobe-item";

        const selected = selectedItems[category] === item.file;

        if (selected) {
            button.classList.add("selected");
        }

        button.innerHTML = `
            <div class="wardrobe-image-box">
                <img src="${item.file}"
                     class="wardrobe-image"
                     alt="${item.name}">
                <span class="image-fallback">${item.emoji}</span>
            </div>

            <span class="item-name">${item.name}</span>

            ${selected ? "<small>✓ Wearing</small>" : ""}
        `;

        const image = button.querySelector(".wardrobe-image");
        const fallback = button.querySelector(".image-fallback");

        image.onload = () => {
            fallback.style.display = "none";
        };

        image.onerror = () => {
            image.style.display = "none";
            fallback.style.display = "block";
            console.error("Image not found:", item.file);
        };

        button.addEventListener("click", () => {
            wearItem(category, index);
        });

        wardrobeItems.appendChild(button);

    });
}




//dress the character

function wearItem(category, index) {

    const item = wardrobe[category][index];

    // A frock replaces both top and skirt.
    if (category === "frocks") {
        selectedItems.tops = null;
        selectedItems.skirts = null;

        layers.tops.removeAttribute("src");
        layers.skirts.removeAttribute("src");
    }

    // Choosing a separate top or skirt removes the frock.
    if (category === "tops" || category === "skirts") {
        selectedItems.frocks = null;
        layers.frocks.removeAttribute("src");
    }

    selectedItems[category] = item.file;

    const layer = layers[category];

    layer.onload = () => {
        gameMessage.textContent = `${item.name} looks beautiful! 💖`;
    };

    layer.onerror = () => {
        selectedItems[category] = null;
        layer.removeAttribute("src");

        gameMessage.textContent =
            `Could not find ${item.file}. Check the image filename.`;
    };

    layer.src = item.file;

    showWardrobe(category);
    updateSelectedOutfit();
}


//show selected outfit
function updateSelectedOutfit() {

    const names = [];

    Object.keys(selectedItems).forEach(category => {

        const file = selectedItems[category];

        if (file) {
            const item = wardrobe[category].find(
                item => item.file === file
            );

            if (item) {
                names.push(item.name);
            }
        }

    });

    document.getElementById("selectedOutfit").textContent =
        names.length ? names.join(" • ") : "No items selected yet.";
}


//reset charactor

function resetCharacter() {

    Object.keys(selectedItems).forEach(category => {

        selectedItems[category] = null;

        layers[category].removeAttribute("src");

    });

    showWardrobe(currentCategory);
    updateSelectedOutfit();

    gameMessage.textContent = "Your character is ready for a new style! 🎀";
}


//random outfit

function randomStyle() {

    resetCharacter();

    // Choose either a frock OR a top and skirt.
    if (Math.random() < 0.5) {

        chooseRandomItem("frocks");

    } else {

        chooseRandomItem("tops");
        chooseRandomItem("skirts");

    }

    chooseRandomItem("shoes");
    chooseRandomItem("hairstyles");
    chooseRandomItem("accessories");

    showWardrobe(currentCategory);

    gameMessage.textContent = "A beautiful random style is ready! ✨";
}


function chooseRandomItem(category) {

    const items = wardrobe[category];

    const randomIndex = Math.floor(Math.random() * items.length);

    wearItem(category, randomIndex);
}


//level display

function showLevel() {

    const level = levels[currentLevel];

    document.getElementById("eventName").textContent =
        `${level.emoji} ${level.name}`;

    document.getElementById("eventDescription").textContent =
        level.description;

    document.getElementById("levelNumber").textContent =
        `LEVEL ${currentLevel + 1} / 10`;

    document.getElementById("progressBar").style.width =
        `${((currentLevel + 1) / levels.length) * 100}%`;

    resetCharacter();
    showLevels();

}

//level cards

function showLevels() {

    const levelGrid = document.getElementById("levelGrid");

    levelGrid.innerHTML = "";

    levels.forEach((level, index) => {

        const number = index + 1;

        const button = document.createElement("button");

        button.className = "level-card";

        const isLocked = number > unlockedLevel;
        const isCompleted = completedLevels.includes(number);

        button.disabled = isLocked;

        if (number === currentLevel + 1) {
            button.classList.add("current");
        }

        if (isCompleted) {
            button.classList.add("completed");
        }

        button.innerHTML = `
            <span>${isLocked ? "🔒" : isCompleted ? "🏆" : level.emoji}</span>
            <strong>Level ${number}</strong>
            <small>${level.name}</small>
            <small>${isCompleted ? "Completed ✓" : isLocked ? "Locked" : "Play Now"}</small>
        `;

        button.addEventListener("click", () => {

            if (!isLocked) {
                currentLevel = index;
                showLevel();
            }

        });

        levelGrid.appendChild(button);

    });

}

//calculate outfit score

function calculateScore() {

    const hasFrock = Boolean(selectedItems.frocks);

    const hasSeparateOutfit =
        Boolean(selectedItems.tops) &&
        Boolean(selectedItems.skirts);

    const hasShoes = Boolean(selectedItems.shoes);
    const hasHair = Boolean(selectedItems.hairstyles);
    const hasAccessories = Boolean(selectedItems.accessories);

    if (!(hasFrock || hasSeparateOutfit)) {
        return {
            valid: false,
            score: 0,
            message: "Please choose a frock or both a top and a skirt."
        };
    }

    if (!hasShoes || !hasHair) {
        return {
            valid: false,
            score: 0,
            message: "Please select shoes and a hairstyle too!"
        };
    }

    const eventTag = levels[currentLevel].tag;

    let score = 0;

    // Main outfit: 40 points
    if (hasFrock) {

        score += getItemScore("frocks", 40, eventTag);

    } else {

        score += getItemScore("tops", 20, eventTag);
        score += getItemScore("skirts", 20, eventTag);

    }

    // Shoes: 20 points
    score += getItemScore("shoes", 20, eventTag);

    // Hairstyle: 20 points
    score += getItemScore("hairstyles", 20, eventTag);

    // Accessories: 20 points
    if (hasAccessories) {
        score += getItemScore("accessories", 20, eventTag);
    }

    return {
        valid: true,
        score: Math.min(100, Math.round(score))
    };

}


function getItemScore(category, points, eventTag) {

    const selectedFile = selectedItems[category];

    const item = wardrobe[category].find(
        item => item.file === selectedFile
    );

    if (!item) return 0;

    // Full points for an event-matching item.
    // 70% points for an item without a matching event tag.
    return item.tags.includes(eventTag)
        ? points
        : points * 0.7;
}


// 13. SUBMIT OUTFIT

function submitOutfit() {

    const result = calculateScore();

    if (!result.valid) {
        gameMessage.textContent = result.message;
        return;
    }

    const passed = result.score >= 75;

    const overlay = document.getElementById("resultOverlay");

    document.getElementById("scoreValue").textContent =
        result.score;

    if (passed) {

        document.getElementById("resultIcon").textContent = "🏆";

        document.getElementById("resultTitle").textContent =
            "Amazing Fashion Star!";

        document.getElementById("resultDescription").textContent =
            "Your outfit looks beautiful! You completed this challenge.";

        document.getElementById("scoreMessage").textContent =
            "Excellent styling! Keep shining! ✨";

        if (!completedLevels.includes(currentLevel + 1)) {
            completedLevels.push(currentLevel + 1);
        }

        if (currentLevel + 1 < levels.length) {
            unlockedLevel = Math.max(unlockedLevel, currentLevel + 2);
        }

        localStorage.setItem("dollyUnlocked", unlockedLevel);
        localStorage.setItem(
            "dollyCompleted",
            JSON.stringify(completedLevels)
        );

        document.getElementById("nextLevelBtn").style.display =
            "inline-block";

        document.getElementById("nextLevelBtn").textContent =
            currentLevel === levels.length - 1
                ? "Finish Game 🎉"
                : "Next Level ➜";

    } else {

        document.getElementById("resultIcon").textContent = "💗";

        document.getElementById("resultTitle").textContent =
            "Almost There!";

        document.getElementById("resultDescription").textContent =
            "Your outfit needs a little more styling to match this event.";

        document.getElementById("scoreMessage").textContent =
            "You need 75 points to unlock the next level. Try again!";

        document.getElementById("nextLevelBtn").style.display =
            "none";

    }

    showLevels();
    overlay.classList.add("show");

}


//next level

function nextLevel() {

    document.getElementById("resultOverlay").classList.remove("show");

    if (currentLevel === levels.length - 1) {

        document.getElementById("resultIcon").textContent = "👑";

        document.getElementById("resultTitle").textContent =
            "You Are a Fashion Superstar!";

        document.getElementById("resultDescription").textContent =
            "Congratulations! You completed all 10 fashion challenges.";

        document.getElementById("scoreMessage").textContent =
            "You are the ultimate Dolly Dazzle fashion star! 💖";

        document.getElementById("nextLevelBtn").style.display =
            "none";

        document.getElementById("resultOverlay").classList.add("show");

        return;
    }

    currentLevel++;

    showLevel();

}




//button events
document.querySelectorAll(".category-btn").forEach(button => {

    button.addEventListener("click", () => {
        showWardrobe(button.dataset.category);
    });

});

document.getElementById("randomBtn").addEventListener("click", randomStyle);

document.getElementById("resetBtn").addEventListener("click", resetCharacter);



document.getElementById("submitBtn").addEventListener("click", submitOutfit);

document.getElementById("nextLevelBtn").addEventListener("click", nextLevel);

document.getElementById("closeResultBtn").addEventListener("click", () => {
    document.getElementById("resultOverlay").classList.remove("show");
});


//start game

showWardrobe("frocks");
showLevel();
