import React from "react";
import { connect } from "react-redux";
import { buyTesting } from "../../redux";

function Badut(props) {
  return (
    <div>
      <h3>Ini angka {props.numOftesting}</h3>
      <button onClick={props.buyTesting}>Halo dunia</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOftesting: state.testing.numOftesting,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyTesting: () => dispatch(buyTesting()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Badut);
