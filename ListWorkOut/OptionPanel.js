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
    actualIdList: this.props.idList,
    flaglastSeries: false,
    flagPrevlastSeries: false,
    flagChangeNameWorkOut: false
  };
  starter = flag => {
    //montowanie nowej tablicy wyzbieranej z danch by wykonac map() cwiczenia
    const amountWorkOut = this.props.data["opcje_listy"]["ilosc_cwiczen"];
    let tmp_arr = [];
    let flag_value = 1;
    //flaga wykoanania  Did czy Update (false did, true Update)
    if (flag) {
      flag_value = this.state.serieNumber;
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
    this.setState({
      WorkOut: tmp_arr
    });
  };
  componentDidMount = () => {
    this.starter(false);
  };
  componentDidUpdate = prevProps => {
    const actualCOUNTER = this.props.data["opcje_listy"]["ilosc_cwiczen"]; //gdy zmienia sie liczba cwiczen
    // const deleteUpdate = this.props.deleteFlag;

    if (prevProps.amountList !== this.props.amountList) {
      this.starter(true);
    }
    //flaga decyduje czy jest update tablicy WorkOut poprzez funkcje starter, flaga zmieniana jest gdy zmienia sie
    //wartosc nazwy cwiczenia, nastepnie po aktualizacji tablicy WorkOut ,zmieniamy ponownie stan flagi na "false"
    if (this.state.flagChangeNameWorkOut) {
      this.starter(true);
      this.changeNameWorkOut();
    }
    if (this.state.counterWorkOut !== actualCOUNTER) {
      this.starter();
      this.setState({
        counterWorkOut: actualCOUNTER
      });
    }

    if (this.state.serieNumber !== this.state.prevSerieNumber) {
      //gdy przechodzimy z jednej do drugiej serri
      //wywoalanie przy zmianie serii
      this.starter(true);
      this.setState({
        prevSerieNumber: this.state.serieNumber
      });
    }

    //odblokowanie gdy jestem w widoku na przedostatniej serii (linia 158)
    if (
      this.state.serieNumber + 1 === this.state.serieMax &&
      this.state.flagPrevlastSeries
    ) {
      this.setState({
        flagPrevlastSeries: false
      });
    }

    if (this.state.actualIdList !== this.props.idList) {
      //gdy zmienia sie cala lista
      const currentMaxSeries = this.props.data["opcje_listy"]["ilosc_ser"];
      this.setState({
        actualIdList: this.props.idList,
        serieMax: currentMaxSeries //nowa lista , nowy stan serii
      });
      if (currentMaxSeries === 1) {
        //button next musi zniknac bo jest jedna seria gdy dodajemy liste
        this.setState({
          buttonNext: false,
          buttonPrev: false
        });
      }
      this.starter();
    }

    //gdy zmienia sie liczba serii
    if (this.state.serieMax !== this.props.data["opcje_listy"]["ilosc_ser"]) {
      // console.log("ZMIANA");
      if (parseInt(this.props.data["opcje_listy"]["ilosc_ser"]) === 1) {
        //sprawdzenie. w przypadku dodania nowej listy liczba serii jest rowna 0
        //wiec jest brak widocznych przyciskow, lecz gdy dodaje druga serie przycisk next ma sie pojawic
        this.setState({
          serieMax: this.props.data["opcje_listy"]["ilosc_ser"]
        });
      } else {
        this.setState({
          serieMax: this.props.data["opcje_listy"]["ilosc_ser"],
          buttonNext: true,
          flaglastSeries: false
        });
      }
    }
    //gdy usuwam serie
    if (this.props.data["opcje_listy"]["ilosc_ser"] <= this.state.serieNumber) {
      //do zrobienia: sa 3 serie i jestem na 2 seri, usuwam serie ostatnia lecz nie wskakuje do seri pierwszej
      //lub moze widoku nie zmineiac a pobawic sie w chowanie przyciskow

      if (this.props.data["opcje_listy"]["ilosc_ser"] === 1) {
        //skrajny przypadek gdy sa 2 serie a ja usuwam jedna i jedna zostaje

        if (!this.state.flaglastSeries) {
          if (
            this.state.serieNumber > this.props.data["opcje_listy"]["ilosc_ser"]
          ) {
            //jezeli aktualnie znajduje sie widok na 2 serii i wlaśnia ta 2 serie usuwam. Ustawiam widok na 1 serie
            //chowam przycik i ustawiam flage
            this.setState({
              serieNumber: 1,
              prevSerieNumber: 1,
              buttonPrev: false,
              flaglastSeries: true
            });
          } else if (
            this.state.serieNumber ===
            this.props.data["opcje_listy"]["ilosc_ser"]
          ) {
            //jezeli jestem na 1 serri a usuwam 2, chowam przycisk i ustawiam flage
            this.setState({
              buttonNext: false,
              flaglastSeries: true
            });
          }
        }
      } else if (
        this.props.data["opcje_listy"]["ilosc_ser"] < this.state.serieNumber
      ) {
        if (
          this.state.serieNumber - 1 ===
          this.props.data["opcje_listy"]["ilosc_ser"]
        ) {
          //jezeli jest wiecej niz 2 serie np 3 i widok jest ustawiony na 3, ustawiam na widok o jeden mniejszy
          //i chowam przycisk next
          console.log("!!!!!!!");
          this.setState({
            serieNumber: this.props.data["opcje_listy"]["ilosc_ser"],
            prevSerieNumber: this.props.data["opcje_listy"]["ilosc_ser"],
            buttonNext: false
          });
        }
      } else if (
        //linia 158 warunek , gdy jestem na przedosttanim widoku serii usuwam ostatnia serie , chowam przycisk next
        this.props.data["opcje_listy"]["ilosc_ser"] ===
          this.state.serieNumber &&
        !this.state.flagPrevlastSeries
      ) {
        this.setState({
          buttonNext: false,
          flagPrevlastSeries: true
        });
      }
    }
  };
  handleClik = e => {
    //obsluga pojawiania i chowania sie opcji dla cwiczenia
    let st = this.state.WorkOut.slice(); //kopiuje cala tablice, a w setState cala podmieniam
    const id = e.target.name;
    const value = e.target.value;

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
    let new_serieNumber = 0;
    if (e.target.value === "Poprzedni") {
      new_serieNumber = this.state.serieNumber - 1;
      if (new_serieNumber === 1) {
        this.setState({
          prevSerieNumber: this.state.serieNumber,
          serieNumber: new_serieNumber,
          buttonNext: true,
          buttonPrev: false
        });
      } else if (new_serieNumber > 1) {
        this.setState({
          serieNumber: new_serieNumber,
          buttonNext: true
        });
      }
    } else if (e.target.value === "Nastepny") {
      new_serieNumber = this.state.serieNumber + 1;
      console.log(new_serieNumber);
      if (new_serieNumber === this.state.serieMax) {
        this.setState({
          prevSerieNumber: this.state.serieNumber,
          serieNumber: new_serieNumber,
          buttonPrev: true,
          buttonNext: false
        });
      } else if (new_serieNumber < this.state.serieMax) {
        this.setState({
          serieNumber: new_serieNumber,
          buttonPrev: true
        });
      }
    }
  };
  changeValueWorkOut = (id, draft, number) => {
    //przeslane id - ktory przycisk ,value - wartosc zmian , number- numer cwiczenia
    const serieNumber = this.state.serieNumber; //numer serii

    this.props.changeValue(id, draft, number, serieNumber);
    this.changeNameWorkOut();
  };
  changeNameWorkOut = () => {
    this.setState(prevState => ({
      flagChangeNameWorkOut: !prevState.flagChangeNameWorkOut
    }));
  };
  deleteWorkOut = number => {
    const object = {
      id_list: this.props.idList,
      number_workout: number
    };
    this.props.deleteWorkOut(object);
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
                deleteWorkOut={this.deleteWorkOut}
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
