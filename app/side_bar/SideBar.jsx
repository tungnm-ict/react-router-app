import React, { Component} from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import routes from './routerConfig.jsx';
import styles from './styleSheet.jsx';

export default class Sidebar extends Component {
    render() {
        var { wapper, sidebar, ul, link, mainContent} = styles;
        return (
            <HashRouter>
            <div style={wapper}>
              <div style={sidebar}>
                <ul style={ul}>
                  <li>
                    <Link to="/" style={link}>Home</Link>
                  </li>
                  <li>
                    <Link to="/bubblegum" style={link}>Bubblegum</Link>
                  </li>
                  <li>
                    <Link to="/shoelaces" style={link}>Shoelaces</Link>
                  </li>
                </ul>
        
                {routes.map((route, index) => (
                  // You can render a <Route> in as many places as you want in your app. It will render along with any other <Route>
                  // that also match the URL. So, a sidebar or breadcrumbs or anything else that requires you to render multiple
                  // things in multiple places at the same URL is nothing more than multiple <Route>s.
                  <Route key={index}  path={route.path} exact={route.exact} component={route.sidebar} />
                ))}
              </div>
        
              <div style={mainContent}>
                {routes.map((route, index) => (
                  // Render more <Route>s with the same paths as above, but different components this time.
                  <Route key={index} path={route.path} exact={route.exact} component={route.main} />
                ))}
              </div>
            </div>
          </HashRouter>
        );
    }
}