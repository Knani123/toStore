import AddProduct from './InfoProduct';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Modal,Typography,TextField,Divider,Button} from '@material-ui/core';

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

export default function ({cardAction}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div>
  
    <form style={modalStyle} className={classes.paper}>  
      <span onClick={handleClose} style={{display:"flex",float:"right",cursor:"pointer",justifyContent:"center",alignItems:"center",backgroundColor:"red",width:"25px",height:"25px",color:"#fff",borderRadius:"50%"}}>
       X
      </span>
      <Typography variant="h4" align="center">Add Product</Typography>

      <TextField type="text" label="Nom Product"/>
      <TextField type="text"label="URL"/>
      <TextField type="text"label="Prix"/>
      <Divider/>
        <Button size="small" color="primary" variant="contained">
            Add
        </Button>
     
    </form>

    </div>
  );

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        Add Product
      </button>
      <Modal
        open={open}
        onClose={handleClose}

      >
        {body}
      </Modal>
    </div>
  );
}