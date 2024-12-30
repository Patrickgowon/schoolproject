const bars = document.querySelector(".sidebar-container .sidebar");
if (bars){
    const mentn = document.querySelector(".menueclick");
    mentn.addEventListener('click', () =>{
    bars.classList.toggle("active");
    })

}

const bar = document.querySelector(".settingsidebar-cotainer .settingsidebar");
if (bar){
    const menubtnn = document.querySelector(".barss");
    menubtnn.addEventListener('click', () =>{
    bar.classList.toggle("active");
    })

}


const bell = document.querySelector(".notificationsidebar-container .notificatoinsidebar");
if (bell){
    const men = document.querySelector(".bellicon");
    men.addEventListener('click', () =>{
    bell.classList.toggle("active");
    })

}
const set = document.querySelector(".setbar-container .setbar");
if (set){
    
    const buttons = document.querySelectorAll(".settingbtn");
    buttons.forEach(button => {
        button.addEventListener('click', ()=>{
            set.classList.toggle("active");
        });
    });
    
}

const sets = document.querySelector(".setbar-container .setbar");
if (sets){
    const menubttnn = document.querySelector(".staricon");
    menubttnn.addEventListener('click', () =>{
    set.classList.toggle("active");
    })

}

const login = document.querySelector(".login-container");
const register = document.querySelector(".register-container");
if (login) {
    
    const loginbtn = document.querySelector(".login");
    loginbtn.addEventListener('click', () =>{
    login.classList.add("active");
    register.classList.remove("active");
    
})
}
const signupbtn = document.querySelector(".signup");
if (signupbtn) {
    signupbtn.addEventListener('click', () =>{
        register.classList.add("active");
        login.classList.remove("active");
     })
}





 

 