import { useEffect } from "react";
import axios from "../../node_modules/axios/index";
import { APP_ENV } from "../env/index";
import { useGetListQuery } from "../services/apiCategory";


const HomePage = () => {
    const { data, isLoading, error } = useGetListQuery();
    console.log("DATA REDUX", data);
    console.log("isLoading REDUX", isLoading);
    console.log("error REDUX", error);
    useEffect(() => {
        axios.get(`${APP_ENV.REMOTE_BASE_URL}/api/categories`)
            .then(resp=> {
                console.log("Результат запиту", resp);
            });
    }, []);

    return (
        <>
         

            <h1>Home Page</h1>
        </>
    )
}

export default HomePage;

