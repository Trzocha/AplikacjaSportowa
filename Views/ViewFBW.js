import React, { Component } from "react";
import Clock from "../Views/Clock";

class ViewFBW extends Component {
  state = {
    descriptions: [],
    names: [],
    options: [],
    counter_options: 0,
    amountSeries: this.props.data["opcje_listy"]["ilosc_ser"],
    amountWorkOut: this.props.data["opcje_listy"]["ilosc_cwiczen"],
    hideView: false,
    active_series: 1,
    active_workout: 1,
    flag_end: false, //sztuczny stan, na razie pomocniczy
    timer: 0
  };

  componentDidMount = () => {
    const data = this.props.data["seria_1"];
    const copy_descriptions = [];
    const copy_names = [];

    for (let i = 0; i < this.state.amountWorkOut; i++) {
      copy_descriptions[i] = data["cw_" + (i + 1)]["opis"];
      copy_names[i] = data["cw_" + (i + 1)]["name"];
    }

    this.infillOptions();

    this.setState({
      descriptions: copy_descriptions,
      names: copy_names
    });

    if (this.state.amountWorkOut === 1) {
      //jezeli jest 1 cw w serii
      this.setState({
        timer: this.props.data["opcje_listy"]["ilosc_przerwy_ser"]
      });
    } else {
      //jezeli jest wiecej cwiczen w serii
      this.setState({
        timer: this.props.data["opcje_listy"]["ilosc_przerwy_cw"]
      });
    }
    //skrajny przypadek gdy jest 1 seria i 1 cw
    if (this.state.amountWorkOut === 1 && this.state.amountSeries === 1) {
      this.setState({
        flag_end: true
      });
    }
  };
  handlerClick = () => {
    this.setState({
      hideView: true
    });
  };
  infillOptions = () => {
    //funckja wypelniajaca tablice options wartosciami opcji dla danego cwiczenia w serii
    //parzyste ilosc_dod_obc , nieparzyste ilosc_powt_w_cw
    const copy_options = [];

    const series = this.state.active_series;
    for (let j = 0; j < this.state.amountWorkOut; j++) {
      copy_options[j * 2] = this.props.data["seria_" + series]["cw_" + (j + 1)][
        "ilosc_dod_obc"
      ];
      copy_options[j * 2 + 1] = this.props.data["seria_" + series][
        "cw_" + (j + 1)
      ]["ilosc_powt_w_cw"];
    }
    this.setState({
      options: copy_options
    });
  };
  handlerNext = () => {
    this.setState({
      //ustawia flage widoku listy z cwiczeniami
      hideView: false
    });
    this.controlerApp();
  };
  controlerApp = () => {
    if (this.state.active_workout < this.state.amountWorkOut) {
      //czy ilosc cw doszla do max
      this.setState(prevState => ({
        active_workout: prevState.active_workout + 1,
        counter_options: prevState.counter_options + 2
      }));
      //   console.log(this.state.active_series + " : " + this.state.amountSeries);
      //   console.log(this.state.active_workout + " : " + this.state.amountWorkOut);

      //zakonczenie cyklu cwiczen, powinien byc powrót do widoku wyboru listy (nie sprawdza sie przy 2 seriach 1 cw)
      if (
        this.state.active_series === this.state.amountSeries &&
        this.state.active_workout === this.state.amountWorkOut
      ) {
        console.log("KONIEC ZEGARA");
        this.setState({
          flag_end: true
        });
      }
    } else {
      //przechodzmy do nastepnej serii
      this.setState(prevState => ({
        active_workout: 1,
        counter_options: 0,
        active_series: prevState.active_series + 1
      }));
      this.infillOptions(); //ponownie wypelnianie tablicy opcji
    }

    if (this.state.active_workout === this.state.amountWorkOut) {
      //gdy dochodzimy do max liczy cw przerwe trzeba ustawic na przerwe seryjna
      this.setState({
        timer: this.props.data["opcje_listy"]["ilosc_przerwy_ser"]
      });
    }

    if (this.state.active_workout === 1) {
      //gdy przechodzmy do nastepnej serri czy aktyczne cziczenie jest pierwsze ustawiamy zegar na przerwe miedzy cw
      this.setState({
        timer: this.props.data["opcje_listy"]["ilosc_przerwy_cw"]
      });
    }
    //skrajny przypadek, GDY JEST WIECEJ SERII A JEDNO CW
    if (
      this.state.amountSeries === this.state.active_series &&
      this.state.amountWorkOut === 1
    ) {
      this.setState({
        flag_end: true
      });
    }
  };
  render() {
    const {
      hideView,
      timer,
      active_series,
      active_workout,
      counter_options,
      flag_end,
      options,
      descriptions,
      names
    } = this.state;
    return (
      <>
        {hideView ? (
          <Clock value={timer} next={this.handlerNext} />
        ) : (
          <div>
            <h1>Seria {active_series}</h1>
            <ul>
              <li>{names[active_workout - 1]}</li>
              <li>Ilość powturzeń :{options[counter_options]}</li>
              <li>Dodadkowy ciężar: {options[counter_options + 1]} </li>
              <li>{descriptions[active_workout - 1]}</li>
            </ul>
            {flag_end ? (
              <input
                type="button"
                value="Dalej"
                onClick={this.props.endWorkOut}
              />
            ) : (
              <input
                type="button"
                value="Odliczaj Przerwe"
                onClick={this.handlerClick}
              />
            )}
          </div>
        )}
      </>
    );
  }
}

export default ViewFBW;
