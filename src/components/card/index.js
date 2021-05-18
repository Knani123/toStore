import { Grid,makeStyles ,Button,CircularProgress} from '@material-ui/core';
import React,{useState} from 'react'
import Card from './Card';
import IconButton from '@material-ui/core/IconButton';
import {useAuth} from "../../auth/useAuth"
import {auth} from "../../firebase/config"

import AddIcon from '@material-ui/icons/Add';const useStyle=makeStyles(
    theme=>(
        {
            card:{
                display:"flex",
                flexDirection:"column",
                justifyContent:"center",
                justifyItems:"center",
                width:180,
                height:180,
                borderRadius:"50%",
                margin:15,
                border:"1px solid blue",
                [theme.breakpoints.down('sm')]: {
                  maxWidth:250,
                },
                [theme.breakpoints.down('xs')]: {
                  maxWidth:180,
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
    const [tab, setTab] = useState([1]);
   
    return (
        <Grid container align="center" spacing={2}>
            {
                user&&
                <Grid  item md={3} sm={4} xs={6} className={classes.add}>
                <Grid className={classes.card}>
                <IconButton
                style={{width:180,height:180}}
                 onClick={()=>{
                    setTab(['1',...tab])
                    console.log(tab)
                
                }}>
                    <AddIcon
                        style={{width:180,height:180}}
                    />
                </IconButton>
                </Grid>
               
            </Grid>
            }
            {tab.map(card=>
            <Grid item md={3} sm={4} xs={6}>
                <Card/>
            </Grid>
            )}
        </Grid>
    )
}

export default AllCard
