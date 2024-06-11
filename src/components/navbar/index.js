import {
	Box,
	Container,
	Flex,
	useTheme,
	Text,
	Image,
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalBody,
} from "@chakra-ui/react";

import Link from "next/link";
import { GrFormAdd } from "react-icons/gr";
import styled from "styled-components";
import MobileNav from "./MobileNav";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import AddCategory from "./ReportACaseForm";
import ReportAChildForm from "./ReportACaseForm";
import ReportACaseForm from "./ReportACaseForm";

const Navbar = () => {
	const theme = useTheme();
	const [modalOpen, setModalOpen] = useState(false);
	const toggleModal = () => {
		setModalOpen(!modalOpen);
	};

	return (
		<Container maxW={"8xl"}>
			<Box
				position={"fixed"}
				right={"0"}
				left={"0"}
				top={"0"}
				zIndex="1001"
				// boxShadow={"0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
				overflow={"hidden"}
			>
				<DesktopNav>
					<Flex
						align={"center"}
						justify={"space-between"}
						p={"1rem"}
						fontFamily={"Work Sans"}
						bgColor={"white"}
						// border={"1px solid"}
						// zIndex={"1"}
					>
						<Box w={"7rem"}>
							<Link href={"/"}>
								<Image
									src="/assets/landingPage/OHOME.svg"
									alt="logo"
									w={"100%"}
								/>
							</Link>
						</Box>
						<Flex gap={"1rem"}>
							<Link href="#">
								<Text>About</Text>
							</Link>
							<Link href="#">
								<Text>Contact</Text>
							</Link>
							<Link href="#">
								<Text>News</Text>
							</Link>
						</Flex>
						<Box>
							<Button
								onClick={toggleModal}
								leftIcon={<GrFormAdd />}
								bg={"#7CCFED"}
								color={"#2D2D2D"}
								borderRadius={"40px"}
								minW={"200px"}
								minH={"40px"}
							>
								Report Case
							</Button>
						</Box>
					</Flex>
				</DesktopNav>
			</Box>
			<NavMobile>
				<Flex justify={"space-between"} align={"center"} p={"1rem"}>
					<Box w={"7rem"}>
						<Image src="/assets/landingPage/OHOME.svg" alt="logo" w={"100%"} />
					</Box>
					<MobileNav toggleModal={toggleModal} />
				</Flex>
			</NavMobile>

			{/* MODAL */}
			<Modal isOpen={modalOpen} onClose={toggleModal}>
				<ModalOverlay />
				<ModalContent
					maxWidth={"90%"}
					border="1px solid #000"
					className="box-shadow"
				>
					<ModalBody mt={1}>
						<Box>
							<ReportACaseForm toggleModal={toggleModal} />
						</Box>
					</ModalBody>
				</ModalContent>
			</Modal>
		</Container>
	);
};

export default Navbar;

const DesktopNav = styled.div`
	@media (max-width: 600px) {
		display: none;
	}
`;

const NavMobile = styled.div`
	@media (min-width: 768px) {
		display: none;
	}
`;
