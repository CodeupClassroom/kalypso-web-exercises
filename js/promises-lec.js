// const myPromise = fetch('https://api.github.com/users');
// console.log(myPromise);
// myPromise.then((response) => {
//     console.log(response)
// });
// myPromise.catch(error => console.error(error));

const myPromise = fetch('https://api.github.com/users')
    .then(response => console.log(response))
    .catch(error => console.error(error));

const swapiurl = "https://swapi.dev/api/planets/"
const pokeapiurl = "https://pokeapi.co/api/v2/pokemon/"

document.getElementById("button").addEventListener("click",()=>{
    let id = document.getElementById("input").value;
    console.log("fetching: " + pokeapiurl + id);
    let promise = fetch(pokeapiurl+id)
        .then(response=>response.json())
        .then(data=>{
            console.log(data)
            let name = data.name;
            document.getElementById("output").innerText = name;
        })
        .catch(err=>{
            console.log(err)
        })
})

let catFetch = fetch("https://api.thecatapi.com/v1/images/search")
.then(response=>{
    console.log(response);
    return response.json();
})
.then(data=>{
    console.log(data)
    // console.log(data[0].url);
    return data[0].url;
})

let dogFetch = fetch("https://api.thedogapi.com/v1/images/search")
    .then(response=>{
        console.log(response)
        return response.json()
    })
    .then(data=>{
        // console.log(data)
        console.log(data[0].url);
        return data[0].url;
    })

Promise.race([catFetch,dogFetch])
    .then(url => {
        console.log(url);
        let img = document.createElement("img");
        img.setAttribute("width", "300px");
        img.setAttribute("src", url);
        document.getElementById("pic").append(img);
    })