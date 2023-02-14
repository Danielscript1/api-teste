import { Imagens, SectionHeader } from "./style";


function Header(){
    return(
        <SectionHeader>
            <Imagens src={process.env.PUBLIC_URL + "/img/logo.svg"}/>  
        </SectionHeader>
    )
}
export default Header;