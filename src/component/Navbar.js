import { AppBar, Avatar, Box, InputBase, Paper, styled, Toolbar, Typography} from "@mui/material"
import {Search}from '@mui/icons-material';
import myImage from '../Images/instaImage.jpg'

const StyleToolbar = styled(Toolbar)(({theme})=>({
    display:'flex',
    justifyContent:"space-between"
}))

// const SearchWrapper = styled('div')(({theme})=>({
//     padding: "0 10px",
//     borderRadius:theme.shape.borderRadius*2
// }))

const Icons = styled(Box)(({ theme }) => ({
    display:'none',
    gap:'20px',
    alignItems:'center',
    [theme.breakpoints.up('sm')]:{
     display:'flex'
   }
 }));
// const SearchBox  =styled('div')(({theme})=>({
//     width:'40%',
//     height:"4vh",
//     backgroundColor:"#eceff1",
//     borderRadius:theme.shape.borderRadius*2
// }))

const SearchBox = styled('div')(({theme})=>({
    width:"25%",
    position:'relative',
    borderRadius:theme.shape.borderRadius*2,
    backgroundColor:'#cfd8dc',
    '&:hover':{
        backgroundColor:'#eceff1'
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
  },
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

const UserBox = styled(Box)(({ theme }) => ({
  display:'flex',
    gap:'10px',
    alignItems:'center',
    // [theme.breakpoints.up('sm')]:{
    //   display:'none'
    // }
 }));

 const StyledInputBase = styled(InputBase)(({theme})=>({
    paddingRight: theme.spacing(2),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
 }))

 const styles = {
  paperContainer: {
      backgroundImage: `url(${myImage})`
  }
};

const Navbar = () => {

    return(
        <AppBar position='sticky' p={2} sx={{backgroundColor:'#FFFFFF'}}>
            <StyleToolbar>
            <Typography variant="h4" component='div' sx={{color:"#262626", fontSize:'50'}}>
            ℑ𝔫𝔰𝔱𝔞𝔤𝔯𝔞𝔪
            </Typography>

            <SearchBox>
            {/* <Search>  */}
             {/* <SearchIconWrapper>
                <SearchSharp/>
                </SearchIconWrapper>    */}
            <SearchIconWrapper> 
              <Search />   
              </SearchIconWrapper> 
              <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
              {/* </Search> */}
            </SearchBox>
            <UserBox>
            <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" />
            </UserBox>
            </StyleToolbar>
        </AppBar>
    )
}

export default Navbar