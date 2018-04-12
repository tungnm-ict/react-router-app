import React, { Component} from 'react';
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {HashRouter, Switch, Route, Redirect} from "react-router-dom";

import styles from "./styleSheet.jsx";
import HSL from './HSL.jsx';
import RGB from './RGB.jsx';
import NavLink from './NavLink.jsx';
/* you'll need this CSS somewhere
.fade-enter {
  opacity: 0;
  z-index: 1;
}

.fade-enter.fade-enter-active {
  opacity: 1;
  transition: opacity 250ms ease-in;
}
*/
export default class AnimatedTransitions extends Component {
    render() {
        return (
            <HashRouter>
                <Route
                    render={({location}) => (
                    <div style={styles.fill}>
                        <Route exact path="/" render={() => <Redirect to="/hsl/10/80/40"/>}/>
                        <ul style={styles.nav}>
                            <NavLink to="/hsl/10/80/40" replace>Red</NavLink>
                            <NavLink to="/hsl/150/70/40" replace>Green</NavLink>
                            <NavLink to="/rgb/33/150/213" replace>Blue</NavLink>
                            <NavLink to="/rgb/240/98/146" replace>Pink</NavLink>
                        </ul>
                        <div style={styles.content}>
                            <TransitionGroup>
                                {/* no different than other usage of CSSTransition, just make sure to pass `location` to `Switch` so it can match the old location as it animates out */}
                                <CSSTransition key={location.key} classNames="fade" timeout={300}>
                                    <Switch location={location}>
                                        <Route exact path="/hsl/:h/:s/:l" component={HSL}/>
                                        <Route exact path="/rgb/:r/:g/:b" component={RGB}/> {/* Without this `Route`, we would get errors during the initial transition from `/` to `/hsl/10/90/50` */}
                                        <Route render={() => <div>Not Found</div>}/>
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                        </div>
                    </div>
                )}/>
            </HashRouter>
        );
    }
}