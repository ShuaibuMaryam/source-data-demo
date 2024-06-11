import {
	Box,
	Button,
	Checkbox,
	Flex,
	Heading,
	Input,
	InputGroup,
	InputRightElement,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { BsFilter } from "react-icons/bs";
import { CiCalendarDate } from "react-icons/ci";

function SideNav() {
	return (
		<>
			<Flex w={"20%"} justify={"center"} overflow={"hidden"}>
				<Box
					display={{ base: "none", lg: "block" }}
					fontFamily={"Work Sans"}
					p={"2rem 3rem"}
				>
					<Flex align={"center"}>
						<BsFilter fontSize={"1.5rem"} />
						<Text
							fontSize={"1.2rem"}
							fontWeight={"400"}
							color={"rgba(0, 0, 0, 0.70)"}
						>
							Filter by
						</Text>
					</Flex>
					<Box mt={"2rem"}>
						<form>
							<Box>
								<Text fontSize={"1.2rem"} fontWeight={"500"} color={"#2D2D2D"}>
									Gender
								</Text>
								<Flex direction={"column"} mt={".7rem"} gap={".5rem"}>
									<Checkbox>
										<Text>Male</Text>
									</Checkbox>
									<Checkbox>
										<Text>Female</Text>
									</Checkbox>
								</Flex>
							</Box>
							<Flex direction={"column"} gap={"1rem"} mt={"1rem"}>
								<Box fontSize={"1.1rem"} fontWeight={"500"} color={"#2D2D2D"}>
									<label htmlFor="age">Age</label>
								</Box>
								<Box>
									<Input
										type="text"
										name="age"
										border={"1px solid rgba(0, 0, 0, 0.12)"}
										borderRadius={"20px"}
									/>
								</Box>
							</Flex>
							<Flex direction={"column"} gap={"1rem"} mt={"1rem"}>
								<Box fontSize={"1.1rem"} fontWeight={"500"} color={"#2D2D2D"}>
									<label htmlFor="missing-date">Missing date</label>
								</Box>
								<Box>
									<InputGroup>
										<Input
											type="text"
											name="missing-date"
											border={"1px solid rgba(0, 0, 0, 0.12)"}
											borderRadius={"20px"}
										/>
										<InputRightElement>
											<CiCalendarDate />
										</InputRightElement>
									</InputGroup>
								</Box>
							</Flex>
							<Flex direction={"column"} gap={"1rem"} mt={"1rem"}>
								<Box fontSize={"1.1rem"} fontWeight={"500"} color={"#2D2D2D"}>
									<label htmlFor="location">Location</label>
								</Box>
								<Box>
									<Input
										type="text"
										name="location"
										border={"1px solid rgba(0, 0, 0, 0.12)"}
										borderRadius={"20px"}
									/>
								</Box>
							</Flex>
							<Button
								bg={"#7CCFED"}
								color={"#2D2D2D"}
								borderRadius={"40px"}
								w={"100%"}
								minH={"40px"}
								mt={"2rem"}
							>
								Apply
							</Button>
						</form>
					</Box>
				</Box>
			</Flex>
		</>
	);
}

export default SideNav;
