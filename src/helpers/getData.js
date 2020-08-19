


export const getData = async () => {

   
    const url = `https://www.breakingbadapi.com/api/characters?limit=10&offset=8`

    const resp = await fetch(url);

    const data = await resp.json();

    

    console.log(data)
    

}