import baseApi from "./baseApi";
import {useEffect, useState} from "react";
import axios from "axios";

export const getApiData = async () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState(null);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        const getData = async () => {

            await axios.get(`${baseApi}/static/test.json`)
                .then(result => {

                    const data = result.data;
                    data.terms_of_use.paragraphs.sort((a, b) => a.index - b.index);
                    setData(data);
                })
                .catch(error => console.log(error));
        }
        getData();
    }, [])
    return data;
}
