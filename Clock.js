import React from "react";
import P5Wrapper from "react-p5-wrapper";
// import sketch from "../src/sketch";

function sketch(p) {
  let colors = [];
  let counter = 0;
  let second = 0;
  let minute = 0;
  setInterval(function() {
    if (second == 1) {
      second = 61;
      minute = minute - 1;
      if (minute == -1) {
        console.log("KONIEC");
      }
    }
    second = second - 1;
    counter = counter - 1;
  }, 1000);
  p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    counter = second = props.val;
    if (second / 60 > 1) {
      minute = Math.floor(second / 60);
      second = second % 60;
    }
  };
  p.setup = function() {
    p.createCanvas(400, 400);
    // p.angleMode();
  };

  p.draw = function() {
    p.background(0);
    p.noStroke();
    p.translate(200, 200);
    p.rotate(-3.14 / 2);

    if (minute == 1) {
      clock2();
      clock1();
    } else if (minute == 0) {
      clock2();
    }
    p.strokeWeight(1);
    p.rotate(3.14 / 2);
    p.text("" + counter, 0, 0);
  };
  let clock1 = function() {
    let turn = 0;
    if (minute == 1) {
      turn = 0.1047 * second;
    }
    console.log("0: " + turn + " minute: " + minute);
    // p.strokeWeight(minute + 1);
    p.fill(150, 20, 50);
    p.arc(0, 0, 200, 200, 0, turn, p.PIE);
  };
  let clock2 = function() {
    let turn = 6.28;
    if (minute == 0) {
      turn = 0.1047 * second;
    }
    console.log("1: " + turn + " minute: " + minute);
    // p.strokeWeight(minute + 2);
    p.fill(200, 100, 60);
    p.arc(0, 0, 300, 300, 0, turn, p.PIE);
  };
}

export default function Clock({ value }) {
  return (
    <div>
      <P5Wrapper sketch={sketch} val={value} />
    </div>
  );
}
