import axios from "axios";
import { IPaginacao } from "interfaces/IPaginacao";
import { ITransaction } from "interfaces/ITransaction";
import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { Aside, Title } from "./style";

function List(){
    
  const [link,setLink] = useState<ITransaction[]>([]);

  useEffect(() => {
    axios.get<IPaginacao<ITransaction>>('https://teste3.herokuapp.com/links/')
      .then(resposta => {
        setLink(resposta.data.content)
      })
      .catch(erro => {
        console.log(erro)
      })},[link])

  
    return(
        <Aside>
        <Title>Links Cadastrados</Title>
        {link.length === 0 && <p>nenhum link cadastrado</p>}
        {link?.map((links) => (
          <ItemList key={links.id} {...links} />
        ))}
      </Aside>
    )

}
export default List;