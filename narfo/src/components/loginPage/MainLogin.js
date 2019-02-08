import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { CssBaseline, Paper, Avatar, Typography, Link } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import axios from 'axios';

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      paddingTop: theme.spacing.unit * 2,
      paddingBottom: theme.spacing.unit * 2,
      flex:6,
      height:'100vh',
    },
    main: {
      width: 'auto',
      display: 'block', 
      marginLeft: theme.spacing.unit * 3,
      marginRight: theme.spacing.unit * 3,
      [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
        width: 400,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
    paper: {
      marginTop: theme.spacing.unit * 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
      margin: theme.spacing.unit,
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', 
      marginTop: theme.spacing.unit,
    },
    submit: {
      marginTop: theme.spacing.unit * 3,
    },
  });

class MainLogin extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            formData: {
                email: '',
                password: '',
            },
            submitted: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit() {
        // this.setState({ submitted: true }, () => {
        //     setTimeout(() => this.setState({ submitted: false }), 5000);
        // });
        const member = {
            email: 'nicky@smarttaccounting.co.za',
            password: 'abc'
        };

        axios.post('https://localhost:44327/api/Member/post/login', {member})
            .this(res => {
                console.log(res)
                console.log(res.data)

                // if(res.data.status === 'Success' ){
                //     this.setState({ submitted: true}, () => {
                //         this.setState({submitted: false})
                //     })
                //     alert(res.data.token)
    
                // }else{
                //     alert(res.data.message)
    
                // }
            })
        
            

    }

    render() {
        const { formData, submitted } = this.state;
        const {classes} = this.props;
        return (
            <main className={classes.main}>
                <CssBaseline/>
                <Paper className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <form className={classes.form}>
                    <ValidatorForm
                        ref="form"
                        onSubmit={this.handleSubmit}
                    >
                        
                        <FormControl margin="normal" required fullWidth>
                            <TextValidator
                            label="Email"
                            onChange={this.handleChange}
                            name="email"
                            value={formData.email}
                            validators={['required', 'isEmail']}
                            errorMessages={['this field is required', 'email is not valid']}
                        />
                            {/* <InputLabel htmlFor="email">Email Address</InputLabel>
                            <Input id="email" name="email" autoComplete="email" autoFocus /> */}
                        </FormControl>
                        <br />
                        <FormControl margin="normal" required fullWidth>
                        <TextValidator
                            label="Password"
                            type="password"
                            onChange={this.handleChange}
                            name="password"
                            value={formData.password}
                            validators={['required']}
                            errorMessages={['this field is required']}
                        />
                            {/* <InputLabel htmlFor="password">Password</InputLabel>
                            <Input name="password" type="password" id="password" autoComplete="current-password" /> */}
                        </FormControl>
                        <br />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <br/>
                        <Link to="/htfytf">
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                raised
                                > 
                                {}
                                {
                                    (submitted)
                                    || (!submitted && 'Login')
                                }
                            </Button>
                        </Link>
                    </ValidatorForm>
                    </form>
                </Paper>
            </main>
           
        );
    }
}

MainLogin.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(MainLogin);
  
