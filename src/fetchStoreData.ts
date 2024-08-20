// fetch store data from fakeApi
interface RatingtTypes {                             //object
    rate: number;
    count: number
}

interface FetchDataTypes {                           //object
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: RatingtTypes         //rating is an object (inheritance)

}

async function fetchStoreData() {
    const response = await fetch("https://fakestoreapi.com/products");
    const data: FetchDataTypes[] = await response.json();                 //data is array of objects
    const filteredData = data.map(item => {
            return (`Id -  ${item.id} ---- Title - ${item.title}---  Price - ${item.price} --- Count - ${item.rating.count}<br/>`)
    }).join("");                             //join("") used to remove commas
    const para2 = document.getElementById("para2");
    if (para2 != null) {
        para2.innerHTML = filteredData.toString();
    }

}