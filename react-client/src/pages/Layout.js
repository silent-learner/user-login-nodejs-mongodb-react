import React from "react";
import { connect } from 'react-redux';
// import Dashboard from "./dashboard";
import LogIn from "./login";
import  DashboardContent  from "../firstpage/Dashboard";

class Layout extends React.Component {   
   constructor(props) {
      super(props);
      this.state = {}
   }
   
   render() {
      //console.log(this.props.isAuthorized);
      return (
         this.props.isAuthorized  ? 
         <DashboardContent isAuthorized={this.props.isAuthorized}/> :       
         <LogIn />
      );   
   }
}

function mapStateToProps(state) {
   return {      
      isAuthorized: state.userReducer.isAuthorized,
   };
}

export default connect(
   mapStateToProps,
)(Layout);
