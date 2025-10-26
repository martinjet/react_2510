export async function apiGet(endpoint) {
    const response = await fetch(`https://swapi.py4e.com/api/${endpoint}`);
    const data = await response.json();
    return data;
}
