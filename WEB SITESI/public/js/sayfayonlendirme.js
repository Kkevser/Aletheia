

document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector(".tbox-search");
    const searchButton = document.querySelector(".btn-search");

    searchButton.addEventListener("click", function () {
        const url = searchInput.value.trim();

        if (url) {
            // Yeni sayfaya yönlendirme
            window.location.href = `pages/analysis.html?url=${encodeURIComponent(url)}`;
        } else {
            alert("Lütfen bir haber linki giriniz.");
        }
    });
});

function updateScore(score) {
    const scoreBar = document.querySelector('.score-bar');
    
    scoreBar.style.width = score + "%";

    // Geçiş efektinin genişliğini skora göre ayarla
    scoreBar.style.backgroundSize = `${200 - score}% 100%`;
}




