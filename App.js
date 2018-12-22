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
          name: "pom",
          opis: "na podlodze",
          ilosc_dod_obc: 10,
          ilosc_powt_w_cw: 15
        },
        cw_2: {
          name: "brzu",
          opis: "zginac sie",
          ilosc_dod_obc: 5,
          ilosc_powt_w_cw: 20
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

    const copy_data = JSON.parse(JSON.stringify(this.state.data)); //kopiowanie glebokie
    const idActualList = this.state.id;
    const actualList = copy_data[name]["lista_" + idActualList];
    const counterSeries = actualList["opcje_listy"]["ilosc_ser"];
    let counterWorkOut = actualList["opcje_listy"]["ilosc_cwiczen"] + 1;
    const templateWorkOut = {
      name: value,
      opis: "",
      ilosc_dod_obc: "",
      ilosc_powt_w_cw: ""
    };

    actualList["opcje_listy"]["ilosc_cwiczen"] =
      actualList["opcje_listy"]["ilosc_cwiczen"] + 1;
    for (let i = 1; i <= counterSeries; i++) {
      actualList["seria_" + i]["cw_" + counterWorkOut] = templateWorkOut;
    }
    this.setState({
      data: copy_data
    });
  };
  handleAddNewList = name => {
    const templateList = {
      opcje_listy: {
        ilosc_przerwy_cw: "",
        ilosc_przerwy_ser: "",
        ilosc_ser: 1,
        ilosc_cwiczen: 0
      },
      seria_1: {}
    };

    let copy_data = JSON.parse(JSON.stringify(this.state.data));
    let actualData = copy_data[name];
    let amountList = actualData["ilosc_list"] + 1;

    actualData["ilosc_list"] = actualData["ilosc_list"] + 1; //zwiekszenie liczby list
    actualData["lista_" + amountList] = templateList; //dodanie szablonu listy

    this.setState({
      data: copy_data
    });

    this.handlechangeId(amountList);
  };
  handleAddSeries = (object, copy_data) => {
    const number_series =
      copy_data[object.list_name]["lista_" + object.list_number]["opcje_listy"][
        "ilosc_ser"
      ] + 1;

    const template_series =
      copy_data[object.list_name]["lista_" + object.list_number]["seria_1"]; //szablon to kopia pierwszej serii

    copy_data[object.list_name]["lista_" + object.list_number]["opcje_listy"][
      "ilosc_ser"
    ] = number_series;

    copy_data[object.list_name]["lista_" + object.list_number][
      "seria_" + number_series
    ] = template_series;
  };
  handleDeleteSeries = (object, copy_data) => {
    //pomysl na usuwaie serii: usuwam ostatnia serie, ponieważ robie x serii a jezeli nie daje rady zrobic x+1 to po co mi
    // ta seria. Cwiczenia są te same w kazdej serii

    const max_number_series =
      copy_data[object.list_name]["lista_" + object.list_number]["opcje_listy"][
        "ilosc_ser"
      ];
    if (max_number_series > 1) {
      delete copy_data[object.list_name]["lista_" + object.list_number][
        "seria_" + max_number_series
      ];
      copy_data[object.list_name]["lista_" + object.list_number]["opcje_listy"][
        "ilosc_ser"
      ] = max_number_series - 1;
    }
  };
  handlePositionWorkOut = () => {};
  handlechangeId = number => {
    this.setState({
      id: number
    });
  };
  handleChangeTypeList = e => {
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
  handlerChangeValueOptionList = object => {
    const copy_data = JSON.parse(JSON.stringify(this.state.data));
    const option_list = ["", "ilosc_przerwy_cw", "ilosc_przerwy_ser"];

    if (object.id_input === "3") {
      this.handleAddSeries(object, copy_data);
    } else if (object.id_input === "4") {
      console.log("USUN");
      this.handleDeleteSeries(object, copy_data);
    } else {
      copy_data[object.list_name]["lista_" + object.list_number]["opcje_listy"][
        option_list[object.id_input]
      ] = object.value_input;
    }

    this.setState({
      data: copy_data
    });
  };
  handlerChangeValueOptionWorkOut = object => {
    const copy_data = JSON.parse(JSON.stringify(this.state.data));
    const option_list = ["", "ilosc_powt_w_cw", "ilosc_dod_obc", "opis"];

    copy_data[object.list_name]["lista_" + object.list_number][
      "seria_" + object.serie_number
    ]["cw_" + object.workOut_number][option_list[object.id_input]] =
      object.value_input;

    this.setState({
      data: copy_data
    });
  };
  render() {
    console.log("App");
    return (
      <div className="App">
        <TypeList ChangeTypeList={this.handleChangeTypeList} />
        {this.state.type ? (
          <ListFBW //brak funkcji usuniecia cwiczenia / wyczyszczenia/usuniecia listy
            changeId={this.handlechangeId}
            addWorkOut={this.handleAddWorkOut} //dodanie cwiczenia do wybranej listy
            addNewList={this.handleAddNewList} //dodanie nowej listy
            positionWorkOut={this.handlePositionWorkOut} //mozliwosc zamiany miejscami cwiczen
            data={this.state.data.FBW} //wysylana lista
            idList={this.state.id} //id listy
            changeInputList={this.handlerChangeValueOptionList} //funkcja zmian w opcjach listy
            changeInputWorkOut={this.handlerChangeValueOptionWorkOut} //funkcja zmian w opcjach cwiczenia
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
