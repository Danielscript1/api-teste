import Main from "components/Main";
import { Outlet } from "react-router-dom";

function PageDefault(){
    return(
    <>
      <Main>
        <Outlet/>
      </Main>
    </>
    )
}

export default PageDefault;