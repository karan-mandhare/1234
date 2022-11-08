function myFunction() {
    var txt;
    if (confirm("Press a button!")) {
        txt = "Thank you for registration!";
    } else {
        txt = "Registration cancel successfully!";
    }
    document.getElementById("demo").innerHTML = txt;
}