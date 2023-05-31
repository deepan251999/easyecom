            // Toggle password

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {

    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    this.classList.toggle("icofont-eye");
});

        // RESPONSE
$('#button').click(function() {
    var val1 =$('#email').val();
    var val2 =$('#password').val();
    $.ajax({
        type: 'POST',
        url: 'https://api.easyecom.io/getApiToken',
        data: { email: val1, password: val2 },
        success: function(response) {
            console.log(JSON.parse(response));
           let code = JSON.parse(response).code;
            if(code == 400){
              let message =  JSON.parse(response).message;
              let result =document.getElementById('result');
                result.innerHTML=`*${message}`;
                result.style.color='red';
            }else{
                let result =document.getElementById('result');
                result.innerHTML=``;   
            }
            console.log(code);
        }
        
    });
});

