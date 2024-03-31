const menu =document.querySelector(".menu-btn")
const menuList =document.querySelector("nav ul")
menu.addEventListener('click',()=>{
    menuList.classList.toggle('show-menu')
})

//reister
    
     
    

function validateInput(){
   
    forName = document.querySelector(".forname");
    sureName = document.querySelector(".surename");
    emailId = document.querySelector(".email");
    phoneNumber = document.querySelector(".phonenumber");
    message1 = document.querySelector(".msg1");
    message2 = document.querySelector(".msg2");
    message3 = document.querySelector(".msg3");
    message4 = document.querySelector(".msg4");
    exp1 = /n[A-za-z]{3,20}$/
    exp2 = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
    exp3 = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im


    if(forName.value == ''){
        message1.innerText = "Requried"
        forName.focus();
        return false;
    }
   
    else {
        if(exp1.test(message1.value)==false){
            message1.innerText = "Invalid Character"
            forName.focus();
            return false;
        }

    }
    if(sureName.value == ''){
        message2.innerText = "Requried"
        sureName.focus();
        return false;
    }
   
    else {
        if(exp1.test(message2.value)==false){
            message2.innerText = "Invalid Character"
            sureName.focus();
            return false;
        }

    }
    if(emailId.value == ''){
        message3.innerText = "Requried"
        emailId.focus();
        return false;
    }
   
    else {
        if(exp2.test(message3.value)== true){
            emailId.focus();
            return true;
        }

    }
    if(phoneNumber.value == ''){
        message4.innerText = "Requried"
        phoneNumber.focus();
        return false;
    }
   
    else {
        if(exp3.test(message4.value)== false){
            
            phoneNumber.focus();
            return true;
        }

    }
}
const openModalButtons = document.querySelectorAll('[data-model-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.querySelector("#overlay")

openModalButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        const form = document.querySelector(button.dataset.modalTarget)
        openModal(form)
    })
})

overlay.addEventListener('click',()=>{
    const form = document.querySelectorAll('form.active')
    models.forEach(form =>{
        closeModal(form)
    })
})


closeModalButtons.forEach(button =>{
    button.addEventListener('click',()=>{
        const form = button.closest("form")
        closeModalModal(form)
    })
})

function openModal(form){
    if(form == null) return
        form.classList.add('active')
        overlay.classList.add('active')
    }


    function closeModal(form){
        if(form == null) return
            form.classList.remove('active')
            overlay.classList.remove('active')
        }