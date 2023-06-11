
import { Box,Typography,styled } from "@mui/material";
import { Search } from "@mui/icons-material";
//import { defaultProfilePicture } from "../../../constants/data";
const Header = styled(Box)`
    height: 44px;
    background: lightgray;
    display: flex;
    padding: 8px 16px;
    align-items: center;
`;
const Status = styled(Typography)`
    font-size: 12px !important;
    color: rgb(0, 0, 0, 0);
    margin-left: 12px !important;
`;
const RightContainer = styled(Box)`
    margin-left: auto;
    & > svg {
        padding: 8px;
        font-size: 22px;
        color: #000;
    }
`;
const Image = styled('img')({
     width: 40,
     height: 40,
     objectFit: 'cover',
     borderRadius: '50%'
 })
 const Name = styled(Typography)`
    margin-left: 12px !important;
`;

const ChatHeader=({person})=>{
     return (
         <Header>
          <Image src={person.picture}alt="dp"/>
     <Box>
    <Name>{person.name}</Name>
<Typography>online </Typography>
    {/* //<Status>online</Status> */}
         </Box>
         <RightContainer>
          <Search/>
          
         </RightContainer>
         </Header>
     )
}
export default ChatHeader;