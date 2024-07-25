document.addEventListener('DOMContentLoaded', function () {
    Scrollbar.init(document.querySelector('#my-scrollbar'), {
        damping: 0.03,
        alwaysShowTracks: true,
    });
});