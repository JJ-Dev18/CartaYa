
//Plantilla de get a la api 

export const getData = async () => {

   
    const url = `https://cartaya.graciadev.com/api/admin/getUsers`

    const resp = await fetch(url,{
        headers: {
            'tkn': 'd19b46edbc2f6ae3a947298009b1dcca2207b7c1'
        },
    });

    const data = await resp.json();

    const header = localStorage.getItem('token')

    console.log(data,header)
    

}