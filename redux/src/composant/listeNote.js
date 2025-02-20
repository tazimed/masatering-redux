import React from "react";
import { useSelector } from "react-redux";

function ListeNote() {
  let information = useSelector((state) => state.information);

  console.log("Données dans ListeNote :", information); // Debugging

  if (!Array.isArray(information) || information.length === 0) {
    return <div>Aucune donnée à afficher</div>;
  }

  return (
    <ul>
      {information.map((element, index) => (
        <li key={index}>
          {element.note} : {element.detailNote}
        </li>
      ))}
    </ul>
  );
}

export default ListeNote;
