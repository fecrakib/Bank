// const emialFild=document.getElementById('email')
// const email=emialFild.value
// const passwordFild=document.getElementById('password')
// const password=passwordFild.value
// if(email==='rakibislam@132575gamil.com' && password==='rakib'){
//     console.log("usser valid")
// }
// else{
//     console.log("unvalid");
   
// }
document.getElementById('btn-submit').addEventListener('click',function(){

    const emialFild=document.getElementById('email')
    const email=emialFild.value
    const passwordFild=document.getElementById('password')
    const password=passwordFild.value
    if(email==='rakibislam@132575gamil.com' && password==='rakib'){
        console.log("usser valid")
      window.location.href='bank.html'
       
    }
    else{
        console.log("unvalid");
       
    }
    // validation();

})
// email validation
function validation(){
    if(email==='rakibislam@132575gamil.com' && password==='rakib'){
        console.log("usser valid")
    }
    else{
        console.log("unvalid");
       
    }
}