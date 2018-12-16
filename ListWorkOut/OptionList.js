import React from "react";

const OptionList = props => {
  const it = props.data;
  return (
    <>
      Ilosc Przerwy miedzy cwiczeniami [sek]:{it.ilosc_przerwy_cw + "   "}
      <input type="number" min="0" max="179" />
      <input type="submit" />
      <br />
      Ilosc Przerwy miedzy seriami [sek]:{it.ilosc_przerwy_ser + "  "}
      <input type="number" min="0" max="179" />
      <input type="submit" />
      <br />
      Ilosc serii: {it.ilosc_ser} <input type="number" min="0" max="10" />
      <input type="submit" />
      <br />
    </>
  );
};

export default OptionList;
