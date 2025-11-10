// make the class ytd-watch-next-secondary-results-renderer invisible
const style = document.createElement('style');
style.innerHTML = `
ytd-watch-next-secondary-results-renderer {
    display: none !important;
}
`;
document.head.appendChild(style);
// remove the div with id secondary
const secondaryDiv = document.getElementById('secondary');
if (secondaryDiv) {
    secondaryDiv.remove();
}
// fit to width the ytd-watch-flexy element and div id primary
const watchFlexy = document.querySelector('ytd-watch-flexy');
if (watchFlexy) {
    watchFlexy.style.maxWidth = '100%';
}
const primaryDiv = document.getElementById('primary');
if (primaryDiv) {
    primaryDiv.style.maxWidth = '100%';
}