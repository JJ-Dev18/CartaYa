


export const getUser = async (user,password) => {

    const url = `http://montesanto.graciadev.com/api/login/login?user=${user}&pass=${password}`;

    const resp = await fetch(url);

    const {content} = await resp.json();

    
    return content ;

}