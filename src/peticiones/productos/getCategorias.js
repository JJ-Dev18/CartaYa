

export const getCategorias = async (id) => {

    const url = `https://cartaya.graciadev.com/api/user/getCategoriesBusiness?id=0&idNegocio=${id}`
    const token = localStorage.getItem('token')
    const resp = await fetch(url, {
        headers : {
            'tkn' : token
        },
    
    })
    const {content} = await resp.json()

    return content;

}