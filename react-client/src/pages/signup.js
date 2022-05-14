import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {get, API_URL, post} from "../actions/baseAction";

class SignUp extends React.Component {
   constructor(props) {
      super(props);
      this.state = {  }
   }

   handleClickTest = () => {
      this.props.handleLoginClick(this.props.user);
      this.props.history.push('/')
   }

   componentDidMount() {     
      if(this.props.countries && this.props.countries.length === 0) {
         this.props.getCountries();
      }
   }

   render() { 
      return ( 
      <div className="signup-form" style={{backgroundColor:"white", color: "black",  padding:"20px", borderRadius:"5px" , height:"100%"}}>    
      <h1>Sign Up</h1>     
         <div className="form-row">
            <div className="form-group col-md-12"> 
               <input type="text" className="form-control" placeholder="User Name" id="username" name="username" onChange={this.props.usernameHandleChange} required/>
            </div>            
         </div>
         <div className="form-row">
            <div className="form-group col-md-12"> 
               <input type="password" className="form-control" placeholder="Password" id="password" name="password" onChange={this.props.passwordHandleChange} required/>
            </div>            
         </div>
         <div className="form-row">
            <div className="form-group col-md-12"> 
               <input type="email" className="form-control" placeholder="Email" id="email" name="email" onChange={this.props.emailHandleChange} required/>
            </div>            
         </div>
         <div className="form-row">
            <div className="form-group col-md-6">
               <input type="text" className="form-control" id="firstname" name="firstname" placeholder="First Name" onChange={this.props.firstnameHandleChange} required/>
            </div>
            <div className="form-group col-md-6">
               <input type="text" className="form-control" id="lastname" name="lastname" placeholder="Last Name" onChange={this.props.lastnameHandleChange} required/>
            </div>
         </div>
         <div className="form-row">
            <div className="col-md-6">
               <input type="radio" id="customRadioInline1" name="customRadioInline1" className="custom-control-input" onChange={this.props.genderHandleChange} value="Male"/>
               <label className="form-control-gender" htmlFor="customRadioInline1">&nbsp;Male</label>
               &nbsp;&nbsp;&nbsp;&nbsp;
               <input type="radio" id="customRadioInline2" name="customRadioInline1" className="custom-control-input" onChange={this.props.genderHandleChange} value="Female"/>
               <label className="form-control-gender" htmlFor="customRadioInline2">&nbsp;Female</label>
            </div>
            <div className="form-group col-md-6">
               <select className="form-control" onChange={this.props.countryHandleChange}>  
               <option>-Select Country-</option>                               
               {
                  this.props.countries && this.props.countries.map((country) => {
                     return <option key={country.code} value={country.name}>{country.name}</option>
                  })
               }
               </select>
            </div>
         </div>
         
         <div className="form-group">               
            <input type="submit" value="SignUp" onClick={this.handleClickTest} className="btn btn-primary" /> &nbsp;&nbsp; Already registered? <Link className="btn-outline-info" to="/"><b>Login</b></Link>
         </div>   
         <div className="form-group">  
            <span id="message" name="message"></span>
         </div>                 
      </div> 
      );
   }
}

function mapStateToProps(state) {
   return {
      countries: state.countryReducer.countries,
      isAuthorized: state.userReducer.isAuthorized,
      user: state.userReducer.user,
      messageLog: state.userReducer.messageLog
   };
}

function mapDispatchToProps(dispatch) {
   return {
      getCountries: () => {         
         return get(`${API_URL}/countries`)
            .then((result) => {
               //console.log("Country loaded", result.result);
               dispatch({ type: "LOAD-COUNTRIES", payload: result.result });
            })
            .catch((err) => {
               console.log('./src/pages/signup.js => mapDispatchToProps => getCountries()', err);
            })         
      },
      handleLoginClick: (user) => { 
         //Validation check if username & password entered or NOT?         
         if(!(user.username && user.password)) {
            alert("Please enter Username and Password!!");
            return;
         }
         return post(`${API_URL}/signup`, user)
            .then((result) => {
               console.log("signup got result", result);
               if(result.loggedInUser){
                  dispatch({ type: "LOGIN-USER", payload: result.loggedInUser });
                  dispatch({ type: "AUTHORIZED", payload: true });
               } else {
                  dispatch({ type: "LOGIN-USER", payload: result });
               }
               
            })
            .catch((err) => {
               console.log('./src/pages/login.js => mapDispatchToProps => postLogin()', err);
            })         
      },
      usernameHandleChange: (e) => {
         const action = { type: "LOGIN-USERNAME", payload: e.target.value };
         dispatch(action);
     },
     passwordHandleChange: (e) => {
        const action = { type: "LOGIN-PASSWORD", payload: e.target.value };
        dispatch(action);
    },
     emailHandleChange: (e) => {
        const action = { type: "LOGIN-EMAIL", payload: e.target.value };
        dispatch(action);
    },
     countryHandleChange: (e) => {
        const action = { type: "LOGIN-COUNTRY", payload: e.target.value };
        dispatch(action);
    },
     genderHandleChange: (e) => {
        const action = { type: "LOGIN-GENDER", payload: e.target.value };
        dispatch(action);
    },
     firstnameHandleChange: (e) => {
        const action = { type: "LOGIN-FIRSTNAME", payload: e.target.value };
        dispatch(action);
    },
     lastnameHandleChange: (e) => {
        const action = { type: "LOGIN-LASTNAME", payload: e.target.value };
        dispatch(action);
    },
   };
}

export default connect(
   mapStateToProps, mapDispatchToProps
)(SignUp);