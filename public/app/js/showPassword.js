document.getElementById('showPassowrdInput').onclick = function() {

    if ( this.checked ) {
    
    document.getElementById('passowrdInput').type = "text";
    document.getElementById('confirmPasswordInput').type = "text";
    
    } else {
    
    document.getElementById('passowrdInput').type = "password";
    document.getElementById('confirmPasswordInput').type = "password";
    
    }
    };