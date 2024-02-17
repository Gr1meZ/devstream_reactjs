import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useEffect, useState} from "react";
import baseApi from "./state";
import ImageCollection from "./imageCollection/ImageCollectionComponent";
import TermsOfUse from "./terms/termsOfUseComponent";

const App = () => {
    const [data, setData] = useState(null);
    const [accepted, setAccepted] = useState(false);

    const handleAccept = () => {
        setAccepted(true);
    };

    useEffect(() => {

        fetch(`${baseApi}/static/test.json`)
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    console.log(data);
    return (
        <div className="App">
            {data && !accepted && <TermsOfUse  terms={data.terms_of_use} handleAccept={handleAccept} accepted={accepted}/>}
            {data && accepted && <ImageCollection images={data.images}/>}
        </div>
    );
}

export default App;