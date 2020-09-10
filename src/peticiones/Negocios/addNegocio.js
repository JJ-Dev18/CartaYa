

export const addNegocio = async (nombre,facebook,instagram,desc) => {

    const url = `https://cartaya.graciadev.com/api/user/sendBusiness?id=0&title=${nombre}&facebook=${facebook}&instagram=${instagram}&lat=666&lng=666&description=${desc}`
    const token = localStorage.getItem('token')
    const resp = await fetch(url,{
        headers: {
            'tkn': token
        },
        method: 'POST'
    })
    const data = await  resp.json();
    const {content} = data;

    return content;
}