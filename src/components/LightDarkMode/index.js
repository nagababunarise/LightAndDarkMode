import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {isDark: true}

  onChangeTheme = () => {
    this.setState(prevState => ({isDark: !prevState.isDark}))
  }

  render() {
    const {isDark} = this.state
    const themeClassName = isDark ? 'dark' : 'light'
    const buttonText = isDark ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="bg-container">
        <div className={themeClassName}>
          <h1 className="heading">Click To Change Mode</h1>
          <div>
            <button
              type="button"
              className="button"
              onClick={this.onChangeTheme}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
