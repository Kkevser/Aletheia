    document.addEventListener("DOMContentLoaded", function () {
        document.querySelector(".btn-search").addEventListener("click", function () {
            const haberLinki = document.querySelector(".tbox-search").value;

            if (!haberLinki) {
                alert("Lütfen bir haber linki girin!");
                return;
            }

            fetch("http://localhost:5501/api/analysis", {  // <-- Backend API adresi burası!
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ content: haberLinki })
            })
            .then(response => response.json())
            .then(data => {
                document.querySelector(".analysis-summary").innerHTML = `
                    <p>Metin Analizi: ${data.metinAnalizi}</p>
                    <p>Görsel Analiz: ${data.görselAnaliz}</p>
                    <p>Kaynak Kontrolü: ${data.kaynakKontrolü}</p>
                `;
            })
            .catch(error => console.error("Hata:", error));
        });
    });

