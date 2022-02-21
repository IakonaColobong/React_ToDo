import React from "react";
import { Formik, Form, Field } from "formik";
import catSchema from "../../Utilities/ValidationSchema";
import axios from "axios";

export default function CatForm(props) {
  const handleSubmit = (values) => {
    if (!props.category) {
      const categoryToCreate = {
        CategoryName: values.CategoryName,
        CategoryDescription: values.CategoryDescription,
      };
      axios.post('http://localhost:61594/api/categories', categoryToCreate).then(() => {
        props.setShowCreate(false);
        props.getCategories();
      });
    } else {
     const category = {
         CategorId: props.category.CategorId,
         CategoryName: props.category.CategoryName,
         CategoryDescription: props.category.CategoryDescription
     }
     axios.put("http://localhost:61594/api/categories", category).then(() => {
         props.getCategories();
         props.setShowEdit();
     })
    }
  };
  return (
    <div className="createCategory m-2 text-white text-center">
      <Formik
        initialValues={{
          CategoryName: props.category ? props.category.CategoryName : "",
          CategoryDescription: props.category
            ? props.category.CategoryDescription
            : "",
        }}
        validationSchema={catSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({ errors, touched }) => (
          <div className="container">
            <Form id="catForm" className="row text-center m-auto">
              <div className="form-group m-1 p-1">
                <Field
                  name="CategoryName"
                  className="form-control"
                  placeholder="Name"
                />

                {errors.CategoryName && touched.CategoryName ? (
                  <div className="text-danger">{errors.CategoryName}</div>
                ) : null}

                <div className="from-group m-1 p-1">
                  <Field
                    name="CategoryDescription"
                    className="form-control"
                    placeholder="Description"
                  />

                  {errors.CategoryDescription && touched.CategoryDescription ? (
                    <div className="text-danger">
                      {errors.CategoryDescription}
                    </div>
                  ) : null}
                </div>
              </div>
              <div className="form-group m-1">
                <button className="btn btn-success" type="submit">
                  Submit
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    </div>
  );
}
