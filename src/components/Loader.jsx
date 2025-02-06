import { Component } from "react";

// const Loader = () => ...
class Loader extends Component {
  render() {
    return (
      <div className="card text-center shadow-xss rounded-xxl border-0 p-4 mb-3 mt-3">
        <div className="snippet mt-2 ms-auto me-auto" data-title=".dot-typing">
          <div className="stage">
            <div className="dot-typing"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Loader;
