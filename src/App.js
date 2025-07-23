import React from 'react';
import { ReactComponent as IconGithub } from './assets/icons/github.svg';
import "./App.css";

class App extends React.Component {
  render = () => {
    return (
      <div className="card">
        <div className="header">
          <div className="logo">
            <a href=".">SAMUEL WACHIRA_</a>
          </div>
          <div className="social">
            <a href="https://github.com/Kogi65" title="GitHub" target="_blank" rel="noopener noreferrer">
              <IconGithub className="icon" />
            </a>
          </div>
        </div>
        <div className="content">
          <div className="title-holder">
            <h1>Launching 10th August 2025</h1>
            <p>Hi there! I'm currently putting the finishing touches on my portfolio.
              It'll showcase my work and the projects I've been currently doing and what I've done so far.
            </p>
            <p>But thanks for stopping by, I can't wait to share it!</p>
          </div>
        </div>
        <div className="footer">
          <span>Made with resilience by <a className="underlined" href="https://github.com/Kogi65" target="_blank" rel="noopener noreferrer">Kogi65</a> | <a className="underlined" href="https://app.daily.dev/kogi" title="daily.dev" target="_blank" rel="noopener noreferrer">daily.dev</a></span>
        </div>
      </div>
    );
  }
}

export default App;