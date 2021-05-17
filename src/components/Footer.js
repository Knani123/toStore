import React from 'react'
import {Paper,makeStyles,Button,IconButton,Typography,Divider} from '@material-ui/core';
import {Grid} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const useStyle=makeStyles(theme=>({footer:{
    margin:0,
    backgroundColor:"#fa0",
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
    height:"150px",
    width:"100%",
    boxSizing:"border-box",
    padding:5
},
made:{
    display:"flex",
    justifyContent:"space-around",
    alignItems:"center",
},
heart:{
    color:"red"
}
}))
const Footer = () => {
    const classes=useStyle()
    return (
        <div contanier className={classes.footer} >
            <Typography  >
                Made with <span className={classes.heart} > ❤️ </span> by toStore's developers
            </Typography>
            <div >
            <Typography >
                Conatact us 
            </Typography>
            <Divider/>
                <IconButton><FacebookIcon/></IconButton> 
                <IconButton><InstagramIcon/></IconButton> 
                <IconButton> <WhatsAppIcon/></IconButton> 
                <IconButton> <LinkedInIcon/></IconButton> 
            </div>
        </div>
    )
}

export default Footer
