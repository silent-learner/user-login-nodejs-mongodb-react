
export const userReducer = (state = { isAuthorized : false, 
   user : {
      username : '', firstname: '', lastname: '', 
      password:'', email: '', gender: '', country: ''},
   messageLog: {
      error: false,
      message: ''
   } 
   }, action ) => {
   switch(action.type) {
      
      case "AUTHORIZED":
         //console.log(action.payload);
         return {
            ...state, isAuthorized: action.payload
         };
      case "LOGIN-USERNAME": 
         let userWithUsername = Object.assign({}, state.user, {username: action.payload});         
         return {
            ...state, user: userWithUsername
         };
      case "LOGIN-EMAIL": 
         let userWithemail = Object.assign({}, state.user, {email: action.payload});         
         return {
            ...state, user: userWithemail
         };
      case "LOGIN-GENDER": 
         let userWithgender = Object.assign({}, state.user, {gender: action.payload});         
         return {
            ...state, user: userWithgender
         };
      case "LOGIN-FIRSTNAME": 
         let userWithfirstname = Object.assign({}, state.user, {firstname: action.payload});         
         return {
            ...state, user: userWithfirstname
         };
      case "LOGIN-LASTNAME": 
         let userWithlastname = Object.assign({}, state.user, {lastname: action.payload});         
         return {
            ...state, user: userWithlastname
         };
      case "LOGIN-COUNTRY": 
         let userWithcountry = Object.assign({}, state.user, {country: action.payload});         
         return {
            ...state, user: userWithcountry
         };
      case "LOGIN-PASSWORD": 
         let userWithPassword = Object.assign({}, state.user, {password: action.payload});         
         return {
            ...state, user: userWithPassword
         };
      case "LOGIN-USER":
         if(action.payload && action.payload.message && action.payload.message === "Login successfull"){
            state.isAuthorized = true;
            return {
               ...state, user: action.payload
            };
         } else {
            return {
               ...state, messageLog: action.payload
            };
         }
         
      default:
         return state;
   }
}
