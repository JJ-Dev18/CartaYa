
//Funcoion que trae los datos de todos los usuarios registrados 
export const getUsers = async (token) => {

    // const url = `https://cartaya.graciadev.com/api/login/login=${user}&pass=${password}`;
     
    const url = `https://cartaya.graciadev.com/api/admin/getUsers`

    const resp = await fetch(url,{
        headers: {
            'tkn': 'd19b46edbc2f6ae3a947298009b1dcca2207b7c1'
        },
    });

    const {content} = await resp.json();
   
    
    return content;
}