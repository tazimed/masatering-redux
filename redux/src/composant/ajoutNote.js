import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { ajouterNote } from "../redux/actions/actions";

function AjoutNote() {
  const [information, setInformation] = useState({
    note: "note1",
    detailNote: "description 1",
  });

const dispatch = useDispatch()
function handelSubmit(){
  dispatch(ajouterNote(information))
  console.log(information)
}
  return (
    <div>
      <label>nom de la note :</label>
      <input
        type="text"
        value={information.note}
        onChange={(e) =>
          setInformation({ ...information, note: e.target.value })
        }
      />
      <br />
      <label>description de la note :</label>
      <input
        type="text"
        value={information.detailNote}
        onChange={(e) =>
          setInformation({ ...information, detailNote: e.target.value })
        }
      />
      <button onClick={handelSubmit}>Ajouter Note</button>
    </div>
  );
}
// const mapDispatchToProps = (dispatch) => ({
//   ajouterNote: (data) => dispatch(ajouterNote(data)),
// });

export default AjoutNote;
