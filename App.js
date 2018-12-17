import React, { Component } from "react";
// import Button from "../src/Button.js";
// import WorkItem from "../src/WorkItem";
import ListFBW from "./ListWorkOut/ListFBW";
import ListWeight from "../src/ListWeight/ListWeight";
import TypeList from "../src/TypeList";
import "./App.css";

var data = {
  FBW: {
    name: "FBW",
    ilosc_list: 2,
    lista_1: {
      opcje_listy: {
        ilosc_przerwy_cw: 30,
        ilosc_przerwy_ser: 120,
        ilosc_ser: 2,
        ilosc_cwiczen: 2
      },
      seria_1: {
        cw_1: {
          name: "pompki",
          opis: "polozyc sie na podlodze",
          ilosc_dod_obc: 5,
          ilosc_powt_w_cw: 10
        },
        cw_2: {
          name: "brzuszki",
          opis: "na podlodze zginac sie",
          ilosc_dod_obc: 0,
          ilosc_powt_w_cw: 15
        }
      },
      seria_2: {
        cw_1: {
          name: "pompki",
          opis: "polozyc sie na podlodze",
          ilosc_dod_obc: 10,
          ilosc_powt_w_cw: 10
        },
        cw_2: {
          name: "brzuszki",
          opis: "na podlodze zginac sie",
          ilosc_dod_obc: 5,
          ilosc_powt_w_cw: 15
        }
      }
    },
    lista_2: {
      opcje_listy: {
        ilosc_przerwy_cw: 30,
        ilosc_przerwy_ser: 120,
        ilosc_ser: 2,
        ilosc_cwiczen: 2
      },
      seria_1: {
        cw_1: {
          name: "podciaganie",
          opis: "na drazku",
          ilosc_dod_obc: 5,
          ilosc_powt_w_cw: 10
        },
        cw_2: {
          name: "brzuszki",
          opis: "na podlodze zginac sie",
          ilosc_dod_obc: 0,
          ilosc_powt_w_cw: 15
        }
      },
      seria_2: {
        cw_1: {
          name: "podciaganie",
          opis: "na drazku",
          ilosc_dod_obc: 10,
          ilosc_powt_w_cw: 10
        },
        cw_2: {
          name: "brzuszki",
          opis: "na podlodze zginac sie",
          ilosc_dod_obc: 5,
          ilosc_powt_w_cw: 15
        }
      }
    }
  },
  WEIGHT: {
    name: "WEIGHT"
  }
};
var dataJson = JSON.stringify(data);
var dataJsonParse = JSON.parse(dataJson);
// console.log(dataJsonParse.FBW["lista_" + 1]);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataJsonParse,
      id: 1,
      type: true
    };
  }
  handleAddWorkOut = (value, name) => {
    //nowe cwiczenie musi pojawic sie w kazdej serii + zwiekszyc o jeden ilosc cwiczen, w aktualnej liscie
    //potrzebne informacje: jaki rodzaj listy, ktora lista[OK], nazwa cwiczenia

    //WARRING moze generowac błedy ponieważ niby dane przypisałem do zmiennych a i tak pracuje na orginalnym obiekcie
    //brak uzycia setState!!!!
    console.log(value + " , " + name);
    const idActualList = this.state.id;
    const actualList = this.state.data[name]["lista_" + idActualList];
    const counterSeries = actualList["opcje_listy"]["ilosc_ser"];
    let counterWorkOut = actualList["opcje_listy"]["ilosc_cwiczen"] + 1;
    const templateObject = {
      name: value,
      opis: "",
      ilosc_dod_obc: "",
      ilosc_powt_w_cw: ""
    };

    actualList["opcje_listy"]["ilosc_cwiczen"] =
      actualList["opcje_listy"]["ilosc_cwiczen"] + 1;
    for (let i = 1; i <= counterSeries; i++) {
      actualList["seria_" + i]["cw_" + counterWorkOut] = templateObject;
    }
    console.log(this.state.data);
    this.setState({
      //uzycie tylko po to by sie przerenderowal App  "Sztucznie"
      id: idActualList
    });
  };
  handleAddNewList = () => {
    const tmp_list = this.state.list;
    tmp_list.push({ task: [] });
    this.setState({
      list: tmp_list
    });
    this.handlechangeId(this.state.list.length);
  };
  handlePositionWorkOut = () => {};
  handlechangeId = number => {
    this.setState({
      id: number
    });
  };
  handleChangeTypeList = e => {
    //OK
    console.log(e.target.value);
    if (e.target.value === "FBW") {
      this.setState({
        type: true
      });
    } else if (e.target.value === "WEIGHT") {
      this.setState({
        type: false
      });
    }
  };
  render() {
    console.log("App");
    console.log(this.state.data);
    return (
      <div className="App">
        <TypeList ChangeTypeList={this.handleChangeTypeList} />
        {this.state.type ? (
          <ListFBW //brak funkcji usucienia cwiczenia / wyczyszczenia/usuniecia listy
            changeId={this.handlechangeId}
            addWorkOut={this.handleAddWorkOut} //dodanie cwiczenia do wybranej listy
            addNewList={this.handleAddNewList} //dodanie nowej listy
            positionWorkOut={this.handlePositionWorkOut} //mozliwosc zamiany miejscami cwiczen
            data={this.state.data.FBW} //wysylana lista
            idList={this.state.id} //id listy
          />
        ) : (
          <ListWeight
            changeId={this.handlechangeId}
            // lenghtList={this.state.list.length}
            addNewList={this.handleAddNewList}
          />
        )}
      </div>
    );
  }
}

export default App;
