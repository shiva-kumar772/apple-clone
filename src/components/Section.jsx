import { Box, Typography, styled} from "@mui/material";
const Component = styled (Box)({
    width: '100%',
    height: 477,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop:'47',
    objectFit: 'cover',
    backgroundRepeat: 'no-repeat',
})
const Heading= styled(Typography)({
    padding:'10px 0 0 0',
    fontWeight:600,
    fontSize: 45,
    
})
const SubHeading= styled(Typography)({
    fontSize: 28,
    padding:'0 0 5px 0',
    
})

const linkStyle= {color : '#2997ff', padding: '0 30px', fontSize: 18}

const Section = ({Data}) => {
    return(
      <Component style={{background:`url(${Data.imageURL}) 50% 50% no-repeat`}}>
        <Heading style={{color:Data.headColor}}>{Data.heading}</Heading>
        <SubHeading style={{color:Data.subHeadColor}}>{Data.subHeading}</SubHeading>
            <Typography>
                <Typography component='span' style={linkStyle}>Learn more &gt;</Typography>
                <Typography component='span' style={linkStyle}>Buy &gt;</Typography>
            </Typography>
      </Component>
    )
}

export default Section;