import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getApiData} from "./getApiData";
import TermsOfUse from "./terms/termsOfUseComponent";
import ImageCollection from "./imageCollection/ImageCollectionComponent";
import {dispatchApiData} from "./dispatchApiData";

const App = () => {
    const dispatch = useDispatch();
    const apiData = async () => {
    const data = await getApiData();

    if(data)
        dispatchApiData(data, dispatch);
    }

    apiData();

    const isAccepted = useSelector(state => state.stateData.accepted);
    return (
        <div className="App">
            {!isAccepted && <TermsOfUse/>}
            {isAccepted && <ImageCollection/>}
        </div>
    );
}

export default App;