function encrypt() {
    var inputan = document.getElementById('inputan').value;
    var encrypted = CryptoJS.AES.encrypt(inputan, "Ngodeinweb");
    document.getElementById('app').innerHTML = encrypted;
    localStorage.setItem("encrypted", encrypted);
  }
  
  function decrypte() {
    var inputan2 = document.getElementById('inputan2').value;
    var decrypted = CryptoJS.AES.decrypt(localStorage.getItem("encrypted"), "Ngodeinweb");
    document.getElementById('app2').innerHTML = decrypted.toString(CryptoJS.enc.Utf8);
  }