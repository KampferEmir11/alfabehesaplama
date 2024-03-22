document.querySelector(".ogren").addEventListener("click" , function(){
    const girilenDeger = document.querySelector(".deger").value;
if (girilenDeger == 1 ) {
    alert("Alfabenin 1. Harfi A'dır")
}
else if(girilenDeger == 2) {
    alert("Alfabenin 2.Harfi B'dir")
}
else if(girilenDeger == 3) {
    alert("Alfabenin 3.Harfi C'dir")
}
else if(girilenDeger == 4) {
    alert("Alfabenin 4.Harfi Ç'dir")
}
else if(girilenDeger == 5) {
    alert("Alfabenin 5.Harfi D'dir")
}
else if(girilenDeger == 6) {
    alert("Alfabenin 6.Harfi E'dir")
}
else if(girilenDeger == 7) {
    alert("Alfabenin 7.Harfi F'dir")
}
else if(girilenDeger == 8) {
    alert("Alfabenin 8.Harfi G'dir")
}
else if(girilenDeger == 9) {
    alert("Alfabenin 9.Harfi Ğ'dir")
}
else if(girilenDeger == 10) {
    alert("Alfabenin 10.Harfi H'dir")
}
else if(girilenDeger == 11) {
    alert("Alfabenin 11.Harfi I'dir")
}
else if(girilenDeger == 12) {
    alert("Alfabenin 12.Harfi İ'dir")
}
else if(girilenDeger == 13) {
    alert("Alfabenin 13.Harfi J'dir")
}
else if(girilenDeger == 14) {
    alert("Alfabenin 14.Harfi K'dir")
}
else if(girilenDeger == 15) {
    alert("Alfabenin 15.Harfi L'dir")
}
else if(girilenDeger == 16) {
    alert("Alfabenin 16.Harfi M'dir")
}
else if(girilenDeger == 17) {
    alert("Alfabenin 17.Harfi N'dir")
}
else if(girilenDeger == 18) {
    alert("Alfabenin 18.Harfi O'dur")
}
else if(girilenDeger == 19) {
    alert("Alfabenin 19.Harfi Ö'dür")
}
else if(girilenDeger == 20) {
    alert("Alfabenin 20.Harfi P'dir")
}
else if(girilenDeger == 21) {
    alert("Alfabenin 21.Harfi R'dir")
}
else if(girilenDeger == 22) {
    alert("Alfabenin 22.Harfi S'dir")
}
else if(girilenDeger == 23) {
    alert("Alfabenin 23.Harfi Ş'dir")
}
else if(girilenDeger == 24) {
    alert("Alfabenin 24.Harfi T'dir")
}
else if(girilenDeger == 25) {
    alert("Alfabenin 25.Harfi U'dur")
}
else if(girilenDeger == 26) {
    alert("Alfabenin 26.Harfi Ü'dir")
}
else if(girilenDeger == 27) {
    alert("Alfabenin 27.Harfi V'dir")
}
else if(girilenDeger == 28) {
    alert("Alfabenin 28.Harfi Y'dir")
}
else if(girilenDeger == 29) {
    alert("Alfabenin 29.Harfi Z'dir")
}
else if(girilenDeger > 29) {
    alert("Türkçe Alfabe 29 Harfden Oluşur Daha Büyük Bir Değer Yazmayın.")
}
else if(girilenDeger <= 0) {
    alert("Pozitif Bir Tam Sayı Giriniz.")
}
});
document.querySelector(".clear").addEventListener("click" , function(){
    document.querySelector(".deger").value = "";
})