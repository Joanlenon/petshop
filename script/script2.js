function validateform(){
    const name = document.forms["frmContato"]["userName"].value.trim();
    const email = document.forms["frmContato"]["userEmail"].value.trim();
    const assunto = document.forms["frmContato"]["subject"].value.trim();
    const message = document.forms["frmContato"]["message"].value.trim();

    if(name ===""){
        document.getElementById("userName-info").innerHTML = "Por favor, digite seu nome"
        document.getElementById("userName-info").classList.add("invalid-feedback");
        dosument.forms["frmContato"]["userName"].classList.add("is-invalid");
        return false;
    }
    if(!isvalidEmail(email)){ 

            document.getElementById("userEmail-info").innerHTML = "Por favor,  digite um e-mail válido "
            document.getElementById("userEmail-info").classList.add ("invalid-feedback");
            document.forms["frmContato"]["userEmail"].classList.add("is-invalid");
            return false;

    }
    if(assunto ===""){
        document.getElementById("usersubject-info").innerHTML= "Por favor, digite um assunto "
        document.getElementById("usersubject-info").classList.add("invalid-feedback");
        document.forms["frmContato"]["subject"].classList.add("is-invalid");
        return false         

    }
    if(message ===""){
        document.getElementById("userMessage-info").innerHTML= "Por favor, digite sua mensagem"
        document.getElementById("userMessage-info").classList.add("invalid-feedback");
        document.forms["frmContato"]["message"].classList.add("is-invalid");
        return false         

    }
    if(message.length < 10){
        document.getElementById("usermessage-info").innerHTML= "Por fvaor, digite uma mensagem minia de 10 caracteres"
        document.getElementById("usermessage-info").classList.add("invalid-feedback");
        document.forms["frmContato"]["message"].classList.add("is-invalid");
        return
    }
    return true;
    function isValidaEmail(email){
        const emailRegex = /\$+@\$+\.\$+/;
        return emailRegex.test(email);
    }



}