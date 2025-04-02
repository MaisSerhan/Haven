function togglePassword(fieldId, button) {
    var input = document.getElementById(fieldId);
    if (input.type === "password") {
        input.type = "text";
        button.innerHTML = '<i class="fa fa-eye-slash" style="color: #ff3f7e;"></i>';
    } else {
        input.type = "password";
        button.innerHTML = '<i class="fa fa-eye" style="color: #ff3f7e;"></i>';
    }
    event.preventDefault();
}