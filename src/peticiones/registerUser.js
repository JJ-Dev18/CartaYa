

export const registerUser = async (email,password,name) => {

   
    const url = `https://cartaya.graciadev.com/api/login/register?email=${email}&password=${password}&name=${name}`

    const resp = await fetch(url);

    const data = await resp.json();



    
    return data ;

}