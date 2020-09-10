

export const getInfoUser = async () => {

    const token = localStorage.getItem('token')

    const url = 'https://cartaya.graciadev.com/api/user/infoUser'

    const resp = await fetch(url,{
        headers: {
            'tkn': token
        },
    });
    const data = await resp.json();
    const info = data.content[0]
    return info 

}