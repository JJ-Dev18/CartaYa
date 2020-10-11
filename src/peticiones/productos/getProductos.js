
export const getProductos = async (id,idCategoria) => {

    const url = `https://cartaya.graciadev.com/api/user/getProductsBusiness?idNegocio=${id}&id=0&idCategory=0`
    const token = localStorage.getItem('token')

    const resp = await fetch (url, {
        headers: {
            'tkn' : token
        }
    })
    const {content} = await resp.json()

    return content ;


}