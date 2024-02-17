import {Modal, Button} from 'react-bootstrap';
import React, {useState} from "react";


const RenderModal = ({terms, onAccept}) =>{
    const [show, setShow] = useState(true);
    const [checked, setChecked] = useState(false);
    const handleClose = () => {
        setShow(false);
    };

    const handleCheck = (event) => {
        setChecked(event.target.checked);
    };

    const handleSave = () => {
        onAccept();
        handleClose();
    };

    return (
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} size={"xl"} scrollable={true}>
            <Modal.Header closeButton>
                <Modal.Title>Условия использования</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {terms ? (
                    // if terms data is available, render paragraphs
                    terms.paragraphs.sort((a, b) => a.index - b.index).map(paragraph => (
                        <div key={paragraph.index}>
                            <h3>{paragraph.title}</h3>
                            <p>{paragraph.content}</p>
                        </div>
                    ))
                ) : (
                    // otherwise, show loading message
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