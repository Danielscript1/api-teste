import Button from "components/Button";
import http from "../../http";
import { useEffect, useState } from "react";
import { FormRegister, Input } from "./style";
import {   useNavigate, useParams  } from "react-router-dom";
import { ITransaction } from "interfaces/ITransaction";

function Form(){
    const navigate = useNavigate();
    const parametros = useParams()

    useEffect(() => {
        if (parametros.id) {
            http.get<ITransaction>(`links/${parametros.id}/`)
                .then(resposta => [seTitle( resposta.data.title ),setUrl( resposta.data.url )])
        }
    }, [parametros])

    const [title, seTitle] = useState<ITransaction[] |any >([])
    const [url, setUrl] = useState<ITransaction[] | any>([])
    

    const aoSubmeterForm = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        const form:FormData  = new FormData();
        form.append('title', title)
        form.append('url', url)
       
        if (parametros.id) {
            http.put(`links/${parametros.id}/`, {
                title:title,
                url:url
            })
                .then(() => {
                    seTitle(''),
                    setUrl(''),
                    navigate('/')
                })
            }else{
 
        http.request({
            url: 'links/',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data:form,
            
        }).then(() => {
                seTitle('')
                setUrl('')
            })
            .catch((erro) => console.log(erro))
        }
    }
     

    return(
        <>
        <FormRegister onSubmit={aoSubmeterForm}>
            <div>
            <label htmlFor="title">Titulo</label>
            <Input 
            type="text"
            value={title}
            onChange={evento => seTitle(evento.target.value)}
            name="title"
            id="title"
            placeholder="adicione o titulo"
            required
            />
            </div>
            <div>
            <label htmlFor="url">Link</label>
            <Input 
            type="text"
            value={url}
            onChange={evento => setUrl(evento.target.value)}
            name="url"
            id="url"
            placeholder="adicione a url"
            required
            />
            </div>
            <Button type="submit">Adicionar</Button>      
        </FormRegister>
        </>
       
    )
}
export default Form;