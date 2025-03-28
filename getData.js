import url from "./url.js";

async function getData() {
    try {
        const disneyData = await fetch(url);
        if (!disneyData.ok) {
            throw new Error("Lo siento...", disneyData.status)
        }
        const transformData = await disneyData.json();
        return transformData.info.data
    } catch (error) {
        console.log(error.message)
    }
}

export default getData;