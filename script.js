let inputQuery = document.querySelectorAll("input");

const patterns = {
    username: /^[a-z\d]{5,12}$/i,
    telephone: /^\d{11}$/,
    password: /^[\w@-]{8,12}$/,
    profileSlug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d\.-])+@([a-z\d-])+\.([a-z]{2,8})(\.[a-z]{2,8})?$/
}

//Validate Function
function validate(field, regEx) {
    // console.log(regEx.test(field.value));

    if (regEx.test(field.value)) {
        field.classList.add("valid");
        field.classList.remove("inValid");

    } else {
        field.classList.remove("valid");
        field.classList.add("inValid");

    }
}


// Adding eventListener to Input

inputQuery.forEach((input) => {
    input.addEventListener("keyup", (e) => {
        // console.log(e.target.name);

        validate(e.target, patterns[e.target.name]);
    })
})


