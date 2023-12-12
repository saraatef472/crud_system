let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let total = document.getElementById('total');
let discount = document.getElementById('discount');
let count = document.getElementById('count');
let category = document.getElementById('category');
let file = document.getElementById('file');
let updatte = document.getElementById('updatte');
let delette = document.getElementById('delette');

let submit = document.getElementById('submit');
let tmp;
// let deletee = document.getElementById('submit2');
mood = 'CREATE';


let prod;
if (localStorage.product != null) {
    // prod = JSON.parse(localStorage.product);
    prod = JSON.parse(localStorage.product);
} else {
    let prod = [];
}
// let prod = [];


function showdata() {

    let table = '';
    for (i = 0; i < prod.length; i++) {
        table += `<tr>
    <td>${i}</td>
    <td>${prod[i].title}</td>
    <td>${prod[i].price}</td>
    <td>${prod[i].taxes}</td>
    <td>${prod[i].discount}</td>
    <td>${prod[i].total}</td>
    <td>${prod[i].category}</td>
    <td>${prod[i].file}</td>

    <td><button onclick="updateitem(${i})" id="update">update</button></td>
    <td><button onclick="deleteitem(${i})" id="delete">delete</button></td>



</tr>`;
        // console.log(table);
    }
    document.getElementById('tbody').innerHTML = table;

};
localStorage.setItem('product', JSON.stringify(prod));
showdata();