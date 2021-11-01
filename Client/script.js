function send() {
    let name = document.querySelector('#name').value
    let password = document.getElementById('password').value
    console.log(`Name: ${name}; Password: ${password}`)

    // Jednoduchá validace, že jméno má 0 znaků
    if (name.length === 0)
        alert('Jméno není vyplněno')

    // Jednoduchá validace, že heslo musí mít více, než 7 znaků
    else if (password.length <= 7)
        alert('Heslo musí mít více, než 7 znaků')
    else if (!validatePassword(password))
        alert('Heslo není validní bla bla')
    else
        myService()
}

// složitější validace pomocí regexu
function validatePassword(pw) {
    return /[A-Z]/.test(pw) && // Alespoň jeden znak velký
        /[a-z]/.test(pw) && // alespoň jeden znak malý
        /[0-9]/.test(pw) && // alespoň jedno číslo
        /[^A-Za-z0-9]/.test(pw) && // alespoň jeden speciální znak
        pw.length > 7 // musí být větší, než 7 znaků
}

function myService() {


    fetch('http://127.0.0.1:8080')
        .then(response => response.json())
        .then(result => {
            console.log(result);
            document.getElementById('result').value = result['Time'];
        })
        .catch(error => console.log('error', error));
}