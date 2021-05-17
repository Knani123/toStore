import React from 'react'
import {Paper,makeStyles,Button, Grid} from '@material-ui/core';
import { auth } from '../firebase/config';
import Head from './Head'
import Footer from './Footer'
import AllProducts from './allproducts/AllProducts'
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyle=makeStyles(
    theme=>(
        {
            root:{
                minHeight:"120vh",
            }
        }
        ))
const Home = ({user}) => {
    const classes=useStyle()
    const logout=()=>{
        auth.signOut()
    }
    console.log("user",user.email)
    return (
        <div >
            <div container className={classes.root} direction="column">
                <Head/>
                <AllProducts/>
            </div>
            <Footer/>
            <CssBaseline/>
        </div>
    )
}

export default Home
