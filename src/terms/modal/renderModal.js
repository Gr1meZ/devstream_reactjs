import {Modal, Button} from 'react-bootstrap';
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {termsAccepted} from "../../redux/slices/dataSlice";


const RenderModal = () => {
    const [show, setShow] = useState(true);
    const [checked, setChecked] = useState(false);

    let terms = useSelector(state => state.stateData.terms);
    const dispatch = useDispatch();
    const handleClose = () => {
        setShow(false);
    };

    const handleCheck = (event) => {
        setChecked(event.target.checked);
    };

    const handleSave = () => {
        dispatch(termsAccepted(true));
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size={"xl"} scrollable={true}>
            <Modal.Header closeButton>
                <Modal.Title>Terms of use</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {terms ? (
                    terms.paragraphs.map(paragraph => (
                        <div key={paragraph.index}>
                            <h3>{paragraph.title}</h3>
                            <p>{paragraph.content}</p>
                        </div>
                    ))
                ) : (

                    <p>No data</p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="agreeCheckBox"
                        checked={checked}
                        onChange={handleCheck}
                    />
                    <label className="form-check-label" htmlFor="agreeCheckBox">
                        I agree with terms of use
                    </label>
                </div>
                <Button variant="primary" onClick={handleSave} disabled={!checked}>
                    Agree
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default RenderModal;