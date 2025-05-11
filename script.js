
function validateLogin(){
    const termschecked=document.getElementById('terms').checked;
    const username=document.getElementById('username').value.trim();
    const password=document.getElementById('password').value.trim();
    if(username==="" || password==="")
    {
        alert('Please fill all the fields');
        return;
    }
    else if (!termschecked)
    {
        alert("Please accept the terms and conditions");
        return;
    }
    else 
    {
        document.location.href='loginnew.html';
        
    }

}
function togglePassword(){
    const passinput=document.getElementById("password");
    if(passinput.type=="password")
    {
        passinput.type="text";
    
    }
    else{
        passinput.type="password";
        
    }
}