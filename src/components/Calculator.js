import React from "react";
import { normalNumberPress,normalSignPress, equalPress, clearPress } from "../actions/opers";

import { connect } from "react-redux";
import "materialize-css/dist/css/materialize.min.css"

const Calculator = props => (
  <div className="container">
    {console.log(JSON.stringify(props))}
    <p>Pre:{props.pre}</p>
    <p>Now:{props.now}</p>
    <div className="row">
      <div className="col">
        <button
          value="("
          onClick={e => {
            const add = e.target.value;
            props.dispatch(
              normalNumberPress(props.pre, props.now, add, props.trigger)
            );
          }}
        >
          (
        </button>
      </div>
      <div className="col">
        <button
          value=")"
          onClick={e => {
            const add = e.target.value;
            props.dispatch(
              normalNumberPress(props.pre, props.now, add, props.trigger)
            );
          }}
        >
          )
        </button>
      </div>
      <div className="col">
        <button
          value="%"
          onClick={e => {
            const add = e.target.value;
            props.dispatch(
              normalSignPress(props.pre, props.now, add, props.trigger)
            );
          }}
        >
          %
        </button>
      </div>
      <div className="col">
        <button
          value="C"
          onClick={e => {
            const add = e.target.value;
            props.dispatch(
              clearPress(props.pre, props.now, add, props.trigger)
            );
          }}
        >
          C
        </button>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <button
          value="7"
          onClick={e => {
            const add = e.target.value;
            props.dispatch(
              normalNumberPress(props.pre, props.now, add, props.trigger)
            );
          }}
        >
          7
        </button>
      </div>
      <div className="col">
        <button
          value="8"
          onClick={e => {
            const add = e.target.value;
            props.dispatch(
              normalNumberPress(props.pre, props.now, add, props.trigger)
            );
          }}
        >
          8
        </button>
      </div>
      <div className="col">
        <button
          value="9"
          onClick={e => {
            const add = e.target.value;
            props.dispatch(
              normalNumberPress(props.pre, props.now, add, props.trigger)
            );
          }}
        >
          9
        </button>
      </div>
      <div className="col">
        <button
          value="/"
          onClick={e => {
            const add = e.target.value;
            props.dispatch(
              normalSignPress(props.pre, props.now, add, props.trigger)
            );
          }}
        >
          /
        </button>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <button
          value="4"
          onClick={e => {
            const add = e.target.value;
            props.dispatch(
              normalNumberPress(props.pre, props.now, add, props.trigger)
            );
          }}
        >
          4
        </button>
      </div>
      <div className="col">
        <button
          value="5"
          onClick={e => {
            const add = e.target.value;
            props.dispatch(
              normalNumberPress(props.pre, props.now, add, props.trigger)
            );
          }}
        >
          5
        </button>
      </div>
      <div className="col">
        <button
          value="6"
          onClick={e => {
            const add = e.target.value;
            props.dispatch(
              normalNumberPress(props.pre, props.now, add, props.trigger)
            );
          }}
        >
          6
        </button>
      </div>
      <div className="col">
        <button
          value="*"
          onClick={e => {
            const add = e.target.value;
            props.dispatch(
              normalSignPress(props.pre, props.now, add, props.trigger)
            );
          }}
        >
          X
        </button>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <button
          value="1"
          onClick={e => {
            const add = e.target.value;
            props.dispatch(
              normalNumberPress(props.pre, props.now, add, props.trigger)
            );
          }}
        >
          1
        </button>
      </div>
      <div className="col">
        <button
          value="2"
          onClick={e => {
            const add = e.target.value;
            props.dispatch(
              normalNumberPress(props.pre, props.now, add, props.trigger)
            );
          }}
        >
          2
        </button>
      </div>
      <div className="col">
        <button
          value="3"
          onClick={e => {
            const add = e.target.value;
            props.dispatch(
              normalNumberPress(props.pre, props.now, add, props.trigger)
            );
          }}
        >
          3
        </button>
      </div>
      <div className="col">
        <button
          value="-"
          onClick={e => {
            const add = e.target.value;
            props.dispatch(
              normalSignPress(props.pre, props.now, add, props.trigger)
            );
          }}
        >
          -
        </button>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <button
          value="0"
          onClick={e => {
            const add = e.target.value;
            props.dispatch(
              normalNumberPress(props.pre, props.now, add, props.trigger)
            );
          }}
        >
          0
        </button>
      </div>
      <div className="col">
        <button
          value="."
          onClick={e => {
            const add = e.target.value;
            props.dispatch(
              normalNumberPress(props.pre, props.now, add, props.trigger)
            );
          }}
        >
          .
        </button>
      </div>
      <div className="col">
        <button
          value="="
          onClick={e => {
            const add = e.target.value;
            props.dispatch(
              equalPress(props.pre, props.now, add, props.trigger)
            );
          }}
        >
          =
        </button>
      </div>
      <div className="col">
        <button
          value="+"
          onClick={e => {
            const add = e.target.value;
            props.dispatch(
              normalSignPress(props.pre, props.now, add, props.trigger)
            );
          }}
        >
          +
        </button>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => {
  console.log("state is " + JSON.stringify(state));
  return {
    pre: state.oper.pre,
    now: state.oper.now,
    add: state.oper.add,
    trigger: state.oper.trigger
  };
};

export default connect(mapStateToProps)(Calculator);
