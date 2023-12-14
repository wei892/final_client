import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Create styling for the input form
const useStyles = makeStyles( () => ({
  formContainer:{  
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
  }, 
  customizeAppBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle:{
    backgroundColor:'#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
}));

const EditCampusView = (props) => {
    const {campus} = props;
    const { handleChange, handleSubmit } = props; // Receive campus data from props
    const classes = useStyles();

    return (
        <div>
          <h1>Edit Campus </h1>
          <h1>{campus.name}</h1>
          <div className={classes.root}>
            <div className={classes.formContainer}>
    
                
              <div className={classes.formTitle}>
                <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
                  Edit a campus
                </Typography>
              </div>
    
    
              <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
    
                <label style= {{color:'#11153e', fontWeight: 'bold'}}>Campus Name: </label>
                <input type="text" name="name" onChange ={(e) => handleChange(e)} />
                <br/>
                <br/>
    
                <label style={{color:'#11153e', fontWeight: 'bold'}}> Address: </label>
                <input type="text" name="address" onChange={(e) => handleChange(e)} />
                <br/>
                <br/>
    
                <label style={{color:'#11153e', fontWeight: 'bold'}}> Description: </label>
                <input type="text" name="description" onChange={(e) => handleChange(e)} />
                <br/>
                <br/>
    
                <label style={{color:'#11153e', fontWeight: 'bold'}}> Image Url: </label>
                <input type="text" name="imageUrl" onChange={(e) => handleChange (e)} />
                <br/>
                <br/>
                
                <Button variant="contained" color="primary" type="submit">
                  Submit
                </Button>
                <br/>
                <br/>
              </form>
              </div>
          </div>
        </div>    
      )
  }
  
  export default EditCampusView;