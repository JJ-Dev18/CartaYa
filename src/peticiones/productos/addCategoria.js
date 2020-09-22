

export const addCategoria = async (id,nombre,desc) => {

     const url = `https://cartaya.graciadev.com/api/user/sendCategory?id=0&idNegocio=${id}&title=${nombre}&description=${desc}`
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