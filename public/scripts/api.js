async function fetchAPI(){
    const res = await fetch('/api/downloads');
    const json = await res.json();

    console.log(json);
}

fetchAPI();