
import { useContext,useState } from "react";

import { AccountContext } from "../../../context/AccountProvider";

import { Box ,styled} from "@mui/material";

import{Chat as MessegeIcon} from '@mui/icons-material'
import InfoDrawer from "../../drawer/InfoDrawer";

//components
import HeaderMenu from "./HeaderMenu"
const Component=styled(Box)`
height:48px;
background:#ededed;
padding:8px 15px;
display:flex;
align-items:center;
`;
const Wrapper=styled(Box)`
margin-left:auto;
&>={
     margin-left:2px;
     padding:8px;
};
&:first-child{
     font-size:22px;
     margin-right:8px;
     margin-top:3px;
}
`
const Image=styled('img')({
height:50,
width:50,
borderRadius:'50%',
}
)
const Header=()=>{
     const [openDrawer, setOpenDrawer] = useState(false);
     const {account}=useContext(AccountContext);
     const toggleDrawer = () => {
          setOpenDrawer(true);
      }
     return (
<>
          <Component>
               <Image src={account.picture}alt="dp"onClick={() => toggleDrawer()}/>
<Wrapper>
<MessegeIcon/>
<HeaderMenu setOpenDrawer={setOpenDrawer}/>
</Wrapper>


          </Component>
          <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
          </> 
     )
}
export default Header;

