//Basic get request without any input params
let basic_get = "https://api.github.com/users/m1chaeldeitch/repos";
fetch(basic_get)
    .then((response) => {
        let translated = response.json();
        console.log(translated);
    });
