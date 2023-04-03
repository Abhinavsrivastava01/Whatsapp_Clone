import { Dialog ,Box,styled} from "@mui/material";
import { useContext } from "react";
import { AccountContext } from "../../context/AccountProvider";
//components
import Menu from "./menu/Menu";

import EmptyChat from "./chat/EmptyChat";
import ChatBox from "./chat/ChatBox";

const Components=styled(Box)`
display:flex;
`;


const LeftComponent=styled(Box)`
min-width:450px;
`;

const RightComponent=styled(Box)`
width:70%;
min-width:300px;
height:100%;
border-left:1px solid rgba(0,0,0,0.20);
`

const dialogstyle = {
     height:'96%',
     width:'100%',
     margin:'20px',
     maxWidth:'100%',
     maxHeight:'100%',
     boxShadow:'none',
     overflow:'hidden',
}

const ChatDialog =()=>{
     const {person}= useContext(AccountContext);
     return (
         <Dialog
       open={true}
       PaperProps={{sx:dialogstyle}}
               hideBackdrop={true}
               maxWidth={'md'}
         >
<Components>
     <LeftComponent>
         <Menu/>
     </LeftComponent>
     <RightComponent>
     {/*<EmptyChat/>*/}
     <ChatBox/>
    {Object.keys(person).length?<ChatBox/>:<EmptyChat/>}
     </RightComponent>
</Components>

         </Dialog>
     )
}
export default ChatDialog;