import { Grid,makeStyles ,Button,CircularProgress} from '@material-ui/core';
import React,{useState} from 'react'
import Card from './Card';
import IconButton from '@material-ui/core/IconButton';
import {useAuth} from "../../auth/useAuth"
import {auth} from "../../firebase/config"
import CssBaseline from '@material-ui/core/CssBaseline';
import AddProduct from '../AddProduct';
import AddIcon from '@material-ui/icons/Add';const useStyle=makeStyles(
    theme=>(
        {
            root:{
                overflow:"hidden",
                width:"100%",
                boxSizing:"border-box"
            },
            card:{
                overflowX: "hidden",
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                justifyItems:"center",
                width:180,
                height:180,
                borderRadius:"50%",
                margin:5,
                border:"1px solid blue",
                [theme.breakpoints.down('sm')]: {
                  maxWidth:250,
                },
                [theme.breakpoints.down('xs')]: {
                  maxWidth:160,
                }
              },
              add:{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                justifyItems:"center"
              }
        }
    )
)
const AllCard = () => {
    const {user}=useAuth()
    console.log("user",user)
    const classes=useStyle()
    const [tab, setTab] = useState([1,2,3,4,5]);
   
    return (
        <Grid container align="center" spacing={1} classNme={classes.root}>
            {
                user&&
            <Grid  item md={3} sm={4} xs={6} className={classes.add}>
                <div className={classes.card}>
                <AddProduct />
                </div>
               
            </Grid>
            }
            {tab.map(card=>
            <Grid item md={3} sm={4} xs={6}>
                <Card/>
            </Grid>
            )}
        <CssBaseline/>

        </Grid>
    )
}

export default AllCard
