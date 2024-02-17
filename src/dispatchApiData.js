import {setImages, setTerms} from "./redux/slices/dataSlice";

export const dispatchApiData = (data, dispatch) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    dispatch(setTerms(data.terms_of_use));
    dispatch(setImages(data.images));
}