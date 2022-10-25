import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Collapse } from 'react-bootstrap';
import { Trans } from 'react-i18next';

class Sidebar extends Component {

  state = {};

  toggleMenuState(menuState) {
    if (this.state[menuState]) {
      this.setState({[menuState] : false});
    } else if(Object.keys(this.state).length === 0) {
      this.setState({[menuState] : true});
    } else {
      Object.keys(this.state).forEach(i => {
        this.setState({[i]: false});
      });
      this.setState({[menuState] : true}); 
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      this.onRouteChanged();
    }
  }

  onRouteChanged() {
    document.querySelector('#sidebar').classList.remove('active');
    Object.keys(this.state).forEach(i => {
      this.setState({[i]: false});
    });

    const dropdownPaths = [
      {path:'/apps', state: 'appsMenuOpen'},
      {path:'/basic-ui', state: 'basicUiMenuOpen'},
      {path:'/form-elements', state: 'formElementsMenuOpen'},
      {path:'/tables', state: 'tablesMenuOpen'},
      {path:'/icons', state: 'iconsMenuOpen'},
      {path:'/charts', state: 'chartsMenuOpen'},
      {path:'/user-pages', state: 'userPagesMenuOpen'},
      {path:'/error-pages', state: 'errorPagesMenuOpen'},
    ];

    dropdownPaths.forEach((obj => {
      if (this.isPathActive(obj.path)) {
        this.setState({[obj.state] : true})
      }
    }));
 
  }

  render () {
    return (
      <nav className="sidebar sidebar-offcanvas" id="sidebar">
        <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
          <a className="sidebar-brand brand-logo"><img src={require('../../assets/images/MWISidebar.png')} alt="logo" /></a>
          <a className="sidebar-brand brand-logo-mini"><img src={require('../../assets/images/MWI.png')} alt="logo" /></a>
        </div>
        <ul className="nav">
          <li className="nav-item profile">
            <div className="profile-desc">
              <div className="profile-pic">
                <div className="count-indicator">
                  <img className="img-xs rounded-circle " src={localStorage.getItem("profilPic")} alt="profile" />
                  <span className="count bg-success"></span>
                </div>
                <div className="profile-name">
                  <h5 className="mb-0 font-weight-normal"><Trans>{localStorage.getItem("name")}</Trans></h5>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item nav-category">
            <span className="nav-link"><Trans>Navigation</Trans></span>
          </li>
          <li className={ this.isPathActive('/realtime') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <Link className="nav-link" to="/realtime">
              <span className="menu-icon"><i className="mdi mdi-access-point-network"></i></span>
              <span className="menu-title"><Trans>Realtime</Trans></span>
            </Link>
          </li>
          <li className={ this.isPathActive('/history') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <Link className="nav-link" to="/history">
              <span className="menu-icon"><i className="mdi mdi-alarm"></i></span>
              <span className="menu-title"><Trans>History</Trans></span>
            </Link>
          </li>
          {/* <li className={ this.isPathActive('/basic-ui') ? 'nav-item menu-items active' : 'nav-item menu-items' }>
            <div className={ this.state.basicUiMenuOpen ? 'nav-link menu-expanded' : 'nav-link' } onClick={ () => this.toggleMenuState('basicUiMenuOpen') } data-toggle="collapse">
              <span className="menu-icon">
                <i className="mdi mdi-laptop"></i>
              </span>
              <span className="menu-title"><Trans>Basic UI Elements</Trans></span>
              <i className="menu-arrow"></i>
            </div>
            <Collapse in={ this.state.basicUiMenuOpen }>
              <div>
                <ul className="nav flex-column sub-menu">
                  <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/buttons') ? 'nav-link active' : 'nav-link' } to="/basic-ui/buttons"><Trans>Buttons</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/dropdowns') ? 'nav-link active' : 'nav-link' } to="/basic-ui/dropdowns"><Trans>Dropdowns</Trans></Link></li>
                  <li className="nav-item"> <Link className={ this.isPathActive('/basic-ui/typography') ? 'nav-link active' : 'nav-link' } to="/basic-ui/typography"><Trans>Typography</Trans></Link></li>
                </ul>
              </div>
            </Collapse>
          </li> */}
        </ul>
      </nav>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }

  componentDidMount() {
    this.onRouteChanged();
    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    const body = document.querySelector('body');
    document.querySelectorAll('.sidebar .nav-item').forEach((el) => {
      
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

}

export default withRouter(Sidebar);