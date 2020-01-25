import React from "react";
import { Route, Switch } from "react-router-dom";
// import Login from "./Login";
// import AuthRoute from "./util/route_util";
// import Register from "./Register";

const App = () => {
  return (
    <div>
      <h1> goPup! </h1>
      <Switch>
        {/* <AuthRoute exact path="/login" component={Login} routeType="auth" /> */}
        {/* <Route path="/register" component={Register} /> */}
      </Switch>
    </div>
  );
};

export default App;









// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
