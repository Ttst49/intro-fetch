fetch("https://api.chucknorris.io/jokes/random/")
        .then(response => response.json())
        .then(response => console.log(response))


