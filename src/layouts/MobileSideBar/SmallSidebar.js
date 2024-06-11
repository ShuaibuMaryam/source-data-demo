import Wrapper from "./styles";
import { FaHandsHelping, FaPhoneAlt, FaTimes } from "react-icons/fa";
import { SidebarData } from "./sidebar/data";
import SubMenu from "./sidebar/Sidebar";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { MdOutlineLogout, MdOutlineMailOutline } from "react-icons/md";

const SmallSidebar = ({ isSidebarOpen, toggleSideBar }) => {
	return (
		<Wrapper>
			<div
				className={
					isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
				}
			>
				<div className="content">
					<Flex justifyContent={"space-between"}>
						<Image src="/assets/Logo.svg" alt="logo"></Image>
						<button type="button" className="close-btn" onClick={toggleSideBar}>
							<FaTimes />
						</button>
					</Flex>

					<Box my={"1rem"}>
						<Text my={"1rem"}>Menu</Text>
						{/* <Flex direction={"column"} alignItems={"flex-start"} gap={"1rem"}>
							{SidebarData.map((item, key) => {
								return (
									<Button
										as={Link}
										key={key}
										href={item.path}
										leftIcon={item.icon}
										iconspacing={"1rem"}
										onClick={() => {
											toggleSideBar();
										}}
									>
										{item.title}
									</Button>
								);
							})}
						</Flex> */}

						{SidebarData.map((item, index) => {
							return (
								<SubMenu
									item={item}
									key={index}
									toggleSideBar={toggleSideBar}
								/>
							);
						})}
					</Box>

					<Box my={"2rem"} color={"black"}>
						<Flex direction={"column"} alignItems={"flex-start"} gap={"1rem"}>
							<Button
								leftIcon={<FaHandsHelping fontSize={"1.6rem"} />}
								iconspacing={"1rem"}
							>
								Submit your idea
							</Button>
							<Button
								leftIcon={<MdOutlineMailOutline fontSize={"1.6rem"} />}
								iconspacing={"1rem"}
							>
								<a href="mailto:hello@tantainnovatives.com">
									hello@tantainnovatives.com
								</a>
							</Button>
							<Button
								leftIcon={<FaPhoneAlt fontSize={"1.3rem"} />}
								iconspacing={"1rem"}
							>
								<a href="tel:+23414536000">01 453 6000</a>
							</Button>
						</Flex>
					</Box>

					<Button
						p={".6rem"}
						px={"1.5rem"}
						borderRadius={".8rem"}
						leftIcon={<MdOutlineLogout />}
						iconspacing={"1rem"}
						colorScheme="gray"
						bg={"#980000"}
						color={"white"}
						width={"100%"}
					>
						Sign In
					</Button>
				</div>
			</div>
		</Wrapper>
	);
};

export default SmallSidebar;
