import React from 'react';
import {Grid } from '@material-ui/core'
import {Paper} from '@material-ui/core'
import {Avatar} from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Typography from '@material-ui/core/Link';

const Login=()=>{
    
    
    const paperstyle={padding: 30,height:'70vh',width:400,margin:'30px auto'}
    const btnstyle= {margin:'8px 0'}
    return(
        <Grid align='center' >
            <Paper elavation ={10} style={paperstyle}>
            <Avatar > <LockOutlinedIcon/> </Avatar>
       <h2>Sign in</h2>
      

      
      
      
      <TextField id='Username' label='Username' variant="outlined" />
     <br/>

      <TextField id='Password' label='Password' variant="outlined" />

      <br/>
      
      <FormControlLabel
        control={
          <Checkbox
            
            name="checkedB"
            color="primary"
          />
        }
        label="Primary"
      />
      <br/>
      <button variant="contained" color="primary" > Sign in</button>
      <br/>
      <Typography>
      <Link href="#" >
        Forget password
      </Link>
      </Typography>
      <br/>
      <Typography>
      <Link href="#http://localhost:3001/" >
       Sign up
      </Link>
      </Typography>
      
    </Paper>
    </Grid>


    
    )
};
export default Login; 
