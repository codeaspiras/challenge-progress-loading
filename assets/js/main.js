const progressBar = document.querySelector('.progress-bar'),
    input = document.querySelector('input[name="percentage"]');

input.addEventListener('change', function() {
    const percentage = input.value;
    progressBar.style.width = percentage + "%";
})