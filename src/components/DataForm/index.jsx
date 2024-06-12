import React, { useRef, useState } from "react";
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
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalOverlay,
	Spinner,
	Switch,
	Text,
	Textarea,
	useDisclosure,
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
import emailjs from "emailjs-com";
import axios from "axios";

const ReportACaseForm = () => {
	emailjs.init("ZpqwFrjDl7cb5Zome");

	// const [trackingId, setTrackingId] = useState();

	// Reference to the form element
	const formRef = useRef(null);

	const validationSchema = Yup.object().shape({
		name: Yup.string().required("Name is required"),
		gender: Yup.string().required("Gender is required"),
		email: Yup.string().required("Email is required"),
		phone_number: Yup.string().required("Phone number is required"),
		state_of_origin: Yup.string().required("State of origin is required"),
		lga_of_origin: Yup.string().required("LGA of origin is required"),
		ward: Yup.string().required("Ward is required"),
		district: Yup.string().required("District is required"),
		highest_qualification: Yup.string().required("Qualification is required"),
		employment_preference: Yup.string().required("Please select a preference"),
		nin: Yup.string().required("Please enter your NIN"),
		federal_constituency: Yup.string().required("This is a required field"),
		senatorial_district: Yup.string().required("This is a required field"),
		number_of_years_unemployed: Yup.string().required(
			"This is a required field"
		),
		disability: Yup.string().required("This is a required field"),
	});

	const generateUniqueNumber = () => {
		const timestamp = Date.now();
		const randomNum = Math.floor(Math.random() * 1_000_000);
		const uniqueNumber = parseInt(timestamp.toString() + randomNum.toString());

		return uniqueNumber;
	};

	const trackingId = generateUniqueNumber();
	// (() => {
	// 	console.log("useEffect");
	// })();
	// const formdata = new FormData();

	const [modalOpen, setModalOpen] = useState(false);
	const toggleModal = () => {
		setModalOpen(!modalOpen);
	};

	const usersCollectionRef = collection(db, "users");

	// Form Validation Schema using Yup

	const initialValues = {
		name: "",
		gender: "",
		phone_number: "",
		email: "",
		state_of_origin: "",
		lga_of_origin: "",
		ward: "",
		district: "",
		highest_qualification: "",
		employment_preference: "",
		nin: "",
		federal_constituency: "",
		senatorial_district: "",
		number_of_years_unemployed: "",
		disability: "",
		setSubmitting: "false",
	};

	const onSubmit = async (values, { setSubmitting, resetForm }) => {
		try {
			await addDoc(usersCollectionRef, {
				name: values.name,
				gender: values.gender,
				phone_number: values.phone_number,
				email: values.email,
				state_of_origin: values.state_of_origin,
				lga_of_origin: values.lga_of_origin,
				ward: values.ward,
				district: values.district,
				highest_qualification: values.highest_qualification,
				employment_preference: values.employment_preference,
				nin: values.nin,
				federal_constituency: values.federal_constituency,
				senatorial_district: values.senatorial_district,
				number_of_years_unemployed: values.number_of_years_unemployed,
				disability: values.disability,
			});

			toggleModal();

			var emailTemplate = {
				name: values.name,
				email: values.email,
				trackingId: trackingId,
			};
			const formData = new FormData(formRef.current);

			formData.append("trackingId", trackingId);

			for (let [key, value] of formData.entries()) {
				console.log(`${key}: ${value}`);
			}
			console.log(formRef.current);
			console.log(formData);
			console.log(emailTemplate);
			emailjs.send("service_8nz54qg", "template_kxksu27", emailTemplate).then(
				() => {
					console.log("SUCCESS!");
					console.log("message sent");
				},
				(error) => {
					console.log("FAILED...", error.text);
				}
			);

			console.log(values);

			resetForm();
		} catch (error) {
			toast.error("Something went wrong, please try again");
			console.error(error);
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

	// const handleDrop = (acceptedFiles) => {
	// 	formik.setFieldValue("categoryImages", acceptedFiles[0]);
	// };

	// const { getRootProps, getInputProps, isDragActive } = useDropzone({
	// 	onDrop: handleDrop,
	// 	accept: "image/*",
	// 	multiple: false,
	// });

	return (
		<>
			<Container maxW="7xl" py={"4rem"}>
				<Box
					p={{ base: "0", md: "10" }}
					className="box-shadow"
					w={{ base: "100%", lg: "50%" }}
					border={{ base: "none", lg: "1px solid gray" }}
					borderRadius={"50px"}
					m={"0 auto"}
				>
					<Flex justify={"space-between"} mb={"2rem"} fontFamily={"Work Sans"}>
						<Flex direction={"column"} gap={"1rem"}>
							<Heading size={"lg"} fontWeight={"600"} textAlign={"center"}>
								Fill in details below
							</Heading>
							{/* <Text
								fontSize={".97rem"}
								color={"rgba(0, 0, 0, 0.70)"}
								fontWeight={"400"}
							>
								Please fill in the details of the missing person
							</Text> */}
						</Flex>
						{/* <Box
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
						</Box> */}
					</Flex>

					{/*    /!* ADD FORM HERE *!/*/}

					<form onSubmit={formik.handleSubmit} ref={formRef}>
						{/*        /!* Name *!/*/}
						<Flex direction={{ base: "column" }} gap={"1rem"} w={"100%"}>
							{/* ----------First name--------- */}
							<Flex alignItems={"flex-start"} mb={6} flexDir={"column"}>
								<Box
									flex={{ base: "none", md: "0.3" }}
									mr={4}
									pb={{ base: "1rem" }}
									fontFamily={"'Work Sans', sans-serif"}
								>
									<label htmlFor="name" className={"label"}>
										Name
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
										id="name"
										name="name"
										borderRadius={"20px"}
										focusBorderColor={"#7CCFED"}
										// placeholder={"Category Title"}
										value={formik.values.name}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										style={{ border: "1px solid #ccc" }}
									/>
									{formik.touched.name && formik.errors.name ? (
										<div style={{ color: "red" }}>{formik.errors.name}</div>
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
													style={{
														border: "1px solid #ccc",
														display: "inline",
													}}
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

							{/* ---------Phone number-------- */}
							<Flex alignItems={"flex-start"} mb={6} flexDir={"column"}>
								<Box
									flex={{ base: "none", md: "0.3" }}
									mr={4}
									pb={{ base: "1rem" }}
									fontFamily={"'Work Sans', sans-serif"}
								>
									<label htmlFor="phone_number" className={"label"}>
										Phone number
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
										id="phone_number"
										name="phone_number"
										borderRadius={"20px"}
										focusBorderColor={"#7CCFED"}
										// placeholder={"Category Title"}
										value={formik.values.phone_number}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										style={{ border: "1px solid #ccc" }}
									/>
									{formik.touched.phone_number && formik.errors.phone_number ? (
										<div style={{ color: "red" }}>
											{formik.errors.phone_number}
										</div>
									) : null}
								</Box>
							</Flex>

							{/* ----------email---------- */}
							<Flex alignItems={"flex-start"} mb={6} flexDir={"column"}>
								<Box
									flex={{ base: "none", md: "0.3" }}
									mr={4}
									pb={{ base: "1rem" }}
									fontFamily={"'Work Sans', sans-serif"}
								>
									<label htmlFor="email" className={"label"}>
										Email
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
										id="email"
										name="email"
										borderRadius={"20px"}
										focusBorderColor={"#7CCFED"}
										// placeholder={"Category Title"}
										value={formik.values.email}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										style={{ border: "1px solid #ccc" }}
									/>
									{formik.touched.email && formik.errors.email ? (
										<div style={{ color: "red" }}>{formik.errors.email}</div>
									) : null}
								</Box>
							</Flex>
							{/* ---------State of origin--------- */}
							<Flex alignItems={"flex-start"} mb={6} flexDir={"column"}>
								<Box
									flex={{ base: "none", md: "0.3" }}
									mr={4}
									pb={{ base: "1rem" }}
									fontFamily={"'Work Sans', sans-serif"}
								>
									<label htmlFor="state_of_origin" className={"label"}>
										State of origin
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
										id="state_of_origin"
										name="state_of_origin"
										borderRadius={"20px"}
										focusBorderColor={"#7CCFED"}
										// placeholder={"Category Title"}
										value={formik.values.state_of_origin}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										style={{ border: "1px solid #ccc" }}
									/>
									{formik.touched.state_of_origin &&
									formik.errors.state_of_origin ? (
										<div style={{ color: "red" }}>
											{formik.errors.state_of_origin}
										</div>
									) : null}
								</Box>
							</Flex>
						</Flex>

						{/* ---------LGA of origin-------- */}
						<Flex alignItems={"flex-start"} mb={6} flexDir={"column"}>
							<Box
								flex={{ base: "none", md: "0.3" }}
								mr={4}
								pb={{ base: "1rem" }}
								fontFamily={"'Work Sans', sans-serif"}
							>
								<label htmlFor="lga_of_origin" className={"label"}>
									LGA of origin
								</label>
							</Box>
							<Box
								flex={{ base: "none", md: "0.7" }}
								width={{ base: "100%" }}
								fontFamily={"'Work Sans', sans-serif"}
								fontWeight={"500"}
								color={"#2D2D2D"}
							>
								<Input
									type="text"
									id="lga_of_origin"
									name="lga_of_origin"
									borderRadius={"20px"}
									focusBorderColor={"#7CCFED"}
									// placeholder={"Category Title"}
									value={formik.values.lga_of_origin}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									style={{ border: "1px solid #ccc" }}
								/>

								{formik.touched.lga_of_origin && formik.errors.lga_of_origin ? (
									<div style={{ color: "red" }}>
										{formik.errors.lga_of_origin}
									</div>
								) : null}
							</Box>
						</Flex>

						{/* ---------Ward-------- */}
						<Flex
							alignItems={"flex-start"}
							mb={6}
							flexDir={"column"}
							w={{ base: "100%" }}
						>
							<Box
								flex={{ base: "none", md: "0.3" }}
								mr={4}
								pb={{ base: "1rem" }}
								fontFamily={"'Work Sans', sans-serif"}
							>
								<label htmlFor="ward" className={"label"}>
									Ward
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
									id="ward"
									name="ward"
									borderRadius={"20px"}
									focusBorderColor={"#7CCFED"}
									// placeholder={"Category Title"}
									value={formik.values.ward}
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									style={{ border: "1px solid #ccc" }}
								/>
								{formik.touched.ward && formik.errors.ward ? (
									<div style={{ color: "red" }}>{formik.errors.ward}</div>
								) : null}
							</Box>
						</Flex>

						{/* ---------District and Highest qualification---------- */}
						<Flex direction={{ base: "column" }} gap={"1rem"} w={"100%"}>
							{/* ----------District--------- */}
							<Flex alignItems={"flex-start"} mb={6} flexDir={"column"}>
								<Box
									flex={{ base: "none", md: "0.3" }}
									mr={4}
									pb={{ base: "1rem" }}
									fontFamily={"'Work Sans', sans-serif"}
								>
									<label htmlFor="district" className={"label"}>
										District
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
										id="district"
										name="district"
										borderRadius={"20px"}
										focusBorderColor={"#7CCFED"}
										// placeholder={"Category Title"}
										value={formik.values.district}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										style={{ border: "1px solid #ccc" }}
									/>
									{formik.touched.district && formik.errors.district ? (
										<div style={{ color: "red" }}>{formik.errors.district}</div>
									) : null}
								</Box>
							</Flex>

							{/* ---------Highest qualification-------- */}
							<Flex alignItems={"flex-start"} mb={6} flexDir={"column"}>
								<Box
									flex={{ base: "none", md: "0.3" }}
									mr={4}
									pb={{ base: "1rem" }}
									fontFamily={"'Work Sans', sans-serif"}
								>
									<label htmlFor="highest_qualification" className={"label"}>
										highest_qualification
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
										id="highest_qualification"
										name="highest_qualification"
										borderRadius={"20px"}
										focusBorderColor={"#7CCFED"}
										// placeholder={"Category Title"}
										value={formik.values.highest_qualification}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										style={{ border: "1px solid #ccc" }}
									/>
									{formik.touched.highest_qualification &&
									formik.errors.highest_qualification ? (
										<div style={{ color: "red" }}>
											{formik.errors.highest_qualification}
										</div>
									) : null}
								</Box>
							</Flex>
						</Flex>

						{/*----------Employment preference and Nin--------- */}
						<Flex direction={{ base: "column" }} gap={"1rem"} w={"100%"}>
							{/* ----------Employment preference--------- */}
							<Flex alignItems={"flex-start"} mb={6} flexDir={"column"}>
								<Box
									flex={{ base: "none", md: "0.3" }}
									mr={4}
									pb={{ base: "1rem" }}
									fontFamily={"'Work Sans', sans-serif"}
								>
									<label htmlFor="employment_preference" className={"label"}>
										employment_preference
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
										id="employment_preference"
										name="employment_preference"
										placeholder="Wage employment or self employment"
										borderRadius={"20px"}
										focusBorderColor={"#7CCFED"}
										// placeholder={"Category Title"}
										value={formik.values.employment_preference}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										style={{ border: "1px solid #ccc" }}
									/>
									{formik.touched.employment_preference &&
									formik.errors.employment_preference ? (
										<div style={{ color: "red" }}>
											{formik.errors.employment_preference}
										</div>
									) : null}
								</Box>
							</Flex>

							{/* ---------nin-------- */}
							<Flex alignItems={"flex-start"} mb={6} flexDir={"column"}>
								<Box
									flex={{ base: "none", md: "0.3" }}
									mr={4}
									pb={{ base: "1rem" }}
									fontFamily={"'Work Sans', sans-serif"}
								>
									<label htmlFor="nin" className={"label"}>
										NIN
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
										id="nin"
										name="nin"
										borderRadius={"20px"}
										focusBorderColor={"#7CCFED"}
										// placeholder={"Category Title"}
										value={formik.values.nin}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										style={{ border: "1px solid #ccc" }}
									/>
									{formik.touched.nin && formik.errors.nin ? (
										<div style={{ color: "red" }}>{formik.errors.nin}</div>
									) : null}
								</Box>
							</Flex>
						</Flex>

						{/* ---------Number of years unemployed and disability---------- */}
						<Flex direction={{ base: "column" }} gap={"1rem"} w={"100%"}>
							{/* ----------Federal constituency--------- */}
							<Flex alignItems={"flex-start"} mb={6} flexDir={"column"}>
								<Box
									flex={{ base: "none", md: "0.3" }}
									mr={4}
									pb={{ base: "1rem" }}
									fontFamily={"'Work Sans', sans-serif"}
								>
									<label htmlFor="federal_constituency" className={"label"}>
										Federal constituency
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
										id="federal_constituency"
										name="federal_constituency"
										borderRadius={"20px"}
										focusBorderColor={"#7CCFED"}
										// placeholder={"Category Title"}
										value={formik.values.federal_constituency}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										style={{ border: "1px solid #ccc" }}
									/>
									{formik.touched.federal_constituency &&
									formik.errors.federal_constituency ? (
										<div style={{ color: "red" }}>
											{formik.errors.federal_constituency}
										</div>
									) : null}
								</Box>
							</Flex>

							{/* ---------senatorial district-------- */}
							<Flex alignItems={"flex-start"} mb={6} flexDir={"column"}>
								<Box
									flex={{ base: "none", md: "0.3" }}
									mr={4}
									pb={{ base: "1rem" }}
									fontFamily={"'Work Sans', sans-serif"}
								>
									<label htmlFor="senatorial_district" className={"label"}>
										Senatorial district
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
										id="senatorial_district"
										name="senatorial_district"
										borderRadius={"20px"}
										focusBorderColor={"#7CCFED"}
										// placeholder={"Category Title"}
										value={formik.values.senatorial_district}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										style={{ border: "1px solid #ccc" }}
									/>
									{formik.touched.senatorial_district &&
									formik.errors.senatorial_district ? (
										<div style={{ color: "red" }}>
											{formik.errors.senatorial_district}
										</div>
									) : null}
								</Box>
							</Flex>
						</Flex>

						{/* ----------Number of years unemployed and disability----------- */}
						<Flex direction={{ base: "column" }} gap={"1rem"} w={"100%"}>
							{/* ----------Number of years unemployed--------- */}
							<Flex alignItems={"flex-start"} mb={6} flexDir={"column"}>
								<Box
									flex={{ base: "none", md: "0.3" }}
									mr={4}
									pb={{ base: "1rem" }}
									fontFamily={"'Work Sans', sans-serif"}
								>
									<label
										htmlFor="number_of_years_unemployed"
										className={"label"}
									>
										Number of years unemployed
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
										id="number_of_years_unemployed"
										name="number_of_years_unemployed"
										borderRadius={"20px"}
										focusBorderColor={"#7CCFED"}
										// placeholder={"Category Title"}
										value={formik.values.number_of_years_unemployed}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										style={{ border: "1px solid #ccc" }}
									/>
									{formik.touched.number_of_years_unemployed &&
									formik.errors.number_of_years_unemployed ? (
										<div style={{ color: "red" }}>
											{formik.errors.number_of_years_unemployed}
										</div>
									) : null}
								</Box>
							</Flex>

							{/* ---------Disability-------- */}
							<Flex alignItems={"flex-start"} mb={6} flexDir={"column"}>
								<Box
									flex={{ base: "none", md: "0.3" }}
									mr={4}
									pb={{ base: "1rem" }}
									fontFamily={"'Work Sans', sans-serif"}
								>
									<label htmlFor="disability" className={"label"}>
										Disability
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
										id="disability"
										name="disability"
										borderRadius={"20px"}
										focusBorderColor={"#7CCFED"}
										// placeholder={"Category Title"}
										value={formik.values.disability}
										onChange={formik.handleChange}
										onBlur={formik.handleBlur}
										style={{ border: "1px solid #ccc" }}
									/>
									{formik.touched.disability && formik.errors.disability ? (
										<div style={{ color: "red" }}>
											{formik.errors.disability}
										</div>
									) : null}
								</Box>
							</Flex>
						</Flex>

						{/*        /!*---------Last seen circumstances---------*!/*/}
						{/* <Flex alignItems={"flex-start"} mb={6} flexDir={"column"}>
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
						</Flex> */}

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
								w={"100%"}
								p={"10px"}
							>
								Submit
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
				<Modal isOpen={modalOpen} onClose={toggleModal}>
					<ModalOverlay />
					<ModalContent
						maxWidth={{ base: "90%", lg: "50%" }}
						className="box-shadow"
					>
						<ModalBody mt={1} textAlign={"center"}>
							<Flex flexDir={"column"} gap={"2.5rem"}>
								<Heading color={"green"}>Success!</Heading>
								<Text>Your details have been submitted successfully</Text>
								<Text>Your tracking id has been sent to your email</Text>
							</Flex>
						</ModalBody>
						<ModalFooter>
							<Button colorScheme="blue" mr={3} onClick={toggleModal}>
								Close
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</Container>
		</>
	);
};

export default ReportACaseForm;
