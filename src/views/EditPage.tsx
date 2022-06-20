import React from "react";
import {Button, Form} from "react-bootstrap";
import PageWrapper from "../components/PageWrapper";
import {formikInputProps} from "../utils/formik";
import {useFormik} from "formik";
import * as yup from "yup";
import {postProduct} from "../api/mainAPI";
import "toastify-js/src/toastify.css";
import Toastify from "toastify-js";
import {strings} from "../constants/strings";
import {useNavigate} from "react-router-dom";
import {HOME} from "../utils/urls";

export interface ProductValues {
    type: string;
    price: number;
    description: string;
    image: string;
}

const schema = yup.object().shape({
    type: yup.string().min(2, "the minimum amount of words is 2").required(),
    price: yup.number().min(2, "the minimum amount of words is 2").required(),
    description: yup.string().min(2, "the minimum amount of words is 2").required(),
    image: yup.string().min(2, "the minimum amount of words is 2").required(),
});

const AddPage: React.FC = () => {
    const validationSchema = schema;
    const navigate = useNavigate();
    const initialValues: ProductValues = {
        type: "",
        price: 0,
        description: "",
        image: "",
    };
    const onSubmit = async (newProduct : ProductValues) => {
        await postProduct(newProduct);
        Toastify({
            text: strings.successfully_created,
            style: {
                background: "linear-gradient(to right, lightgreen, green)",
            },
        }).showToast();
        navigate(HOME);
    };
    const formik = useFormik<ProductValues>({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return (
        <PageWrapper>
            <div className="add-page">
                <form className="add-form" onSubmit={formik.handleSubmit}>
                    <Form.Group className="mb-2">
                        <Form.Label>type</Form.Label>
                        <Form.Control
                            {...formikInputProps<ProductValues>("type", formik)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>price</Form.Label>
                        <Form.Control
                            {...formikInputProps<ProductValues>("price", formik)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>description</Form.Label>
                        <Form.Control
                            {...formikInputProps<ProductValues>("description", formik)}
                        />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Label>image</Form.Label>
                        <Form.Control
                            {...formikInputProps<ProductValues>("image", formik)}
                        />
                    </Form.Group>
                    <Button variant="outline-secondary" type="submit">
                        add product
                    </Button>
                </form>
            </div>
        </PageWrapper>
    );
};

export default AddPage;
