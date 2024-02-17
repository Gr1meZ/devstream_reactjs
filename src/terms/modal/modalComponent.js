import RenderModal from "./renderModal";

const ModalComponent =({onAccept, terms}) => {

    return (
        <RenderModal terms={terms} onAccept={onAccept}/>
    )
}

export default ModalComponent;