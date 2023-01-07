import { TheaterComedySharp } from "@mui/icons-material";
import { Button, styled, TextField } from "@mui/material";
import { Box } from "@mui/system"
import { calculateNewValue } from "@testing-library/user-event/dist/utils";

const StyledButton  = styled(Button)(({theme})=>({
    paddingTop:'5px'
}))

const Feed =()=>{
    return(
        <Box p={2} flex={4  }>
           <Box sx={{position:"relative", margin:"24px"}}>
           <TextField id="standard-basic"  variant="standard" sx={{marginRight:"4px"}} />
           <StyledButton variant="contained">Select</StyledButton>
           </Box> 
           <Box sx={{position:"relative", margin:"24px"}}>
           <TextField id="standard-basic"  variant="standard" sx={{marginRight:"4px"}} />
           <StyledButton variant="contained">Select</StyledButton>
           </Box> 
           <Box sx={{position:"relative", margin:"24px"  }}>
           <TextField id="standard-basic"  variant="standard" sx={{marginRight:"4px"}} />
           <StyledButton variant="contained">Select</StyledButton>
           </Box> 
        </Box>
    )
}

export default Feed;