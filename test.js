let profipic = Document.querySelector("image img");
let userfile = document.querySelector(".user-file");

userfile.onchange = function(){
    profipic.src = URL.createObjectURL(userfile.files[0]);
   
}