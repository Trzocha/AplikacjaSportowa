import React, { Component } from "react";
import OptionList from "./OptionWorkOut";

class OptionPanel extends Component {
  state = {
    // visible: false,
    // valueButton: "Pokaż",
    activeID: 0,
    serieNumber: 1,
    WorkOut: []
  };
  componentDidMount = () => {
    // console.log("did");
    const amountWorkOut = this.props.data["opcje_listy"]["ilosc_cwiczen"];
    let tmp_arr = [];
    // let obj_template = { name: "", number: "" };

    // console.log(tmp_arr[0].name);
    // debugger;
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
  render() {
    const it = this.state;
    return (
      <>
        <p>Seria {it.serieNumber}</p>
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
        {/* <li>POMPKI</li>
        {this.state.idWorkOut[0].visible ? <OptionList /> : null}
        <input
          type="button"
          onClick={this.handleClik}
          value={this.state.idWorkOut[0].valueButton}
          name="1"
        />
        <br />
        <li>PODCIAGANIE</li>
        {this.state.idWorkOut[1].visible ? <OptionList /> : null}
        <input
          type="button"
          onClick={this.handleClik}
          value={this.state.idWorkOut[1].valueButton}
          name="2"
        /> */}
      </>
    );
  }
}

export default OptionPanel;
