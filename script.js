const arama = document.getElementById("arama");
const kategori = document.getElementById("kategori");
const tarifler = document.querySelectorAll(".tarif");

function filtrele() {
  const kelime = arama.value.toLowerCase();
  const kat = kategori.value;

  tarifler.forEach(t => {
    const ad = t.querySelector("h2").textContent.toLowerCase();
    const kategoriAttr = t.getAttribute("data-kategori");

    const uygunKelime = ad.includes(kelime);
    const uygunKategori = kat === "hepsi" || kategoriAttr === kat;

    if (uygunKelime && uygunKategori) {
      t.style.display = "flex";
    } else {
      t.style.display = "none";
    }
  });
}

arama.addEventListener("input", filtrele);
kategori.addEventListener("change", filtrele);
