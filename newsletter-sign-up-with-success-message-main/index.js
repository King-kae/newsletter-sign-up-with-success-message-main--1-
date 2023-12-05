const form = document.querySelector('form')
const email = document.getElementById('mail')
const checking = document.getElementById('checking')


const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// email.value.length === 0 ||


email.addEventListener("input", () => {
    const isValid = emailRegExp.test(email.value)
    let inputText = email.value
    // console.log(inputText)
    localStorage.setItem("emailUsed", inputText)
    if (isValid) {
        email.className = "valid"
        checking.textContent = ""
    } else {
        email.className = "invalid"
        checking.style.display = "inline"
    }
})


form.addEventListener('submit', (event) => {
    // event.preventDefault();

    const isValid = emailRegExp.test(email.value)
    if(!isValid || email.value.length === 0) {
        email.className = 'invalid'
        checking.style.display = "inline";
        event.preventDefault();
    }
})

console.log('rest')