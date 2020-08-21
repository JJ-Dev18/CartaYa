export const confirmEmail = async (email) => {

   
    const url = `https://cartaya.graciadev.com/api/login/checkEmail?email=${email}`

    const resp = await fetch(url);

    const {content} = await resp.json();



   return content ;
    

}