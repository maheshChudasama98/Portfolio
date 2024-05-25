import React from 'react'
import { Button, Card, Grid, TextField } from '@mui/material'
import { Formik } from 'formik'
import * as Yup from 'yup';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import { Height } from '@mui/icons-material';

const TextFieldForm = ({ formik, field, label, defaultColors = { defaultColors }, ...props }) => {
    return (
        <TextField
            // variant="standard"
            sx={{
                input: {
                    color: defaultColors?.color,
                },
                '& .MuiInputBase-input': {
                    color: defaultColors?.blackAndWight
                },
                '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                        borderColor: '#ccc',
                    },
                    '&:hover fieldset': {
                        borderColor: '#ccc',
                    },
                    '&.Mui-focused fieldset': {
                        borderColor: defaultColors?.color,
                    },
                },
                '& .MuiInputLabel-root': {
                    color: Boolean(formik.errors[field]) ? '#f00' : defaultColors?.color,
                },
                '& .MuiInputLabel-root.Mui-focused': {
                    color: Boolean(formik.errors[field]) ? '#f00' : defaultColors?.color,
                },
            }}
            required
            fullWidth
            id={label}
            label={label}
            InputLabelProps={{ shrink: formik.values[field] ? true : false }}
            name={field}
            value={formik.values[field]}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={Boolean(formik.errors[field]) && formik.touched[field]}
            helperText={Boolean(formik.errors[field]) && formik.touched[field] ? formik.errors[field] : ''}
            {...props}
        />
    )
}



const Contact = ({ defaultColors }) => {
    const style = {
        backgroundColor: defaultColors?.backgroundCard,
        color: defaultColors?.headerColor,
        height: 170,
        padding: 2,
        textAlign: "center",
        boxShadow: "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px"
    }

    return (
        <>
            <Formik
                initialValues={{
                    fullName: "",
                    email: "",
                    phone: "",
                    message: ""
                }}
                validationSchema={Yup.object().shape({
                    fullName: Yup
                        .string()
                        .required('Full name is required'),
                    email: Yup
                        .string()
                        .required('Email is required'),
                    message: Yup
                        .string()
                        .required('Message is required'),
                })
                }
            >
                {(props) => {
                    const { values, setFieldValue, handleSubmit } = props;
                    return (
                        <>
                            <Grid container spacing={1.5} >

                                <Grid item xs={12} md={6}   >
                                    <TextFieldForm
                                        defaultColors={defaultColors}
                                        formik={props}
                                        label={'Full Name'}
                                        field={'fullName'}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}   >
                                    <TextFieldForm
                                        defaultColors={defaultColors}
                                        formik={props}
                                        label={'Email'}
                                        field={'email'}
                                    />
                                </Grid>



                                <Grid item xs={12} order={12}  >
                                    <TextFieldForm
                                        defaultColors={defaultColors}
                                        formik={props}
                                        // required={false}
                                        label={'Message'}
                                        field={'message'}
                                        multiline
                                        rows={5}
                                        maxRows={2}
                                    />
                                </Grid>
                            </Grid >

                            <Grid
                                container
                                sx={{ mt: 0.5 }}
                                spacing={1.5}>
                                <Grid item xs={12}>
                                    <Button variant="outlined" onClick={handleSubmit}>Save</Button>
                                    <Button variant="outlined" sx={{ marginX: 2 }} onClick={handleSubmit}>Change</Button>
                                </Grid>
                            </Grid >
                        </>
                    );
                }}
            </Formik>

            <Grid container spacing={3} sx={{ marginY: 5 }}>
                <Grid item xs={12} md={4}>

                    <Card sx={style}>
                        <LocationOnIcon sx={{
                            marginTop: 1.5,
                            fontSize: 23,
                            padding: 1.5,
                            color: "#2eb5c9",
                            backgroundColor: "#2eb5c959",
                            borderRadius: 60,
                            border: "solid 1px #2eb5c9"
                        }} />
                        <h3 style={{ margin: 5, padding: 0 }}>Address</h3>
                        <p style={{ margin: 0, padding: 0, fontSize: 14, fontWeight: 600, color: "#929292" }}>
                            Anamika society-1 Street no. 5,<br />
                            University road, <br />
                            Rajkot- 360005
                        </p>

                    </Card>

                </Grid>
                <Grid item xs={12} md={4}>
                    <Card sx={style}>
                        <LocalPhoneIcon sx={{
                            marginTop: 1.5,
                            fontSize: 23,
                            padding: 1.5,
                            color: "#f39711",
                            backgroundColor: "#f3971159",
                            borderRadius: "50px",
                            border: "solid 1px #f39711"
                        }} />
                        <h3 style={{ margin: 5 }}>Phone No.</h3>
                        <p style={{ margin: 0, padding: 0, fontSize: 14, fontWeight: 600, color: "#929292" }}>
                            +91  7202841815 <br />
                            +91  7048269254
                        </p>

                    </Card>

                </Grid>
                <Grid item xs={12} md={4}>

                    <Card sx={style}>
                        <EmailIcon sx={{
                            marginTop: 1.5,
                            fontSize: 23,
                            padding: 1.5,
                            color: "#7352c7",
                            backgroundColor: "#7352c759",
                            borderRadius: "50px",
                            border: "solid 1px #7352c7"
                        }} />
                        <h3 style={{ margin: 5 }}>Email</h3>
                        <p style={{ margin: 0, padding: 0, fontSize: 14, fontWeight: 600, color: "#929292" }}>
                            mahesh.chudasama098@gmail.com
                        </p>
                    </Card>

                </Grid>

            </Grid >

        </>

    )
}

export default Contact