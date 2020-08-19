


export const getUser = async (user,password) => {

    // const url = `https://cartaya.graciadev.com/api/login/login=${user}&pass=${password}`;
    const url = ` https://cartaya.graciadev.com/api/login/login?user=${user}&pass=${password}`

    const resp = await fetch(url);

    const {content} = await resp.json();

    
    return content ;

}