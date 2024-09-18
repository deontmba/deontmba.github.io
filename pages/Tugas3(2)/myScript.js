function hitung(operator) {
    const bil1 = parseFloat(document.getElementById('bil1').value);
    const bil2 = parseFloat(document.getElementById('bil2').value);
    let hasil = '';

    if (isNaN(bil1) || isNaN(bil2)) {
        hasil = 'Masukkan bilangan valid';
    } else {
        switch (operator) {
            case '+':
                hasil = bil1 + bil2;
                break;
            case '-':
                hasil = bil1 - bil2;
                break;
            case '*':
                hasil = bil1 * bil2;
                break;
            case '/':
                hasil = bil1 / bil2;
                break;
            default:
                hasil = 'Operasi tidak valid';
        }
    }

    document.getElementById('hasil').value = hasil;
}
