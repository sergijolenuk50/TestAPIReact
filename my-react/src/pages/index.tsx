// import { useEffect, useState } from "react";
// import axios from "../../node_modules/axios/index";
// import { APP_ENV } from "../env/index";
// import { useGetListQuery } from "../services/apiCategory";
// import {useCreateCategoryMutation, useGetCategoriesQuery} from "../../se/apiCategory.ts";

import { useGetCategoriesQuery, useCreateCategoryMutation } from "../services/apiCategory";


const HomePage = () => {
    // const { data: list, isLoading, error } = useGetListQuery();
    const {data: list, isLoading, error, refetch} = useGetCategoriesQuery();
    // console.log("DATA REDUX", list);
    // console.log("isLoading REDUX", isLoading);
    // console.log("error REDUX", error);

    // const [myList, setMyList] = useState<CategoryItem[]>([]);

    // useEffect(() => {
    //     axios.get<CategoriItem[]>(`${APP_ENV.REMOTE_BASE_URL}/api/categories`)
    //         .then(resp=> {
    //             setMyList(resp.data); //записує у state дані що прийшли з сервера
    //             console.log("Результат запиту", resp);
    //         });
    // }, []);
    const [createCategory] = useCreateCategoryMutation();
                    //myList
    const mapData = list?.map((category) => (
        <tr key={category.id}
            className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {category.name}
            </th>
            <td className="px-6 py-4">
                {category.slug}
            </td>
            <td className="px-6 py-4">
                {category.description}
            </td>
            <td className="px-6 py-4">
                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
        </tr>
    ));



    // const mapData = myList.map((category) => (
    //     <li key={category.id}>
    //         <h2>{category.name}</h2>
    //         <p>Slug: {category.slug}</p>
    //         <p>Description: {category.description}</p>
    //     </li>
    // ));
    const addNewCategoryClick = async () => {
        try {
            await createCategory({name: "bla bla bla ", slug: "kovbasa-slag12", description: "Дуже крута ковбаса" })
                .unwrap(); // unwrap для роботи з помилками
            refetch(); // Повторний запит для оновлення списку
            console.log('Категорію успішно створено');
        } catch (error) {
            console.error('Помилка при створенні категорії:', error);
        }
    }

    return (
        <>
         <button onClick={addNewCategoryClick} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                Червона кнопка
            </button>

         <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Назва
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Slug
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Опис
                        </th>
                        <th scope="col" className="px-6 py-3">

                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {mapData}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default HomePage;

