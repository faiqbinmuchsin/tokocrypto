// import React, { Component } from 'react';
// import './App.css';

// import Home from '../page/home';

// import {
//   Container
// } from 'reactstrap';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Container>
//           <Home />
//         </Container>
//       </div>
//     );
//   }
// }

// export default App;

import React, { Component } from 'react';
import './App.css';

import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import routes from "./routes";
import {
    Container
} from 'reactstrap';

class App extends Component {
  render() {
    const { store } = this.props;
    return (
      <BrowserRouter>
        <Provider store={store}>
          <div className="App">
            <Container>
              <Switch>
                  {routes.map(route => <Route key={`${route.name}-${route.path}`} {...route} />)}
              </Switch>
            </Container>
          </div>
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;