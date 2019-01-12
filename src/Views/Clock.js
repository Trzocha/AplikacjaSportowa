import React from "react";
import P5Wrapper from "react-p5-wrapper";
// import "./Clock2";

//clock max break 179sek
function sketch(p) {
  let counter = 0;
  let second = 0;
  let minute = 0;
  let textPosition = 0;
  let textColor = 0;
  let flagCounter = true;
  let next = function() {};
  // let song = "";

  setInterval(function() {
    if (second === 1) {
      second = 61;
      minute = minute - 1;
      if (minute === -1) {
        flagCounter = false;
        counter = 0;
        // console.log("KONIEC");
        next();
      }
    }
    if (flagCounter) {
      second = second - 1;
      counter = counter - 1;
    }
  }, 1000);
  p.myCustomRedrawAccordingToNewPropsHandler = function(props) {
    next = props.next;
    counter = second = props.val;
    if (second / 60 > 1) {
      minute = Math.floor(second / 60);
      second = second % 60;
    }
    // console.log("m:" + minute + " s:" + second);
  };
  p.setup = function() {
    p.createCanvas(400, 400);
    console.log(p);
    // song = p.sound("../../sound/button-42.mp3");
  };

  p.draw = function() {
    p.background(52, 73, 94);
    p.noStroke();
    p.translate(200, 200);
    p.rotate(-3.14 / 2);

    if (minute === 2) {
      clock1();
      clock2();
      clock3();
    } else if (minute === 1) {
      clock1();
      clock2();
    } else if (minute === 0) {
      clock1();
    }
    if (counter >= 100) {
      textPosition = -15;
    } else if (counter >= 10) {
      textPosition = -10;
    } else {
      textPosition = -5;
    }

    if (counter <= 60) {
      textColor = 255;
    }
    p.fill(textColor);
    p.rotate(3.14 / 2);
    p.textSize(20);
    p.text("" + counter, textPosition, 0);
  };

  let clock1 = function() {
    //najwiekszy zegar
    let turn = 6.28;
    if (minute === 0) {
      turn = 0.1047 * second;
    }
    // console.log("0: " + turn + " minute: " + minute);
    p.fill(214, 69, 65);
    p.arc(0, 0, 300, 300, 0, turn, p.PIE);

    // if (second === 10) {
    //   playSong();
    // }
  };

  let clock2 = function() {
    let turn = 6.28;
    if (minute === 1) {
      turn = 0.1047 * second;
    }
    //console.log("1: " + turn + " minute: " + minute);
    p.fill(77, 175, 124);
    p.arc(0, 0, 290, 290, 0, turn, p.PIE);
  };
  let clock3 = function() {
    //najmniejszy zegar
    let turn = 6.28; //2PI
    if (minute === 2) {
      turn = 0.1047 * second;
    }
    //console.log("2: " + turn + " minute: " + minute);
    p.fill(92, 151, 191);
    p.arc(0, 0, 280, 280, 0, turn, p.PIE);
  };
  // let playSong = function(value) {
  //   song.play();
  // };
}

export default function Clock(props) {
  return (
    <div>
      <P5Wrapper sketch={sketch} val={props.value} next={props.next} />
    </div>
  );
}
