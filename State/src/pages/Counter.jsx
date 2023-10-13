import React from "react";
import { Link } from "react-router-dom";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen gap-10 font-semibold text-neutral-300">
        <div className="text-5xl">
          <h1 className="px-10 pb-2 text-white rounded-lg bg-neutral-800">
            {this.state.count}
          </h1>
        </div>
        <div className="flex items-center justify-center gap-5 text-5xl ">
          <button
            className="px-10 pb-2 rounded-lg bg-neutral-800"
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            {" "}
            +{" "}
          </button>
          <button
            className="pb-2 rounded-lg px-11 bg-neutral-800"
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            {" "}
            -{" "}
          </button>
        </div>

        <div className="flex justify-center mt-10">
          <Link
            className="px-10 py-3 font-semibold tracking-wider duration-200 rounded-md bg-sky-600 hover:bg-sky-500 text-neutral-200"
            to="/"
          >
            Home
          </Link>
        </div>
      </div>
    );
  }
}
export default Counter;
