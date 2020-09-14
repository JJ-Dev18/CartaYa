

export const getMenus = async (id) => {

     const url = `https://cartaya.graciadev.com/api/user/getCartasNegocio?id=0&idNegocio=${id}`
     const token = localStorage.getItem('token')

     const resp = await fetch(url , {
         headers: {
             'tkn' : token
         }
     })

     const data = await resp.json();
     const {content} = data;

     return content;
}