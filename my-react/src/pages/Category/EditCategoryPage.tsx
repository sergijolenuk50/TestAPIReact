// import { Form, Input, Button, notification } from 'antd';
// import {ICategoryPutRequest} from "../../services/types.ts";
// import TextArea from "antd/es/input/TextArea";
// import {useNavigate} from "react-router-dom";
// import {useCreateCategoryMutation} from "../../services/apiCategory.ts";


// const { Item } = Form;
// const EditCategoryPage = () => {

// const{id} = useParams<{id : string}>{};

// const { data: category } = useGetCategoryQuery(Number(id));

//     // console.log("Edit category", category);

//     // const [createCategory] = useCreateCategoryMutation();
//     const [createCategory] = useCreateCategoryMutation();
//     const [form] = Form.useForm<ICategoryPutRequest>();


//     const navigation = useNavigate();
//     const onFinish = async (values: ICategoryPostRequest) => {
//         try {
//             // console.log("Create", values);
//             const response = await createCategory(values).unwrap();
//             console.log("Response:", response);
//             notification.success({
//                 message: 'Успішна реєстрація',
//                 description: 'Ви успішно зареєстровані!',
//             });
//             navigation("..");
//             // form.resetFields();
//         } catch (err) {
//             console.error("Помилка cтворення категорії:", err);
//             notification.error({
//                 message: 'Помилка cтворення категорії',
//                 description: 'Щось пішло не так, спробуйте ще раз.',
//             });
//         }
//     };
//     return (
//         <div style={{maxWidth: '400px', margin: '0 auto'}}>
//             <h1 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 my-6">
//                 Зміна категорій
//             </h1>
//             <Form
//                 form={form}
//                 onFinish={onFinish}
//                 layout="vertical"
//             >
//                 <Item
//                     name="name"
//                     label="Назва категорії"
//                     rules={[
//                         {required: true, message: 'Будь ласка, введіть назву категорії!'},
//                         {min: 1, max: 150, message: 'Назва має бути від 1 до 150 символів'},
//                     ]}
//                 >
//                     <Input placeholder="Назва"/>
//                 </Item>
//                 <Item
//                     name="slug"
//                     label="Slug"
//                     rules={[
//                         {required: true, message: 'Будь ласка, введіть slug категорії!'},
//                         {min: 1, max: 150, message: 'slug має бути від 1 до 150 символів'},
//                     ]}
//                 >
//                     <Input placeholder="Slug"/>
//                 </Item>
//                 <Item
//                     name="description"
//                     label="Вкажіть опис"
//                 >
//                     <TextArea
//                         rows={4}
//                         placeholder="Текст..."
//                     />
//                 </Item>
//                 <Item>
//                     <Button type="primary" htmlType="submit" block>
//                         Створити категорію
//                     </Button>
//                 </Item>
//             </Form>
//         </div>
//     );
// };
// export default EditCategoryPage;

import { Form, Input, Button, notification } from 'antd';
import {ICategoryPutRequest} from "../../services/types.ts";
import TextArea from "antd/es/input/TextArea";
import {useNavigate, useParams} from "react-router-dom";
import {useGetCategoryQuery, useUpdateCategoryMutation} from "../../services/apiCategory.ts";

const { Item } = Form;

const EditCategoryPage = () => {

    const { id } = useParams<{ id: string }>();

    const { data: category, isError, isLoading } = useGetCategoryQuery(Number(id));


    const [updateCategory] = useUpdateCategoryMutation();

    const [form] = Form.useForm<ICategoryPutRequest>();

    const navigation = useNavigate();

    const onFinish = async (values: ICategoryPutRequest) => {
        try {
            const category = await updateCategory({...values, id: Number(id)}).unwrap();
            console.log("Update category", category);
            navigation("/categories");

        } catch (err) {
            console.error("Помилка редагування категорії:", err);
            notification.error({
                message: 'Помилка редагування категорії',
                description: 'Щось пішло не так, спробуйте ще раз.',
            });
        }
    };

    if (isLoading) return <div>Loading category...</div>;
    if (isError) return <div>Error loading category.</div>;

    return (
        <div style={{maxWidth: '400px', margin: '0 auto'}}>
            <h1 className="text-center text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 my-6">
                Зміна категорії
            </h1>
            <Form
                form={form}
                onFinish={onFinish}
                layout="vertical"
                initialValues={{
                    name: category?.name,
                    slug: category?.slug,
                    description: category?.description || '',
                }}
            >
                <Item
                    name="name"
                    label="Назва категорії"
                    rules={[
                        {required: true, message: 'Будь ласка, введіть назву категорії!'},
                        {min: 1, max: 150, message: 'Назва має бути від 1 до 150 символів'},
                    ]}
                >
                    <Input placeholder="Назва"/>
                </Item>

                <Item
                    name="slug"
                    label="Slug"
                    rules={[
                        {required: true, message: 'Будь ласка, введіть slug категорії!'},
                        {min: 1, max: 150, message: 'slug має бути від 1 до 150 символів'},
                    ]}
                >
                    <Input placeholder="Slug"/>
                </Item>

                <Item
                    name="description"
                    label="Вкажіть опис"
                >
                    <TextArea
                        rows={4}
                        placeholder="Текст..."
                    />
                </Item>

                <Item>
                    <Button type="primary" htmlType="submit" block>
                        Оновити категорію
                    </Button>
                </Item>
            </Form>
        </div>
    );
};

export default EditCategoryPage;