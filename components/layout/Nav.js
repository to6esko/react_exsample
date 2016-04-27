import React from 'react';
import {IndexLink, Link} from 'react-router';


class Nav extends React.Component {
    constructor() {
        super();
        this.state = {
            collapsed: true
        };
    }
    toggleCollapse() {
        const collapsed = !this.state.collapsed;
        this.setState({ collapsed });
    }

    render() {
        const {location} = this.props;
        const {collapsed} = this.state;
        const fearuredClassName = location.pathname === '/' ? 'active' : '';
        const archivesClassName = location.pathname.match(/^\/archives/) ? 'active' : '';
        const settingsClassName = location.pathname.match(/^\/settings/) ? 'active' : '';
        const navClassName = collapsed ? 'collapse' : '';
        
        return (
            <nav className='navbar navbar-inverse navbar-fixed-top' role='navigation'>
                <div className='container'>
                    <div className='navbar-header'>
                        <button type='button' className='navbar-toggle' onClick={this.toggleCollapse.bind(this) }>
                            <span className='sr-only'>Toggle navigation</span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                            <span className='icon-bar'></span>
                        </button>
                    </div>
                    <div className={'navbar-collapse' + navClassName} id='bs-example-navbar-collapse-1'>
                        <ul className='nav navbar-nav'>
                            <li className={fearuredClassName}>
                                <IndexLink to='/' onClick={this.toggleCollapse.bind(this) }>Featured</IndexLink>
                            </li>
                            <li className={archivesClassName}>
                                <Link to='archives' onClick={this.toggleCollapse.bind(this) }>Archives</Link>
                            </li>
                            <li className={settingsClassName}>
                                <Link to='settings' onClick={this.toggleCollapse.bind(this) }>Settings</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
};


export default Nav;