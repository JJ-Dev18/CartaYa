
export const addProducto = async (id,nombre,desc,precioNeto,precio,tipo,categoria) => {

    const url = `https://cartaya.graciadev.com/api/user/sendProductBusiness?id=0&idNegocio=${id}&title=${nombre}&description=${desc}&priceBuy=${precioNeto}&priceSell=${precio}&type=${tipo}&idCategory=${categoria}`
    const token = localStorage.getItem('token')
    const resp = await fetch(url, {
        headers : {
            'tkn' : token
        },
        method: 'POST'
    })
    const {content} = await resp.json()

    return content;

}