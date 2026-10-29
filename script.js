function buatTabel() {
    let angka= Number(document.getElementById("angka").value);
    let teks = "";
    for (let i = 1; i <= 10; i++){
        teks += angka + "x" + i + "=" + (angka * i) + "<br>"
 }
 document.getElementById("hasil").innerHTML = teks;
    
}