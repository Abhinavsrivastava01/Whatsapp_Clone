//import { useEffect } from 'react';
import { Box, InputBase,styled } from "@mui/material";
//import {EmojiPeopleIcon} from '@mui/icons-material';
//import AttachFileIcon from '@mui/icons-material';
import MicIcon from '@mui/icons-material/Mic';
//import { Input } from "@mui/icons-material";

const Container = styled(Box)`
    height: 55px;
    background: #ededed;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 0 15px;
    &  > * {
        margin: 5px;
        color: #919191;
    }
`;
const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    padding-left: 25px;
    font-size: bold 14px;
    height: 20px;
    width: 100%;
`;
const Search = styled(Box)`
    border-radius: 8px;
   
    width: calc(94% - 100px);
`;
const Footer=({sendText,setValue,value})=>{
    
     return (
<Container>
    <Search>
    <InputField
    placeholder='type messages'
    onChange={(e) => setValue(e.target.value)}
    onKeyPress={(e) => sendText(e)}
    value={value}
    />
    </Search>
<MicIcon/>
    
</Container>
     )
}
export default Footer;