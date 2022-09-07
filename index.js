const imageCard1 = document.getElementById("love")
const shadowList = document.getElementById("shadow-prods")
const imageDescription = document.getElementById("description")


document.addEventListener("DOMContentLoaded", onLoad);

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '7014a10185mshe72a11a75e4d60ep1392f6jsn111ccb66e601',
		'X-RapidAPI-Host': 'sephora.p.rapidapi.com'
	}
};

function onLoad(){


fetch('https://sephora.p.rapidapi.com/products/list?categoryId=cat150006&pageSize=60&currentPage=1', options)
	.then(response => response.json())
	.then(response =>fetchImageData(response.products))
	.catch(err => console.error(err));


}

function fetchImageData(shadowArr) {
console.log(shadowArr);
for (let i = 45; i < shadowArr.length; i++) {
	const element = shadowArr[i];
	shadowList.innerHTML += `
	<li class = "my-products-list">${element.brandName}</li>
	`
}

let firstImage = shadowArr[25].image450;
imageCard1.src = firstImage
imageDescription.innerHTML = `
<p><b>${shadowArr[45].brandName}</b></p>
<p>Cost: <b>${shadowArr[45].currentSku.listPrice}</b></p>
<p>Reviews: <b>${shadowArr[45].reviews}</b></p>
<p>Ratings: <b>${shadowArr[45].rating}</b></p>
`
// adding event listeners on click of list
let myList = document.getElementsByClassName("my-products-list");
Array.from(myList).forEach(elem =>{
	elem.addEventListener("click",handleClick)
})

function handleClick(e) {
	let myTarget = e.target.textContent;
	let newObj = shadowArr.find(elem => {
		return elem.brandName == myTarget
	})
	imageCard1.src = newObj.image450
	imageDescription.innerHTML = `
	<p><b>${newObj.brandName}</b></p>
	<p>Cost: <b>${newObj.currentSku.listPrice}</b></p>
	<p>Reviews: <b>${newObj.reviews}</b></p>
	<p>Ratings: <b>${newObj.rating}</b></p>
	`
	}
}
function displayData(data) {
// console.log(data);
}

