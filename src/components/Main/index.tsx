import { Container } from "./style";

type Props = {
    children: React.ReactNode; 
  };

export default function Main(props:Props){
    return(
      <Container>{props.children}</Container>
    )
  }