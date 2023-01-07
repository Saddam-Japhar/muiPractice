import  Sidebar from './component/Sidebar'
import  Righbar from './component/Rightbar'
import Feed from './component/Feed';
import Navbar from "./component/Navbar"
import { Box, Divider, Stack } from '@mui/material';
function App() {
  return (
    <Box>
      <Navbar/>
   <Stack direction='row' divider={<Divider orientation="vertical" flexItem />} spacing={2} justifyContent='space-between'>
    <Sidebar/>
    <Feed/>
    <Righbar/>

   </Stack>
   </Box> 
  );
}

export default App;
