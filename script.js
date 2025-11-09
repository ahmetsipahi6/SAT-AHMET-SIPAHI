const arama = document.getElementById("arama");
const kategori = document.getElementById("kategori");
const tarifler = document.querySelectorAll(".tarif");

// Türkçe karakterleri normalize et
function normalize(str) {
  return str
    .toLowerCase()
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .replace(/ç/g, "c")
    .replace(/ş/g, "s")
    .replace(/ğ/g, "g")
    .trim();
}

function filtrele() {
  const kelime = normalize(arama.value);
  const kat = kategori.value;

  tarifler.forEach(t => {
    const ad = normalize(t.querySelector("h2").textContent);
    const kategoriAttr = t.getAttribute("data-kategori");

    const uygunKelime = ad.includes(kelime);
    const uygunKategori = kat === "hepsi" || kategoriAttr === kat;

    t.style.display = (uygunKelime && uygunKategori) ? "flex" : "none";
  });
}

arama.addEventListener("input", filtrele);
kategori.addEventListener("change", filtrele);
