const items = [
    "Jelly",
    "Dolphin",
    "Rocket",
    "Candle",
    "Rainbow",
    "Whisper",
    "Zebra",
    "Tornado",
    "Apple",
    "Elephant",
    "Ocean",
    "Tiger",
    "Feather",
    "Leaf",
    "Moon",
    "Mountain",
    "Guitar",
    "Lemon",
    "Sunflower",
    "Penguin",
    "Diamond",
    "Butterfly",
    "Violet",
    "Waterfall",
    "Cloud",
    "Island",
    "Castle",
    "Forest",
    "Rainbow",
    "Unicorn",
    "Squirrel",
    "Starfish",
    "Firefly",
    "Jellyfish",
    "Dolphin",
    "Elephant",
    "Honey",
    "Ladybug",
    "Ocean",
    "Penguin",
    "Rainbow",
    "Butterfly",
    "Moon",
    "Mountain",
    "Sunflower",
    "Guitar",
    "Lemon",
    "Tiger",
    "Feather",
    "Leaf",
    "Apple",
    "Zebra",
    "Waterfall",
    "Whisper",
    "Candle",
    "Island",
    "Castle",
    "Forest",
    "Violet",
    "Cloud",
    "Tornado",
    "Diamond",
    "Firefly",
    "Squirrel",
    "Starfish",
    "Honey",
    "Ladybug",
    "Rainbow",
    "Butterfly",
    "Dolphin",
    "Elephant",
    "Moon",
    "Mountain",
    "Sunflower",
    "Penguin",
    "Guitar",
    "Lemon",
    "Tiger",
    "Feather",
    "Leaf",
    "Apple",
    "Zebra",
    "Waterfall",
    "Whisper",
    "Candle",
    "Island",
    "Castle",
    "Forest",
    "Violet",
    "Cloud",
    "Tornado",
    "Diamond",
    "Firefly",
    "Squirrel",
    "Starfish",
    "Honey",
    "Ladybug",
    "Ocean",
    "Butterfly",
    "Dolphin"
];

const root = new makeNode('\0');
for(const item of items) {
    add(item, 0, root);
}

const text_box = document.getElementById("text-box");
const list = document.getElementById("list");

function handler(e) {
    const str = e.target.value;
    const predictions = search(str, 0, root);
    // add to ul
    list.innerHTML = " ";
    for(const prediction of predictions) {
        list.innerHTML += `<li class="list-group-item clickable" onClick="handleClick(this)"><b>${str}</b>${prediction.substring(str.length)}</li>`;
    }
}

function handleClick(e) {
    const text = e.innerHTML.split("<b>").join("").split("</b>").join("");
    text_box.value = text;
}

handler({target: {value: ""}});

text_box.addEventListener("keyup", handler);