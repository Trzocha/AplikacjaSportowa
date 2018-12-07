import React, { Component } from "react";
import P5Wrapper from "react-p5-wrapper";
// import sketch from "../src/sketch";

function sketch(p) {
  let value;
  setInterval(function() {
    if (value <= 0) {
      value = 60;
    }
    value = value - 1;
    console.log(value);
  }, 1000);
  p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    value = props.val;
  };
  p.setup = function() {
    p.createCanvas(400, 400);
  };

  p.draw = function() {
    p.background(0);

    p.strokeWeight(4);
    p.stroke(255);
    p.noFill();
    // p.ellipse(200, 200, 300, 300);

    p.strokeWeight(4);
    p.stroke(150, 20, 50);
    p.arc(200, 200, 300, 300, 0, 0.1047 * value);
    p.strokeWeight(1);
    p.text("" + value, 195, 200);
  };
}

export default function Clock({ value }) {
  return (
    <div>
      <P5Wrapper sketch={sketch} val={value} />
    </div>
  );
}
