import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import {IconButton,Button} from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
// import AvatarGroup from '@material-ui/lab/AvatarGroup';

const useStyle=makeStyles(theme=>({
  card:{
    maxHeight:300,
    maxWidth:300,
    margin:15,
    [theme.breakpoints.down('sm')]: {
      maxWidth:250,
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth:180,
    }
  },
  cardaction:{
    overflow:"auto"
  },
  avatar:{
    cursor:"pointer"
  }
  
}))
const textHead=()=>{

  return(
    <Typography variant="subtitle2" gutterBottom >
          Name of the product 
    </Typography>
  )
}

export default function CardText() {
  const classes=useStyle()
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card  className={classes.card} >
      <CardHeader
  
        action={
          <>
          <IconButton aria-label="settings">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
          </>
        }
        title={textHead()}
        style={{height:"50px",width:"99%",padding:"0 2px",margin:"auto"}}
      />
       <CardMedia
        image="https://www.mountaingoatsoftware.com/uploads/blog/2016-09-06-what-is-a-product.png"
        style={{height:"150px",width:"99%",margin:"auto"}}
      />
      <CardContent style={{height:"25px"}}>
        <Typography variant="body2" color="textSecondary" component="p">
          Best price & quality
        </Typography>
      </CardContent>
      <CardActions
      className={classes.cardaction}>
      {/* <AvatarGroup max={4}> */}
          <Avatar title="banggood" className={classes.avatar} src="https://is1-ssl.mzstatic.com/image/thumb/Purple114/v4/d3/e1/cd/d3e1cd1a-6669-601f-3040-8dd79a58de69/AppIcon-1x_U007emarketing-0-7-0-0-85-220.png/1200x630wa.png"/>
              <Avatar title="Amazone" className={classes.avatar} src="https://iconape.com/wp-content/files/mk/33892/svg/amazon-icon-1.svg"/>
        {/* </AvatarGroup> */}
      </CardActions>
    </Card>
  );
}