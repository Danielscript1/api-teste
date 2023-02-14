import { Icone, ReasonList,ReasonItem } from "./style";
import { BiEdit } from 'react-icons/bi/index';
import { MdDeleteOutline } from 'react-icons/md/index';
import { ITransaction } from "interfaces/ITransaction";
import http from "../../../http";
import { Link, useNavigate } from "react-router-dom";



function ItemList( props :ITransaction){

  const navigate = useNavigate();
    const excluir = (props:ITransaction) => {
    http.delete(`links/${props.id}/`)
    .then(() => {
     navigate('/')

  })
    
           
}

    return(
        <ReasonList>
        <ReasonItem>
          <h3>{props.title}</h3>
          <span>{props.url}</span>
          <div>
          <Icone><Link to={`/links/${props.id}`}><BiEdit  size={16} /></Link></Icone>
          <Icone onClick={() => excluir(props)}><MdDeleteOutline  size={16}/></Icone>
          </div>
        </ReasonItem>
      </ReasonList> 
    )
}
export default ItemList;