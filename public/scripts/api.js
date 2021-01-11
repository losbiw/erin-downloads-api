async function fetchAPI(){
    const res = await fetch('/api/downloads');
    const json = await res.json();

    return json
}

async function insertData(){
    const OSdata = await fetchAPI();

    if(OSdata.length){
        const totalEl = document.getElementById('total');
        let total = 0;

        OSdata.forEach(os => {
            const { name, downloads, detailed } = os;
            total += downloads;
    
            const osEl = document.createElement('p');
            osEl.textContent = `${ name }: ${ downloads }; ${ JSON.stringify(detailed) }`;
    
            document.body.appendChild(osEl);
        });
    
        totalEl.textContent += total
    }
}

insertData();