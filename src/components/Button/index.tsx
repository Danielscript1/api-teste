import { IButton } from "interfaces/IButton";
import { ButtonRegister } from "./style";

function Button ({children}:IButton){
    return(
        <ButtonRegister>{children}</ButtonRegister>
    )
    }
export default Button;