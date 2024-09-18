function konversiNilai() {
    const nilai = document.getElementById('nilai').value;
    let hasil = "";

    if (nilai >= 0 && nilai <= 40) {
        hasil = "E";
    } else if (nilai >= 41 && nilai <= 55) {
        hasil = "D";
    } else if (nilai >= 56 && nilai <= 60) {
        hasil = "C";
    } else if (nilai >= 61 && nilai <= 65) {
        hasil = "BC";
    } else if (nilai >= 66 && nilai <= 70) {
        hasil = "B";
    } else if (nilai >= 71 && nilai <= 80) {
        hasil = "AB";
    } else if (nilai >= 81 && nilai <= 100) {
        hasil = "A";
    } else {
        hasil = "Nilai tidak valid. Masukkan angka 0-100.";
    }

    document.getElementById('hasil').innerHTML = `Nilai Huruf: ${hasil}`;
}