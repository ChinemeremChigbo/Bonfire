import React from 'react';
import { makeStyles, jssPreset, } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import ProfileImage from "../assets/img/Match.png";
import Button from "../ui-components/CustomButtons/Button.js";
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '143ch',
      right: "-137px",
      top: "-10px",
    },
  },

  formControl: {
    margin: theme.spacing(5),
    minWidth: 185,
    maxWidth: 185,
    right: "-100px",
    top: "-40px",
  },
  name: {
    paddingTop: '75px',
    textIndent: '705px',
  },
  bio: {
    paddingTop: '55px',
    textIndent: '745px',
  },
  biosub: {
    textAlign: 'center',
    paddingTop: '20px',
    paddingLeft: '600px',
    paddingRight: '600px',
    lineHeight: '18px',
  },
  w2l: {
    paddingTop: '-400px',
    textIndent: '600px',
  },
  w2llist: {
    textIndent: '140px',
  },
  backButton: {
    left: '600px',
    top: '50px',
    backgroundColor: '#CE0000',
    minWidth:'10%',
    marginRight:'50px',
    marginBottom:'200px',

},
  callButton: {
    left: '780px',
    top: '50px',
    backgroundColor: '#CE0000',
    minWidth:'10%',
    marginBottom:'200px',
    marginLeft:'-200px',
},
}));

const ITEM_HEIGHT = 50;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 3 + ITEM_PADDING_TOP,
      width: 215,
    },
  },
};




export default function Match(props) {
  const classes = useStyles();

  const props_ = props.location.state;

  return (
    <div style={{
      backgroundImage: `url(${ProfileImage})`,
      width: '100vw',
      height: '100vh',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      }}>
    <div>
    <div className={classes.name}>
          <h1>{props_.Name}</h1>
     </div>
      <div className={classes.bio}>
          <h4>{props_.Bios}</h4>
     </div>
          <div className={classes.biosub}>
          <p1>  </p1>
      </div>
    <div className={classes.w2l}>
          <h4>Wants to learn</h4>
    </div>
    <div className={classes.w2llist}>
    <p1>Igbo</p1>
          <br></br>
          <p1>Igbo</p1>
          <br></br>
          <p1>Igbo</p1>
          <br></br>
          <p1>Igbo</p1>
          <br></br>
          <p1>Igbo</p1>
    </div>
    <div>
      </div>
    </div>
    <Link style={{textDecoration: 'none'}} to="/maps"><Button className={classes.backButton}>Back</Button></Link>
    <Link style={{textDecoration: 'none'}} to="/call"><Button className={classes.callButton}>Call</Button></Link>
    </div>
  );
          }

