import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { browserHistory, Router, Route, IndexRoute, Link } from 'react-router';

/**
 * Gets the browser name or returns an empty string if unknown. 
 * This function also caches the result to provide for any 
 * future calls this function has.
 *
 * @returns {string}
 */


var browser = function() {
    // Return cached result if avalible, else get result then cache it.
    if (browser.prototype._cachedResult)
        return browser.prototype._cachedResult;

    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]" 
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    return browser.prototype._cachedResult =
        isOpera ? 'Opera' :
        isFirefox ? 'Firefox' :
        isSafari ? 'Safari' :
        isChrome ? 'Chrome' :
        isIE ? 'IE' :
        isEdge ? 'Edge' :
        "Don't know";
};

console.log(browser());


class App extends React.Component {
    constructor(props){
        super(props);
        this.displace = this.displace.bind(this);
        this.handleMouse = this.handleMouse.bind(this);
        this.state = { x: 0, y: 0 };
    }
    handleMouse(e){
        // this.setState({ x: e.pageX, y: e.pageY }); // commenting out until we actually use this
    }
    displace(amount, xory = 'x'){
        return -((.6 * amount * this.state[xory] / window.innerWidth) - amount) || 0;
    }
    render() {
        var children = React.Children.map(this.props.children, (child, i) => React.cloneElement(child, { x: this.state.x, y: this.state.y, key: this.props.location.pathname || i }))
        return (
            <div className={"yield browser-" + browser() + " is-mobile-" + globals.isMobile + " is-ios-" + globals.isIos} style={{ overflowX: 'hidden' }} onMouseMove={this.handleMouse.bind(this)}>
                 {children}
                {/* <CSSTransitionGroup transitionEnterTimeout={500} transitionLeaveTimeout={500} transitionName='pageLoad'>
                   
                </CSSTransitionGroup> */ }
            </div>
        )
    }
};

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;



