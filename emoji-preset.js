// Emoji preset list
const EMOJI_NAMES = [
    "YARR",
    "SKULL",
    "SCARYCAT"
];

// Build emoji map
const EMOJIS = {};
EMOJI_NAMES.forEach(name => {
    EMOJIS[name] = `${name}.png`;
});

// Parse :EMOJI:
function parseEmojis(text) {
    return text.replace(/:([A-Z0-9_]+):/g, (match, name) => {
        if (!EMOJIS[name]) return match;
        return `<img src="${EMOJIS[name]}" class="custom-emoji" alt="${name}">`;
    });
}
