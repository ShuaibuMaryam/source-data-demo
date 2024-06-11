import React, { useState } from "react";
import {
	Box,
	Button,
	Checkbox,
	Container,
	Flex,
	Heading,
	Image,
	Input,
	InputGroup,
	InputRightElement,
	Switch,
	Text,
	Textarea,
} from "@chakra-ui/react";
import { IoClose } from "react-icons/io5";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDropzone } from "react-dropzone";
import { BsCloudUpload } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { CiCalendarDate } from "react-icons/ci";
import { toast } from "react-toastify";
// import endpoints from "@/features/api/endpoints";
// import axiosInstance from "../../../utils/axios";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import axios from "axios";

const ReportACaseForm = ({ toggleModal }) => {
	const casesCollectionRef = collection(db, "children");

	// Form Validation Schema using Yup
	const validationSchema = Yup.object().shape({
		first_name: Yup.string().required("First name is required"),
		surname: Yup.string().required("Surname is required"),
		missing_date: Yup.date().nullable().required("Missing date is required"),
		age: Yup.string().required("Age is required"),
		gender: Yup.string().required("Gender is required"),
		hair_color: Yup.string().required("Hair color is required"),
		eye_color: Yup.string().required("Eye color is required"),
		reported_by: Yup.string().required("Required"),
		relationship: Yup.string().required("Required"),
		first_contact: Yup.string().required("Contact is required"),
		second_contact: Yup.string().required(
			"Please provide an alternative contact number"
		),
		description: Yup.string().required("Description is required"),
	});

	const initialValues = {
		first_name: "",
		middle_name: "",
		surname: "",
		missing_date: "",
		age: "",
		gender: "",
		hair_color: "",
		eye_color: "",
		reported_by: "",
		relationship: "",
		first_contact: "",
		second_contact: "",
		description: "",
		image: null,
	};

	const onSubmit = async (values, { setSubmitting, resetForm }) => {
		const imageData = new FormData();
		imageData.append("file", values.image);
		imageData.append("upload_preset", "typs8gry");
		console.log(values);

		try {
			const response = await axios.post(
				"https://api.cloudinary.com/v1_1/depnvxdzk/image/upload",
				imageData,
				{
					headers: {
						"Content-Type": "multipart/form-data",
					},
				}
			);
			// console.log(response);
			const imageUrl = response.data.secure_url;

			await addDoc(casesCollectionRef, {
				first_name: values.first_name,
				surname: values.surname,
				middle_name: values.middle_name,
				missing_date: values.missing_date,
				age: values.age,
				gender: values.gender,
				hair_color: values.hair_color,
				eye_color: values.eye_color,
				reported_by: values.reported_by,
				relationship: values.relationship,
				first_contact: values.first_contact,
				second_contact: values.second_contact,
				description: values.description,
				image: imageUrl,
			});

			toast.success("Report sent successfully");

			resetForm();
		} catch (error) {
			toast.error("Something went wrong, please try again");
			// 	console.error(error);
			setSubmitting(false);
			// console.error("Error uploading image to Cloudinary:", error);
		}
		console.log("added");
	};
	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit,
	});

	const handleDrop = (acceptedFiles) => {
		formik.setFieldValue("categoryImages", acceptedFiles[0]);
	};

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop: handleDrop,
		accept: "image/*",
		multiple: false,
	});

	return (
		<>
			<Container maxW="7xl" py={"4rem"}>
				<Box p={{ base: "0", md: "8" }} className="box-shadow">
					<Flex justify={"space-between"} mb={"2rem"} fontFamily={"Work Sans"}>
						<Flex direction={"column"} gap={"1rem"}>
							<Heading size={"lg"} fontWeight={"600"}>
								Report a Missing Person
							</Heading>
							<Text
								fontSize={".97rem"}
								color={"rgba(0, 0, 0, 0.70)"}
								fontWeight={"400"}
							>
								Please fill in the details of the missing person
							</Text>
						</Flex>
						<Box
							bg="#fff"
							p={1}
							className="box-shadow"
							borderRadius="50%"
							cursor="pointer"
							onClick={toggleModal}
						>
							<IoClose
								style={{ fontSize: "2rem", color: "rgba(255, 0, 0, 1)" }}
							/>
						</Box>
					</Flex>

					{/*    /!* ADD FORM HERE *!/*/}

					<form onSubmit={formik.handleSubmit}>
						{/* upload child Image */}
						<Flex alignItems={"flex-start"} mb={6} flexDir={"column"}>
							<Box
								flex={{ base: "none", md: "0.3" }}
								mr={4}
								pb={{ base: "1rem" }}
								fontFamily={"'Work Sans', sans-serif"}
							>
								<label htmlFor="categoryImages" className={"label"}>
									Upload photo
								</label>
							</Box>
							<Box
								flex={{ base: "none", md: "0.7" }}
								width={{ base: "100%", lg: "25%" }}
								alignItems={"center"}
							>
								<div
									// {...getRootProps()}
									style={{
										border: "1px solid rgba(0, 0, 0, 0.12)",
										padding: "16px",
										textAlign: "center",
										borderRadius: "20px",
										cursor: "pointer",
										minHeight: "150px",
									}}
								>
									{/* <input {...getInputProps()} /> */}
									<input
										type="file"
										id="image"
										name="image"
										onChange={(event) => {
											formik.setFieldValue(
												"image",
												event.currentTarget.files[0]
											);
										}}
									/>
									{/* <Image
										src="/assets/uploads/upload-icon.svg"
										alt="upload"
										m={"0 auto"}
										mt={"1.5rem"}
									/> */}
								</div>
								{formik.values.categoryImages && (
									<Box
										mt={6}
										position="relative"
										padding={3}
										bg={"#aaa"}
										width={120}
									>
										<Image
											src={URL.createObjectURL(formik.values.categoryImages)}
											alt="Uploaded category image"
											width="100px"
											height="100px"
											style={{ margin: "0 auto", display: "block" }}
										/>
										<Box
											position="absolute"
											top={-2}
											right={-2}
											bg="#fff"
											borderRadius="50%"
										>
											<AiOutlineCloseCircle
												size={26}
												color={"red"}
												style={{
													cursor: "pointer",
												}}
												onClick={() =>
													formik.setFieldValue("categoryImages", null)
												}
											/>
										</Box>
									</Box>
								)}
							</Box>
						</Flex>
						{/*        /!* Name *!/*/}
						<Flex
							direction={{ base: "column", lg: "row" }}
							gap={"1rem"}
							w={"100%"}
						>
							{/* ----------First name--------- */}
							<Flex alignItems={"flex-start"} mb={6} flexDir={"column"}>
								<Box
									flex={{ base: "none", md: "0.3" }}
									mr={4}
									pb={{ base: "1rem" }}
									fontFamily={"'Work Sans', sans-serif"}
								>
									<label htmlFor="first_name" className={"label"}>
										First Name
									</label>
								</Box>
								<Box
									flex={{ base: "none", md: "0.7" }}
									width={"100%"}
									fontFamily={"'Work Sans', sans-serif"}
									fontWeight={"500"}
									color={"#2D2D2D"}
								>
									<Input
										type="text"
										id="first_name"
										name="first_name"
										borderRadius={"20px"}
										focusBorderColor={"#7CCFED"}
										// placeholder={"Category Title"}
										value={formik.values.first_name}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										style={{ border: "1px solid #ccc" }}
									/>
									{formik.touched.first_name && formik.errors.first_name ? (
										<div style={{ color: "red" }}>
											{formik.errors.first_name}
										</div>
									) : null}
								</Box>
							</Flex>

							{/* ---------Middle name-------- */}
							<Flex alignItems={"flex-start"} mb={6} flexDir={"column"}>
								<Box
									flex={{ base: "none", md: "0.3" }}
									mr={4}
									pb={{ base: "1rem" }}
									fontFamily={"'Work Sans', sans-serif"}
								>
									<label htmlFor="middle_name" className={"label"}>
										Middle Name
									</label>
								</Box>
								<Box
									flex={{ base: "none", md: "0.7" }}
									width={"100%"}
									fontFamily={"'Work Sans', sans-serif"}
									fontWeight={"500"}
									color={"#2D2D2D"}
								>
									<Input
										type="text"
										id="middle_name"
										name="middle_name"
										borderRadius={"20px"}
										focusBorderColor={"#7CCFED"}
										// placeholder={"Category Title"}
										value={formik.values.middle_name}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										style={{ border: "1px solid #ccc" }}
									/>
									{formik.touched.middle_name && formik.errors.middle_name ? (
										<div style={{ color: "red" }}>
											{formik.errors.middle_name}
										</div>
									) : null}
								</Box>
							</Flex>

							{/* ---------Surname--------- */}
							<Flex alignItems={"flex-start"} mb={6} flexDir={"column"}>
								<Box
									flex={{ base: "none", md: "0.3" }}
									mr={4}
									pb={{ base: "1rem" }}
									fontFamily={"'Work Sans', sans-serif"}
								>
									<label htmlFor="surname" className={"label"}>
										Surame
									</label>
								</Box>
								<Box
									flex={{ base: "none", md: "0.7" }}
									width={"100%"}
									fontFamily={"'Work Sans', sans-serif"}
									fontWeight={"500"}
									color={"#2D2D2D"}
								>
									<Input
										type="text"
										id="surname"
										name="surname"
										borderRadius={"20px"}
										focusBorderColor={"#7CCFED"}
										// placeholder={"Category Title"}
										value={formik.values.surname}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										style={{ border: "1px solid #ccc" }}
									/>
									{formik.touched.surname && formik.errors.surname ? (
										<div style={{ color: "red" }}>{formik.errors.surname}</div>
									) : null}
								</Box>
							</Flex>
						</Flex>

						{/* ---------Missing date-------- */}
						<Flex alignItems={"flex-start"} mb={6} flexDir={"column"}>
							<Box
								flex={{ base: "none", md: "0.3" }}
								mr={4}
								pb={{ base: "1rem" }}
								fontFamily={"'Work Sans', sans-serif"}
							>
								<label htmlFor="missing_date" className={"label"}>
									Missing Date
								</label>
							</Box>
							<Box
								flex={{ base: "none", md: "0.7" }}
								width={{ base: "100%", lg: "20%" }}
								fontFamily={"'Work Sans', sans-serif"}
								fontWeight={"500"}
								color={"#2D2D2D"}
							>
								<Input
									type="date"
									id="missing_date"
									name="missing_date"
									borderRadius={"20px"}
									focusBorderColor={"#7CCFED"}
									// placeholder={"Category Title"}
									value={formik.values.missing_date}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									style={{ border: "1px solid #ccc" }}
								/>

								{formik.touched.missing_date && formik.errors.missing_date ? (
									<div style={{ color: "red" }}>
										{formik.errors.missing_date}
									</div>
								) : null}
							</Box>
						</Flex>

						{/* ---------Age-------- */}
						<Flex
							alignItems={"flex-start"}
							mb={6}
							flexDir={"column"}
							w={{ base: "100%", lg: "20%" }}
						>
							<Box
								flex={{ base: "none", md: "0.3" }}
								mr={4}
								pb={{ base: "1rem" }}
								fontFamily={"'Work Sans', sans-serif"}
							>
								<label htmlFor="age" className={"label"}>
									Age
								</label>
							</Box>
							<Box
								flex={{ base: "none", md: "0.7" }}
								width={"100%"}
								fontFamily={"'Work Sans', sans-serif"}
								fontWeight={"500"}
								color={"#2D2D2D"}
							>
								<Input
									type="text"
									id="age"
									name="age"
									borderRadius={"20px"}
									focusBorderColor={"#7CCFED"}
									// placeholder={"Category Title"}
									value={formik.values.age}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									style={{ border: "1px solid #ccc" }}
								/>
								{formik.touched.age && formik.errors.age ? (
									<div style={{ color: "red" }}>{formik.errors.age}</div>
								) : null}
							</Box>
						</Flex>

						{/* ----------Gender--------- */}
						<Flex
							alignItems={"flex-start"}
							mb={6}
							flexDir={"column"}
							w={{ base: "100%", lg: "50%" }}
						>
							<Box
								flex={{ base: "none", md: "0.3" }}
								mr={4}
								pb={{ base: "1rem" }}
								fontFamily={"'Work Sans', sans-serif"}
							>
								<label htmlFor="gender" className={"label"}>
									Gender
								</label>
							</Box>
							<Flex gap={"1rem"}>
								{/* -----------Male-------- */}
								<Box
									flex={{ base: "none", md: "0.7" }}
									width={"100%"}
									fontFamily={"'Work Sans', sans-serif"}
									fontWeight={"500"}
									color={"#2D2D2D"}
								>
									<label>
										<Flex gap={".5rem"}>
											<input
												type="radio"
												id="male"
												name="gender"
												borderRadius={"20px"}
												focusBorderColor={"#7CCFED"}
												// placeholder={"Category Title"}
												value="Male"
												checked={formik.values.gender === "Male"}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												style={{
													border: "1px solid #ccc",
												}}
											/>
											Male
										</Flex>
									</label>
									{/* {formik.touched.gender && formik.errors.gender ? (
										<div style={{ color: "red" }}>{formik.errors.gender}</div>
									) : null} */}
								</Box>

								{/* Female */}
								<Box
									flex={{ base: "none", md: "0.7" }}
									direction={"row"}
									width={"100%"}
									fontFamily={"'Work Sans', sans-serif"}
									fontWeight={"500"}
									color={"#2D2D2D"}
								>
									<label>
										<Flex gap={".5rem"}>
											<input
												type="radio"
												id="female"
												name="gender"
												borderRadius={"20px"}
												focusBorderColor={"#7CCFED"}
												// placeholder={"Category Title"}
												value="Female"
												checked={formik.values.gender === "Female"}
												onChange={formik.handleChange}
												onBlur={formik.handleBlur}
												style={{ border: "1px solid #ccc", display: "inline" }}
											/>
											Female
										</Flex>
									</label>
								</Box>
							</Flex>
							<Box>
								{formik.touched.gender && formik.errors.gender ? (
									<div style={{ color: "red" }}>{formik.errors.gender}</div>
								) : null}
							</Box>
						</Flex>

						{/* ---------Hair and eye color---------- */}
						<Flex
							direction={{ base: "column", lg: "row" }}
							gap={"1rem"}
							w={"100%"}
						>
							{/* ----------Hair color--------- */}
							<Flex alignItems={"flex-start"} mb={6} flexDir={"column"}>
								<Box
									flex={{ base: "none", md: "0.3" }}
									mr={4}
									pb={{ base: "1rem" }}
									fontFamily={"'Work Sans', sans-serif"}
								>
									<label htmlFor="hair_color" className={"label"}>
										Hair Color
									</label>
								</Box>
								<Box
									flex={{ base: "none", md: "0.7" }}
									width={"100%"}
									fontFamily={"'Work Sans', sans-serif"}
									fontWeight={"500"}
									color={"#2D2D2D"}
								>
									<Input
										type="text"
										id="hair_color"
										name="hair_color"
										borderRadius={"20px"}
										focusBorderColor={"#7CCFED"}
										// placeholder={"Category Title"}
										value={formik.values.hair_color}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										style={{ border: "1px solid #ccc" }}
									/>
									{formik.touched.hair_color && formik.errors.hair_color ? (
										<div style={{ color: "red" }}>
											{formik.errors.hair_color}
										</div>
									) : null}
								</Box>
							</Flex>

							{/* ---------Eye color-------- */}
							<Flex alignItems={"flex-start"} mb={6} flexDir={"column"}>
								<Box
									flex={{ base: "none", md: "0.3" }}
									mr={4}
									pb={{ base: "1rem" }}
									fontFamily={"'Work Sans', sans-serif"}
								>
									<label htmlFor="eye_color" className={"label"}>
										Eye color
									</label>
								</Box>
								<Box
									flex={{ base: "none", md: "0.7" }}
									width={"100%"}
									fontFamily={"'Work Sans', sans-serif"}
									fontWeight={"500"}
									color={"#2D2D2D"}
								>
									<Input
										type="text"
										id="eye_color"
										name="eye_color"
										borderRadius={"20px"}
										focusBorderColor={"#7CCFED"}
										// placeholder={"Category Title"}
										value={formik.values.eye_color}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										style={{ border: "1px solid #ccc" }}
									/>
									{formik.touched.eye_color && formik.errors.eye_color ? (
										<div style={{ color: "red" }}>
											{formik.errors.eye_color}
										</div>
									) : null}
								</Box>
							</Flex>
						</Flex>

						{/*----------Rlationship--------- */}
						<Flex
							direction={{ base: "column", lg: "row" }}
							gap={"1rem"}
							w={"100%"}
						>
							{/* ----------Reprted by--------- */}
							<Flex alignItems={"flex-start"} mb={6} flexDir={"column"}>
								<Box
									flex={{ base: "none", md: "0.3" }}
									mr={4}
									pb={{ base: "1rem" }}
									fontFamily={"'Work Sans', sans-serif"}
								>
									<label htmlFor="reported_by" className={"label"}>
										Reported By
									</label>
								</Box>
								<Box
									flex={{ base: "none", md: "0.7" }}
									width={"100%"}
									fontFamily={"'Work Sans', sans-serif"}
									fontWeight={"500"}
									color={"#2D2D2D"}
								>
									<Input
										type="text"
										id="reported_by"
										name="reported_by"
										borderRadius={"20px"}
										focusBorderColor={"#7CCFED"}
										// placeholder={"Category Title"}
										value={formik.values.reported_by}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										style={{ border: "1px solid #ccc" }}
									/>
									{formik.touched.reported_by && formik.errors.reported_by ? (
										<div style={{ color: "red" }}>
											{formik.errors.reported_by}
										</div>
									) : null}
								</Box>
							</Flex>

							{/* ---------Relationship with victim-------- */}
							<Flex alignItems={"flex-start"} mb={6} flexDir={"column"}>
								<Box
									flex={{ base: "none", md: "0.3" }}
									mr={4}
									pb={{ base: "1rem" }}
									fontFamily={"'Work Sans', sans-serif"}
								>
									<label htmlFor="relationship" className={"label"}>
										Relationship with victim
									</label>
								</Box>
								<Box
									flex={{ base: "none", md: "0.7" }}
									width={"100%"}
									fontFamily={"'Work Sans', sans-serif"}
									fontWeight={"500"}
									color={"#2D2D2D"}
								>
									<Input
										type="text"
										id="relationship"
										name="relationship"
										borderRadius={"20px"}
										focusBorderColor={"#7CCFED"}
										// placeholder={"Category Title"}
										value={formik.values.relationship}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										style={{ border: "1px solid #ccc" }}
									/>
									{formik.touched.relationship && formik.errors.relationship ? (
										<div style={{ color: "red" }}>
											{formik.errors.relationship}
										</div>
									) : null}
								</Box>
							</Flex>
						</Flex>

						{/* ---------Contact---------- */}
						<Flex
							direction={{ base: "column", lg: "row" }}
							gap={"1rem"}
							w={"100%"}
						>
							{/* ----------First contact--------- */}
							<Flex alignItems={"flex-start"} mb={6} flexDir={"column"}>
								<Box
									flex={{ base: "none", md: "0.3" }}
									mr={4}
									pb={{ base: "1rem" }}
									fontFamily={"'Work Sans', sans-serif"}
								>
									<label htmlFor="first_contact" className={"label"}>
										1st Contact
									</label>
								</Box>
								<Box
									flex={{ base: "none", md: "0.7" }}
									width={"100%"}
									fontFamily={"'Work Sans', sans-serif"}
									fontWeight={"500"}
									color={"#2D2D2D"}
								>
									<Input
										type="number"
										id="first_contact"
										name="first_contact"
										borderRadius={"20px"}
										focusBorderColor={"#7CCFED"}
										// placeholder={"Category Title"}
										value={formik.values.first_contact}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										style={{ border: "1px solid #ccc" }}
									/>
									{formik.touched.first_contact &&
									formik.errors.first_contact ? (
										<div style={{ color: "red" }}>
											{formik.errors.first_contact}
										</div>
									) : null}
								</Box>
							</Flex>

							{/* ---------Second contact-------- */}
							<Flex alignItems={"flex-start"} mb={6} flexDir={"column"}>
								<Box
									flex={{ base: "none", md: "0.3" }}
									mr={4}
									pb={{ base: "1rem" }}
									fontFamily={"'Work Sans', sans-serif"}
								>
									<label htmlFor="second_contact" className={"label"}>
										2nd Contact
									</label>
								</Box>
								<Box
									flex={{ base: "none", md: "0.7" }}
									width={"100%"}
									fontFamily={"'Work Sans', sans-serif"}
									fontWeight={"500"}
									color={"#2D2D2D"}
								>
									<Input
										type="text"
										id="second_contact"
										name="second_contact"
										borderRadius={"20px"}
										focusBorderColor={"#7CCFED"}
										// placeholder={"Category Title"}
										value={formik.values.second_contact}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										style={{ border: "1px solid #ccc" }}
									/>
									{formik.touched.second_contact &&
									formik.errors.second_contact ? (
										<div style={{ color: "red" }}>
											{formik.errors.second_contact}
										</div>
									) : null}
								</Box>
							</Flex>
						</Flex>

						{/*        /!*---------Last seen circumstances---------*!/*/}
						<Flex alignItems={"flex-start"} mb={6} flexDir={"column"}>
							<Box
								flex={{ base: "none", md: "0.3" }}
								mr={4}
								pb={{ base: "1rem" }}
								fontFamily={"'Work Sans', sans-serif"}
							>
								<label htmlFor="description" className={"label"}>
									Last Seen Circumstances
								</label>
							</Box>
							<Box
								flex={{ base: "none", md: "0.7" }}
								width={"100%"}
								fontFamily={"'Urbanist', sans-serif"}
							>
								<Textarea
									id="description"
									name="description"
									rows={5}
									resize={"none"}
									borderRadius={"20px"}
									focusBorderColor={"#7CCFED"}
									value={formik.values.description}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									style={{ border: "1px solid #ccc" }}
								/>
								{formik.touched.description && formik.errors.description ? (
									<div style={{ color: "red" }}>
										{formik.errors.description}
									</div>
								) : null}
							</Box>
						</Flex>

						{/* Submit Button */}
						<Flex
							mt={12}
							mb={4}
							justifyContent={"end"}
							gap={{ base: "1rem", md: "3rem" }}
							flexDir={{ base: "column", md: "row" }}
						>
							<Button
								type="submit"
								bg={"#7CCFED"}
								color={"#2D2D2D"}
								borderRadius={"40px"}
								minH={"40px"}
								fontSize={"1rem"}
								fontWeight={"400"}
								minW={"20%"}
								p={"10px"}
							>
								Submit report
							</Button>
							{/* <Button
								onClick={toggleModal}
								bg="#000"
								color="#fff"
								fontSize={"1rem"}
								fontWeight={400}
								size="lg"
								padding={"10px"}
								minW={"20%"}
								borderRadius={"40px"}
							>
								Cancel
							</Button> */}
						</Flex>
					</form>
				</Box>
			</Container>
		</>
	);
};

export default ReportACaseForm;
