import baseApi from "./baseApi";
import {setImages, setTerms} from "./redux/slices/dataSlice";
import {useEffect} from "react";


export const getApiData = async (dispatch) => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const fetchData = async () => {
             await fetch(`${baseApi}/static/test.json`)
                .then(result => result.json())
                .then(data => {
                    data.terms_of_use.paragraphs.sort((a, b) => a.index - b.index);
                    dispatch(setTerms(data.terms_of_use));
                    dispatch(setImages(data.images));
                })
                .catch(error => console.log(error));
        }
        fetchData();
    }, [dispatch])
}



