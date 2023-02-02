const body = document.body;
const preloading = document.querySelector('.preloading'),
    progressBar = document.querySelector('.preloading .progress-bar');

function closePreloading() {
    preloading.style.opacity = '0';
    setTimeout(function() {
        preloading.style.display = 'none';
        body.className = body.className.replace('disable-scroll', '');
    }, 1200);
}

function setPreloadingProgress(percentage) {
    progressBar.style.width = `${percentage}%`;

    if (percentage === 100) {
        closePreloading();
    }
}

const elements = document.querySelectorAll('img');
var totalLoaded = 0;

function addLoaded() {
    totalLoaded++;
    let percentage = (totalLoaded/elements.length) * 100;
    setPreloadingProgress(percentage);
}

for(let element of elements) {
    if (element.complete && element.naturalHeight !== 0) {
        addLoaded();
        continue;
    }

    let previousOnload = element.onload;
    element.onload = function() {
        if ('function' === typeof previousOnload) {
            previousOnload();
        }

        addLoaded();
    }
}