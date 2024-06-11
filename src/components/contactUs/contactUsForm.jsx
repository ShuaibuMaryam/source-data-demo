import React from "react";
import {Box, Button, Flex, FormControl, Input, Text, Textarea} from "@chakra-ui/react";
import {Field, Formik, Form} from "formik";
import axiosInstance from "../../utils/axios";
import * as Yup from "yup";



const ContactUsSchema = Yup.object().shape({
    full_name: Yup.string()
        .min(2, 'Too Short!')
        .max(50, 'Too Long!')
        .required('Required'),
    email: Yup.string().email("Invalid email").required("Required"),
    message: Yup.string()
        .min(2, 'Too Short!')
        .required('Required'),

});
const ContactUsForm = () => {

    return(
        <Box py={"3rem"} w={{base:"100%",lg:"800px"}}>
            <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
                <Text fontSize={{base:"lg",lg:"3xl"}}>Have a Question? Contact us</Text>
                <Box bg={"#DB0090"} height={"1.5px"}  w={"6rem"} borderRadius={"lg"}></Box>
            </Flex>
            <Formik
                initialValues={{
                    full_name: '',
                    email:'',
                    message:'',
                }}
                validationSchema={ContactUsSchema}
                onSubmit={async (values, {setSubmitting, isSuccessful}) => {

                    try {
                        // const response = await axiosInstance.post("/", values);
                        toast({
                            title: "Thank you!",
                            description: "We will be in touch with you shortly",
                            status: "success",
                            duration: 5000,
                            isClosable: true,
                        });
                        setSubmitting(false);
                    } catch (error) {
                        console.error(error);
                        setSubmitting(false);

                        toast({
                            title: "An error occurred",
                            description:
                                "There was an error submitting your response. Please try again.",
                            status: "error",
                            duration: 5000,
                            isClosable: true,
                        });
                    }
                    console.log(values);
                    isSuccessful();
                }}>
                {({errors, touched, setFieldTouched, setFieldValue, values, isSubmitting}) => (
                    <Form>
                        <Flex justifyContent={"space-between"} mt={"3rem"} mb={"1rem"} gap={{base:"3",lg:"10"}} flexWrap={"wrap"}>
                            <Field name="full_name">
                                {({field}) => (
                                    <FormControl opacity={"0.7"}>
                                        <Input {...field}
                                               type='text'
                                               placeholder={"Full name"}
                                               onChange={(e) => setFieldValue('full_name', e.target.value)}
                                               onBlur={(e) => setFieldTouched('full_name', true)}
                                               bg={"white"}
                                               mb={"1rem"}
                                               borderColor={"#DB0090"}
                                               fontStyle={"italic"}
                                               fontSize={"sm"}
                                        />
                                        {errors.full_name && touched.full_name ? (
                                            <Box color={"red"}>{errors.full_name}</Box>
                                        ) : null}
                                    </FormControl>
                                )}
                            </Field>
                            <Field name="email">
                                {({field}) => (
                                    <FormControl opacity={"0.7"}>
                                        <Input {...field}  type='email'
                                               placeholder='Your Email Address'
                                               fontStyle={"italic"}
                                               fontSize={"sm"}
                                               onChange={(e) => setFieldValue('email', e.target.value)}
                                               onBlur={(e) => setFieldTouched('email', true)}
                                               bg={"white"}
                                               mb={"1rem"}
                                               borderColor={"#DB0090"}
                                        />
                                        {errors.email && touched.email ? (
                                            <Box color={"red"}>{errors.email}</Box>
                                        ) : null}
                                    </FormControl>
                                )}
                            </Field>
                        </Flex>
                        <Field name="message">
                            {({field}) => (
                                <FormControl opacity={"0.7"}>
                                    <Textarea {...field}
                                              type='text'
                                              placeholder='Your Message'
                                              onChange={(e) => setFieldValue('message', e.target.value)}
                                              onBlur={(e) => setFieldTouched('message', true)}
                                              bg={"white"}
                                              mb={"1rem"}
                                              borderColor={"#DB0090"}
                                              rows={"15"}
                                              fontStyle={"italic"}
                                              fontSize={"sm"}
                                    >

                                    </Textarea>
                                    {errors.message && touched.message ? (
                                        <Box color={"red"}>{errors.message}</Box>
                                    ) : null}
                                </FormControl>
                            )}
                        </Field>
                        <Button
                            mt={4}
                            bg={"#DB0090"}
                            color={"white"}
                            w={"100%"}
                            type='submit'
                        >
                            Send Message
                        </Button>
                    </Form>
                )}
            </Formik>
        </Box>
    )
};

export  default ContactUsForm;