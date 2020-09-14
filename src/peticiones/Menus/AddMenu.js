import { DescriptionRounded } from "@material-ui/icons"


export const AddMenu = async (id,title,desc) => {

    const url = `https://cartaya.graciadev.com/api/user/sendCarta?id=0&idNegocio=${id}&title=${title}&description=${desc}`

    const token = localStorage.getItem('token');

    const resp = await fetch(url, {
        headers :{
          'tkn' : token
        },
        method: 'POST'
        
    })

    const data =  await resp.json()

    return data;
}