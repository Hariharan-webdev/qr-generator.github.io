var imgBox = document.getElementById("imgBox");
var qrimg = document.getElementById("qrimg");
var qrtxt = document.getElementById("qrtxt");

function generateQR(){
    if(qrtxt.value.length > 0) {
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtxt.value;
    }
}