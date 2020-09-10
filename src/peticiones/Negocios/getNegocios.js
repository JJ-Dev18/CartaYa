

export const getNegocios = async () => {

    const url = 'https://cartaya.graciadev.com/api/user/getBusinessUser?id=0'
    const token = localStorage.getItem('token');

    const resp = await fetch(url,{
        headers:{
            'tkn' : token
        }
    })
    const data = await resp.json();

    const {content} = data;

    return content;
}