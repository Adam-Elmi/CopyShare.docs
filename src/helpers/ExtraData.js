const code = `
const textArea = document.getElementById("text-input");
const btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    copyText(textArea.value.trim());
});`;
const code2 = `
const image = document.getElementById("image");
const btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    getHistory(image.src);
});`;
const code3 = `
const video = document.getElementById("video");
const btn = document.getElementById("btn");

btn.addEventListener('click', () => {
    CopyVideoUrl(video.src);
});`;

const code4 = `
// Copy some text
copyText("Hello, World!").then(() => getHistory());

// Copy an image
copyImage(imageElement.src).then(() => getHistory());

// Copy a video URL
copyVideoUrl("https://example.com/video.mp4").then(() => getHistory());

`;

const output = `
[
    { type: 'text/plain', content: 'Hello, World!' },
    { type: 'image/png', content: 'Image element' },
    { type: 'video/mp4', content: 'https://example.com/video.mp4' }
]
`;

export {code, code2, code3, code4, output};
