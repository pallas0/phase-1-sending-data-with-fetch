
function submitData(name, email) {
    const userData = {
        "name": name,
        "email": email
    }

    const configurationObject = {
       method: "POST",
        headers: {
            "Content-type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(userData)
    }

    return fetch("http://localhost:3000/users", configurationObject)
    .then(resp => resp.json())
    .then(function(object) {
        const bodyText = document.querySelector('body')
        const newId = document.createElement('p')
        newId.textContent = object.id
        bodyText.appendChild(newId)

    })
    .catch(function(error) {
        const newError = document.createElement('p')
        newError.textContent = error.message
        const bodyText = document.querySelector('body')
        bodyText.appendChild(newError)
    })
}
