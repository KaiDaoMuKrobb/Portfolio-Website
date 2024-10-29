const colorPalettes = [
    ['#cca1c9', '#ffd3dd', '#f3a0ad', '#bed1e3', '#92a1c3'],
    ['#F3A2BE', '#FFD3DD', '#bed1e3', '#C6E6E3', '#81BFB7'],
    ['#664242', '#AE8381', '#74676F', '#D0BCB1', '#E8DCD6'],
];

let currentPalette = 0;

document.getElementById('color-button').addEventListener('click', () => {
    currentPalette = (currentPalette + 1) % colorPalettes.length;
    changeColors(colorPalettes[currentPalette]);
});

function changeColors(palette) {
    document.body.style.backgroundColor = palette[0];
    document.querySelectorAll('nav, section').forEach((el, index) => {
        el.style.backgroundColor = palette[(index % (palette.length - 1)) + 1]; // Use remaining colors
    });
}