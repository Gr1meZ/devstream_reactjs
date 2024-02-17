import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalComponent from "./modal/modalComponent";

const TermsOfUse = ({terms, accepted, handleAccept}) => {


    return (terms && !accepted && <ModalComponent onAccept={handleAccept} terms={terms}/>)
}


export default TermsOfUse;