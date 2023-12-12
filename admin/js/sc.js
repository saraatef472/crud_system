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
//get total
function gettotal() {
    if (price.value != "") {
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.backgroundColor = "blue";
    } else {
        total.innerHTML = "";
        total.style.backgroundColor = "rgb(165, 14, 3)";
    }
}

//create
let prod;
if (localStorage.product != null) {
    // prod = JSON.parse(localStorage.product);
    prod = JSON.parse(localStorage.product);
} else {
    let prod = [];
}
// let prod = [];

submit.onclick = function() {
    gettotal();
    let newprod = {
        // title: title.value,
        price: price.value,
        title: title.value,
        ads: ads.value,
        taxes: taxes.value,
        discount: discount.value,
        total: total.innerHTML,
        count: count.value,
        file: file.value,
        category: category.value,
    };
    if (mood === 'CREATE') {
        if (newprod.count > 1) {
            for (let i = 0; i < newprod.count; i++) {
                prod.push(newprod);
            }

        } else {
            prod.push(newprod);
        }
    } else {
        prod[tmp] = newprod;
        mood = 'CREATE';
        console.log(mood);
        submit.innerHTML = 'CREATE';
        count.style.display = 'block';
    }



    localStorage.setItem('product', JSON.stringify(prod));
    cleardata();
    showdata();

}




//clear inputs after creation without reloading
function cleardata() {
    price.value = '';
    title.value = '';
    ads.value = '';
    taxes.value = '';
    discount.value = '';
    total.innerHTML = '';
    count.value = '';
    file.value = '';
    category.value = '';
}

//read
function showdata() {
    gettotal();
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
    let btndelete = document.getElementById('deleteall');
    if (prod.length > 0) {
        btndelete.innerHTML = `
<button onclick="deleteall();">DELETE ALL(${prod.length})</button>
`
    } else {
        btndelete.innerHTML = '';
    }
};
showdata();

//delete item
function deleteitem(i) {
    prod.splice(i, 1);
    localStorage.product = JSON.stringify(prod);
    //to refresh data on delete
    showdata();
}

//delete all items
function deleteall() {
    localStorage.clear();
    prod.splice(0);
    showdata();
}

//update
function updateitem(i) {
    title.value = prod[i].title;
    price.value = prod[i].price;
    ads.value = prod[i].ads;
    discount.value = prod[i].discount;
    count.style.display = 'none';
    category.value = prod[i].category;
    taxes.value = prod[i].taxes;
    gettotal();
    submit.innerHTML = "UPDATE";
    mood = 'update';
    tmp = i;
    scroll({
        top: 0,
        behavior: 'smooth'
    })
}

//search
let searchMood = 'title';

let search = document.getElementById('search');

function searchh(id) {

    if (id == 'searchtitle') {
        searchMood = 'title';
        search.placeholder = "search by title";
    } else {
        searchMood = 'category';
        search.placeholder = "search by category";

    }
    search.focus();
    console.log(searchMood);
}


function searchdataa() {
    let vall = document.getElementById('search').value;
    for (let i = 0; i < prod.length; i++) {
        if (prod[i].title.includes(vall)) {
            console.log(i);
        } else {
            console.log("ERROR");
        }
    }
    // if (searchMood == 'title') {


    // } else {

    // }
    // console.log(searchMood);
    console.log(vall);

}