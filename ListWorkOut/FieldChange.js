import React from "react";

const FieldChange = props => {
  console.log("FieldChange");
  return (
    <form>
      {props.text ? (
        <input type="text" onChange={props.handleChange} />
      ) : (
        <input
          type="number"
          name="quantity"
          min={props.min}
          max={props.max}
          onChange={props.handleChange}
        />
      )}
      <input
        type="submit"
        id={props.id}
        value="Zatwierdz"
        onClick={props.handleClick}
      />
      <br />
    </form>
  );
};

FieldChange.defaulProps = {
  text: false
};

export default FieldChange;
