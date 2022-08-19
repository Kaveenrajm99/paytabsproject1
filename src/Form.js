import React from 'react'
import { useFormik } from 'formik';
import { Nav, NavDropdown } from 'react-bootstrap'




const Form = () => {

    const formik = useFormik({
        initialValues: {
            TemplateId: "",
            TemplateName: "",
            Message: ""


        },
        validate: values => {
            const errors = {};

            if (!values.TemplateId) {
                errors.TemplateId = 'TemplateId Please';
            }
            else if (!values.TemplateName) {
                errors.TemplateName = 'Enter  the TemplateName';
            }
            if (!values.Message) {
                errors.Message = 'Enter the Message ';
            }
            return errors;
        },
        onSubmit: values => {
            console.log(values)
        },
    });

    return (

        <div className='container'>
            <h1 className='text-center fw-bold'>Fill Form</h1>
            <form onSubmit={formik.handleSubmit}>
                <div className='row'>
                    <div className='col-lg-6'>
                        <label className='fw-bold'>TemplateId </label>
                        <input type={"text"} name="TemplateId" onChange={formik.handleChange}
                            value={formik.values.TemplateId} className="form-control" maxLength={10} minLength={5} required />
                        <span className='text-primary'> {formik.errors.TemplateId}</span>
                    </div>
                    <div className='col-lg-6'>
                        <label className='fw-bold'>TemplateName</label>
                        <input type={"text"} name="TemplateName" onChange={formik.handleChange}
                            value={formik.values.TemplateName} className="form-control" maxLength={20} minLength={10} required />
                        <span className='text-primary'> {formik.errors.TemplateName}</span>
                    </div>
                    <div className='col-lg-6'>
                        <label className='fw-bold'>Message </label>
                        <input type={"text"} name="Message" onChange={formik.handleChange}
                            value={formik.values.Message} className="form-control" maxLength={20} minLength={10} required />
                        <span className='text-primary'> {formik.errors.Message}</span>
                    </div>
                    <Nav className='fw-bold m-3'>Message Type
                        <NavDropdown className='fw-bold'>
                            < NavDropdown.Item>100</NavDropdown.Item>
                            <NavDropdown.Item>200</NavDropdown.Item>
                            <NavDropdown.Item>400</NavDropdown.Item>
                            <NavDropdown.Item>500</NavDropdown.Item>
                            <NavDropdown.Item>800</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </div>

                <div className='col fw-bold text-center'>
                    <input disabled={formik.errors.values} type={"submit"} className="btn btn-primary mt-4" />
                </div>
                <br></br>
            </form>
        </div>
    )
}

export default Form