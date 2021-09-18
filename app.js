/* https://catfact.ninja/breeds?limit=1 */
const catBox = document.querySelector('.cat-box');
const getBreeds = (data) => {
console.log(data)
data.forEach(element => {
    catBox.innerHTML += `
    <ul>
    <li>Irk : <span>${element.breed}</span></li>
    <li>Ülke : <span>${element.country}</span></li>
    <li>Cins : <span>${element.origin}</span></li>
    <li>Boy : <span>${element.coat}</span></li>
    <li>Desen : <span>${element.pattern}</span></li>
</ul>
    `;
});
}

fetch("https://catfact.ninja/breeds?limit=1")
.then((response) => {
    return response.json();
})
.then(data => {
    getBreeds(data.data);
})

