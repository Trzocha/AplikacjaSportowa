import React from "react";
import PanelSettingsWO from "./PanelSettingsWO";
import PanelSettingsList from "./PanelSettingsList";
import PanelAddWorkOut from "./PanelAddWorkOut";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 20px;
  font-family: "Play";
  margin: 10px 0;
  justify-content: center;
`;
const StyledSection = styled.section`
  /* display: flex; */
  position: relative;
  width: 90%;
  margin: 0 auto;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  background-color: #455361;
`;
const Panel = props => {
  const id = props.idList;
  // console.log("Panel");
  return (
    <>
      <H1>Lista Ćwiczeń: </H1>
      <PanelSettingsList
        data={props.data["lista_" + id].opcje_listy}
        changeValue={props.changeInputValueList} //zmiana wlasciwosci w opcjach listy
      />
      <StyledSection>
        <PanelSettingsWO
          data={props.data["lista_" + id]}
          idList={id}
          changeValue={props.changeInputValueWorkOut} //zmiana wlasciwosci w opcjach danego cwiczenia
          amountList={props.data["ilosc_list"]}
          deleteWorkOut={props.deleteWorkOut}
        />
        <PanelAddWorkOut addWorkOut={props.addWorkOut} data={props.data.name} />
      </StyledSection>
    </>
  );
};

export default Panel;
