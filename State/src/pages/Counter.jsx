import React from "react";

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
      </div>
    );
  }
}
export default Counter;
