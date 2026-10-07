import { Box, Typography, styled } from "@mui/material";

const Component =styled(Box)({
backgroundColor: '#fff',
display: 'flex',
justifyContent:'center',
'& > p':{
    fontSize: 14,
    padding: '12px',
    color:'#1d1d1f'
    
}

})

const Info = () => {
  return (
    <Component>
        <Typography>
        Get up to 24 months No Cost EMI on all iPhone models from most leading banks.*<spam style={{color:'#2997ff'}}>Shop now &gt;</spam>
        </Typography>
        
    </Component>
  )
}

export default Info;