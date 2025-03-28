import getData from "./getData.js";

async function showData() {
    const api = await getData();
    const div = document.getElementById("container");
    api.forEach(a => {
        const pe = document.createElement("p");
        const img = document.createElement("img");
        
        pe.innerHTML = a.name;
        img.setAttribute("src", a.imageUrl);
    });
}

export default showData;