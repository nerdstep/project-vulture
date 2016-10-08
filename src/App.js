import React, { Component } from 'react'
import { BrowserRouter, Match, Miss } from 'react-router'
import cx from 'classnames'
import DrawerMenu from './DrawerMenu'
import NavMenu from './NavMenu'
import Header from './Header'
import Home from './Home'
import Preview from './Preview'
import './App.css'


const NoMatch = ({ location = {} }) =>
  <div className="content">
    <h1>Page Not Found</h1>
    {location.pathname &&
      <p>Sorry but <code>{location.pathname}</code> didn’t match any pages</p>
    }
  </div>

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: props.isLoading,
      isMenuOpen: true,
    }
  }

  toggleMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    })
  };

  toggleLoading = () => {
    this.setState({
      isLoading: !this.state.isLoading
    })
  };

  render() {
    const p = this.props
    const s = this.state
    const appClass = cx({
      App: true,
      in: this.state.isMenuOpen
    })

    return (
      <BrowserRouter>
        <div className={appClass}>
          <NavMenu onToggleDrawerMenu={this.toggleMenu} title={p.title} />
          <DrawerMenu
            isLoading={s.isLoading}
            isOpen={s.isMenuOpen}
            onToggleLoading={this.toggleLoading}
          />
          <Header isLoading={s.isLoading} title={p.title} />
          <div>
            <Match exactly pattern="/" component={Home} />
            <Match pattern="/preview" component={Preview} />
            <Miss component={NoMatch} />
          </div>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
