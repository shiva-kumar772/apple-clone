import SearchIcon from '@mui/icons-material/Search';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import { appleLogo, navData } from '../constants/constant';
import { Box, Typography, styled} from '@mui/material';
const Component =styled(Box)({
    backgroundColor:'#f5f5f7',
    height:44
})
const NavBar =styled(Box)({
display: 'flex',
width:'100%',   
height:'100%',
justifyContent: 'center',
alignItems: 'center',
margin:'0 auto',
'& > * ' :{
    color:'rgba(0,0,0,.8)',
    fontWeight:'600',
    opacity: .9,
    padding: '15px',
    fontSize : 15
}
})

const Header = () => {
    return(
       <Component>
        <NavBar>
            <img src={appleLogo} alt="logo" style={{width:15}}/>
            {
                navData.map(nav =>(
                    <Typography>{nav}</Typography>
                ))
            }
            <SearchIcon fontSize='small'/>
            <WorkOutlineIcon fontSize='small'/>
        </NavBar>
       </Component>
    )
}
export default Header;