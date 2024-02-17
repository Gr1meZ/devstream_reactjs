import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getApiData} from "./getApiData";
import TermsOfUse from "./terms/termsOfUseComponent";
import ImageCollection from "./imageCollection/ImageCollectionComponent";

const App = () => {
    const dispatch = useDispatch();

    getApiData(dispatch);

    const isAccepted = useSelector(state => state.stateData.accepted);
    return (
        <div className="App">
            {!isAccepted && <TermsOfUse/>}
            {isAccepted && <ImageCollection/>}
        </div>
    );
}

export default App;