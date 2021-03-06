import AddProduct from './InfoProduct';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Modal,Typography,IconButton} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import Avatars from "./Amzone"
function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: "80%",
    maxWidth:"400px",
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function InfoProduct({open,setOpen}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
              <span onClick={handleClose} style={{float:"right",cursor:"pointer",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"red",width:"25px",height:"25px",color:"#fff",borderRadius:"50%"}}>X</span>
        <h1 style={{textAlign:"center"}}>Infos area about Product</h1>      
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
         Numquam distinctio ab, possimus, enim error quod quidem 
         delectus, magnam ratione tenetur autem excepturi consectetur 
         amet quisquam nesciunt officiis cum sequi praesentium.
      </p>
      <b/>
      <Typography align="center" style={{margin:"20px 5px"}}>
        <strong>Get it! Best price & quality</strong>
        </Typography>
        <Avatars/>
    </div>
  );

  return (
    <div>
         <IconButton                 
         style={{padding:8,color:"#f91"}}
>
       <InfoIcon type="button" onClick={handleOpen}/>
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}

      >
        {body}
      </Modal>
    </div>
  );
}