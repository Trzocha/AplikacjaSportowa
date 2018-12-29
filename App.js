import React, { Component } from "react";
import StartApp from "../src/Views/StartApp";
import ChosenList from "../src/ChosenList";

var data = {
  FBW: {
    name: "FBW",
    ilosc_list: 4,
    lista_1: {
      opcje_listy: {
        ilosc_przerwy_cw: 1,
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
        ilosc_przerwy_cw: 2,
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
    },
    lista_3: {
      opcje_listy: {
        ilosc_przerwy_cw: 3,
        ilosc_przerwy_ser: 120,
        ilosc_ser: 2,
        ilosc_cwiczen: 2
      },
      seria_1: {
        cw_1: {
          name: "34",
          opis: "na drazku",
          ilosc_dod_obc: 5,
          ilosc_powt_w_cw: 10
        },
        cw_2: {
          name: "55",
          opis: "na podlodze zginac sie",
          ilosc_dod_obc: 0,
          ilosc_powt_w_cw: 15
        }
      },
      seria_2: {
        cw_1: {
          name: "35",
          opis: "na drazku",
          ilosc_dod_obc: 10,
          ilosc_powt_w_cw: 10
        },
        cw_2: {
          name: "56",
          opis: "na podlodze zginac sie",
          ilosc_dod_obc: 5,
          ilosc_powt_w_cw: 15
        }
      }
    },
    lista_4: {
      opcje_listy: {
        ilosc_przerwy_cw: 4,
        ilosc_przerwy_ser: 120,
        ilosc_ser: 2,
        ilosc_cwiczen: 2
      },
      seria_1: {
        cw_1: {
          name: "45",
          opis: "na drazku",
          ilosc_dod_obc: 5,
          ilosc_powt_w_cw: 10
        },
        cw_2: {
          name: "66",
          opis: "na podlodze zginac sie",
          ilosc_dod_obc: 0,
          ilosc_powt_w_cw: 15
        }
      },
      seria_2: {
        cw_1: {
          name: "46",
          opis: "na drazku",
          ilosc_dod_obc: 10,
          ilosc_powt_w_cw: 10
        },
        cw_2: {
          name: "67",
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
      activeClock: false,
      object_data: null
    };
  }

  handlerHideList = object => {
    this.setState({
      activeClock: true,
      object_data: object
    });
  };
  render() {
    console.log("App");
    return (
      <div className="App">
        {!this.state.activeClock ? (
          <ChosenList data={this.state.data} hideList={this.handlerHideList} />
        ) : (
          <StartApp
            data={this.state.object_data}
            active={this.state.activeClock}
          />
        )}
      </div>
    );
  }
}

export default App;
