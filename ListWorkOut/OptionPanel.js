import React, { Component } from "react";
import OptionWorkOut from "./OptionWorkOut";

class OptionPanel extends Component {
  state = {
    buttonPrev: false,
    buttonNext: true,
    activeID: 0,
    serieMax: this.props.data["opcje_listy"]["ilosc_ser"],
    serieNumber: 1,
    prevSerieNumber: 1,
    WorkOut: [],
    counterWorkOut: this.props.data["opcje_listy"]["ilosc_cwiczen"], //tylko dla celów porównawczych componentDidUpdate
    actualIdList: this.props.idList
  };
  starter = flag => {
    //montowanie nowej tablicy wyzbieranej z danch by wykonac map() cwiczenia
    const amountWorkOut = this.props.data["opcje_listy"]["ilosc_cwiczen"];
    let tmp_arr = [];
    let flag_value = 1;
    //flaga wykoanania  Did czy Update
    if (flag) {
      flag_value = this.state.serieNumber;
      // console.log("starter: " + flag_value);
    }

    for (let i = 1; i <= amountWorkOut; i++) {
      //dziala, ale czy da sie inaczej? Dlaczego gdy robie push obj_template do tmp_arry w kazdej iteracji pracuje na tym sanym tmp_object
      let obj_template = {
        name: "",
        number: "",
        visible: false,
        valueButton: "Pokaż"
      };
      tmp_arr.push(obj_template);
      tmp_arr[i - 1].name = this.props.data["seria_" + flag_value][
        "cw_" + i
      ].name;
      tmp_arr[i - 1].number = i;
    }
    // console.log(tmp_arr);
    this.setState({
      WorkOut: tmp_arr
    });
  };
  componentDidMount = () => {
    // console.log("did");
    this.starter(false);
  };
  componentDidUpdate = () => {
    // console.log("did");
    const actualCOUNTER = this.props.data["opcje_listy"]["ilosc_cwiczen"]; //gdy zmienia sie liczba cwiczen
    if (this.state.counterWorkOut !== actualCOUNTER) {
      // console.log("elo");
      this.starter();
      this.setState({
        counterWorkOut: actualCOUNTER
      });
    }
    // console.log(
    //   "did: " + this.state.serieNumber + " , " + this.state.prevSerieNumber
    // );
    if (this.state.serieNumber !== this.state.prevSerieNumber) {
      //gdy przechodzimy z jednej do drugiej serri
      //wywoalanie przy zmianie serii
      this.starter(true);
      this.setState({
        prevSerieNumber: this.state.serieNumber
      });
    }

    if (this.state.actualIdList !== this.props.idList) {
      //gdy zmienia sie cala lista
      const currentMaxSeries = this.props.data["opcje_listy"]["ilosc_ser"];
      this.setState({
        actualIdList: this.props.idList,
        serieMax: currentMaxSeries //nowa lista , nowy stan serii
      });
      // debugger;
      if (currentMaxSeries === 1) {
        //button next musi zniknac bo jest jedna seria gdy dodajemy liste
        this.setState({
          buttonNext: false
        });
      }
      this.starter();
    }

    //gdy zmienia sie liczba serii
    // if()
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
    // console.log(e.target.value);
    // debugger;
    let new_serieNumber = 0;
    if (e.target.value === "Poprzedni") {
      new_serieNumber = this.state.serieNumber - 1;
      if (new_serieNumber === 1) {
        this.setState(prevState => ({
          prevSerieNumber: this.state.serieNumber,
          serieNumber: new_serieNumber,
          buttonNext: !prevState.buttonNext,
          buttonPrev: !prevState.buttonPrev
        }));
      } else if (new_serieNumber > 1) {
        this.setState({
          serieNumber: new_serieNumber
        });
      } else {
        //stan zapobiegawczy
        this.setState(prevState => ({
          buttonPrev: !prevState.buttonPrev,
          buttonNext: !prevState.buttonNext
        }));
      }
      // console.log("check: " + this.state.serieNumber);
      // this.starter(true);
    } else if (e.target.value === "Nastepny") {
      new_serieNumber = this.state.serieNumber + 1;
      if (new_serieNumber === this.state.serieMax) {
        this.setState(prevState => ({
          prevSerieNumber: this.state.serieNumber,
          serieNumber: new_serieNumber,
          buttonNext: !prevState.buttonNext,
          buttonPrev: !prevState.buttonPrev
        }));
      } else if (new_serieNumber < this.state.serieMax) {
        this.setState({
          serieNumber: new_serieNumber
        });
      } else {
        //stan zapobiegaczy
        this.setState(prevState => ({
          buttonNext: !prevState.buttonNext,
          buttonPrev: !prevState.buttonPrev
        }));
      }
      // console.log("check: " + this.state.serieNumber);
      // this.starter(true);
    }
  };
  changeValueWorkOut = (id, draft, number) => {
    //przeslane id - ktory przycisk ,value - wartosc zmian , number- numer cwiczenia
    // console.log(id + " , " + value + " , " + number);
    // console.log(this.props.data);
    const serieNumber = this.state.serieNumber; //numer serii
    // const workOutNumber = number; //numer cwiczenia
    // console.log(id + " , " + draft + " , " + serieNumber + " , " + number);
    this.props.changeValue(id, draft, number, serieNumber);
  };
  render() {
    const it = this.state;
    console.log("OptionPanel");
    return (
      <>
        {it.buttonPrev ? (
          <input type="button" value="Poprzedni" onClick={this.checkSeries} />
        ) : null}
        <span>Seria {it.serieNumber}</span>
        {it.buttonNext ? (
          <input type="button" value="Nastepny" onClick={this.checkSeries} />
        ) : null}
        {it.WorkOut.map(key => (
          <>
            <li>{key.name}</li>
            {key.visible ? (
              <OptionWorkOut
                data={
                  this.props.data["seria_" + it.serieNumber]["cw_" + key.number]
                }
                changeValue={this.changeValueWorkOut}
                number={key.number}
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
