import React, { PureComponent } from "react";
import "./Header.css";

export default class Header extends PureComponent {
  render() {
    return (
      <div>
        <header className="component-header">
          <img
            src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
            width="32"
            height="32"
            alt=""
          />
          Example Application: Emoji Search
          <img
            src="//cdn.jsdelivr.net/emojione/assets/png/1f63a.png"
            width="32"
            height="32"
            alt=""
          />
        </header>
      </div>
    );
  }
}
