import React,{useState} from 'react'
import {Chip,makeStyles} from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import DoneIcon from '@material-ui/icons/Done';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import LoyaltyIcon from '@material-ui/icons/Loyalty';
import PhonelinkIcon from '@material-ui/icons/Phonelink';
import FastfoodIcon from '@material-ui/icons/Fastfood';
// import styles from "./all.module.css";
import EcoIcon from '@material-ui/icons/Eco';
import AccessibilityIcon from '@material-ui/icons/Accessibility';


const useStyle=makeStyles(theme=>({
    filter:{
        display:"flex",
        margin:"10px auto",
        width: "99%",
        overflowX: "auto",
        justifyContent: "space-between",
        [theme.breakpoints.up('sm')]: {
            flexWrap:"wrap",
            justifyContent:"center"
          },   
         },
    chip:{
        margin:"5px"
    },
    dri:{
        zIndex:-1
    }
}))
const AllProducts = () => {
    const classes=useStyle()
    const [click, setClick] = useState("All");
    const defaultIt=(name)=>{
        if(name===click)
        return "default"
        return "outlined"
    }

    return (
        <div className={classes.filter}>
            <Chip
                className={classes.chip} 
                onClick={()=>setClick('All')}
                icon={<AllInclusiveIcon />}
                label="All Products"
                name="All"
                clickable
                color="primary"
                variant={defaultIt("All")}
            />
            <Chip
                className={classes.chip} 
                onClick={()=>setClick('Immovable')}
                icon={<HomeWorkIcon />}
                label="Immovable and apartment"
                name="Immovable"
                clickable
                color="primary"
                variant={defaultIt("Immovable")}

            />
            <Chip
                className={classes.chip} 
                onClick={()=>setClick('Vehicle')}
                icon={<DriveEtaIcon/>}
                label="Vehicle "
                name="Vehicle"
                clickable
                color="primary"
                variant={defaultIt("Vehicle")}

            />
            <Chip
                className={classes.chip} 
                onClick={()=>setClick('Home')}
                icon={<EcoIcon />}
                label="Home and garden"
                name="Home"
                clickable
                color="primary"
                variant={defaultIt("Home")}

            />
            <Chip
                className={classes.chip} 
                onClick={()=>setClick('Leisure')}
                icon={<LoyaltyIcon />}
                label="Leisure and Entertainment (sport, travel, Art ...) "
                name="Leisure"
                clickable
                color="primary"
                variant={defaultIt("Leisure")}
                
            />
            <Chip
                className={classes.chip} 
                onClick={()=>setClick('IT')}
                icon={<PhonelinkIcon />}
                label="IT and Multimedia "
                name="IT"
                clickable
                color="primary"
                variant={defaultIt("IT")}

            />
            <Chip
                className={classes.chip} 
                onClick={()=>setClick('Clothing')}
                icon={<AccessibilityIcon />}
                label="Clothing and Well-Being"
                name="Clothing"
                clickable
                color="primary"
                variant={defaultIt("Clothing")}
            />
            <Chip
                className={classes.chip} 
                onClick={()=>setClick('Food')}
                icon={<FastfoodIcon />}
                label="Food and nutrition"
                name="Food"
                clickable
                color="primary"
                variant={defaultIt("Food")}
            />
           
        </div>
    )
}

export default AllProducts
