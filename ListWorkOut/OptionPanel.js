import React, { Component } from "react";
import OptionList from "./OptionWorkOut";

class OptionPanel extends Component {
  state = {
    buttonPrev: false,
    buttonNext: true,
    activeID: 0,
    serieMax: this.props.data["opcje_listy"]["ilosc_ser"],
    serieNumber: 1,
    WorkOut: [],
    counterWorkOut: this.props.data["opcje_listy"]["ilosc_cwiczen"] //tylko dla celów porównawczych componentDidUpdate
  };
  starter = () => {
    //montowanie nowej tablicy wyzbieranej z danch by map() cwiczenia
    const amountWorkOut = this.props.data["opcje_listy"]["ilosc_cwiczen"];
    let tmp_arr = [];

    for (let i = 1; i <= amountWorkOut; i++) {
      //dziala, ale czy da sie inaczej? Dlaczego gdy robie push obj_template do tmp_arry w kazdej iteracji pracuje na tym sanym tmp_object
      let obj_template = {
        name: "",
        number: "",
        visible: false,
        valueButton: "Pokaż"
      };
      tmp_arr.push(obj_template);
      tmp_arr[i - 1].name = this.props.data["seria_1"]["cw_" + i].name;
      tmp_arr[i - 1].number = i;
    }
    // console.log(tmp_arr);
    this.setState({
      WorkOut: tmp_arr
    });
  };
  componentDidMount = () => {
    // console.log("did");
    this.starter();
  };
  componentDidUpdate = () => {
    const actualCOUNTER = this.props.data["opcje_listy"]["ilosc_cwiczen"];
    if (this.state.counterWorkOut !== actualCOUNTER) {
      this.starter();
      this.setState({
        counterWorkOut: actualCOUNTER
      });
    }
  };
  handleClik = e => {
    //obsluga pojawiania i chowania sie opcji dla cwiczenia
    let st = this.state.WorkOut.slice(); //kopiuje cala liste, a w setState cala podmieniam
    const id = e.target.name;
    const value = e.target.value;
    // console.log(
    //   "id:" + id + " , value: " + value + " ,st: " + st[id - 1].visible
    // );
    // let target = this.state.idWorkOut[id].valueButton;

    if (value === "Pokaż") {
      st[id - 1].valueButton = "Ukryj";
      st[id - 1].visible = !st[id - 1].visible;
      this.setState({
        WorkOut: st,
        activeID: id - 1
      });
    } else if (value === "Ukryj") {
      st[id - 1].valueButton = "Pokaż";
      st[id - 1].visible = !st[id - 1].visible;
      this.setState({
        WorkOut: st,
        activeID: id - 1
      });
    }
  };
  checkSeries = e => {
    console.log("check");
    let new_serieNumber;
    if (e.target.name === "Poprzedni") {
      new_serieNumber = this.state.serieNumber - 1;
      if (new_serieNumber > 1) {
        this.setState({
          serieNumber: new_serieNumber
        });
      } else {
        this.setState(prevState => ({
          buttonPrev: !this.prevState.buttonPrev
        }));
      }
    } else if (e.target.name === "Nastepny") {
    }
  };
  render() {
    const it = this.state;
    return (
      <>
        {it.buttonPrev ? (
          <input type="button" value="Poprzedni" onClick={this.checkSeries} />
        ) : null}
        <span>Seria {it.serieNumber}</span>
        {it.buttonNext ? <input type="button" value="Nastepny" /> : null}
        {it.WorkOut.map(key => (
          <>
            <li>{key.name}</li>
            {key.visible ? (
              <OptionList
                data={
                  this.props.data["seria_" + it.serieNumber]["cw_" + key.number]
                }
              />
            ) : null}
            <input
              type="button"
              onClick={this.handleClik}
              value={key.valueButton}
              name={key.number}
            />
            <br />
          </>
        ))}
      </>
    );
  }
}

export default OptionPanel;
