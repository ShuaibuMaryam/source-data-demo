import React, { useState } from "react";
import styled from "styled-components";
import { Button, Flex } from "@chakra-ui/react";
import Link from "next/link";
import { colors } from "../../../../styles/theme";

const SidebarLink = styled(Button)`
	display: flex;
	color: black;
	justify-content: space-between;
	align-items: center;
	list-style: none;
	text-decoration: none;
	font-size: 1rem;
	border-block: 0.00001px solid #ccc;
	padding-block: 0.8rem;

	:first-of-type {
	}

	&:hover {
		cursor: pointer;
		color: ${colors.primaryColor};
		svg {
			color: ${colors.primaryColor};
		}
	}
`;

const SidebarLabel = styled.span`
	margin-left: 10px;
`;

const DropdownLink = styled(Button)`
	background: white;
	padding-left: 3rem;
	display: flex;
	align-items: center;
	text-decoration: none;
	color: black;
	font-size: 15px;
	margin-block: 1rem;

	&:hover {
		cursor: pointer;
	}
`;

const SubMenu = ({ item, toggleSideBar }) => {
	const [subnav, setSubnav] = useState(false);

	const showSubnav = () => setSubnav(!subnav);

	const handleClick = () => {
		if (item.subNav) {
			showSubnav();
		}
		if (!item.subNav) {
			toggleSideBar();
		}
	};
	return (
		<>
			<SidebarLink
				href={item.subNav ? "/" : item.path}
				onClick={handleClick}
				as={Link}
				iconspacing={"1rem"}
			>
				<Flex justifyContent={"center"} alignItems={"center"}>
					{item.icon}
					<SidebarLabel>{item.title}</SidebarLabel>
				</Flex>
				<div>
					{item.subNav && subnav
						? item.iconOpened
						: item.subNav
						? item.iconClosed
						: null}
				</div>
			</SidebarLink>

			{subnav &&
				item.subNav.map((item, index) => {
					return (
						<DropdownLink
							href={item.path}
							key={index}
							onClick={() => {
								toggleSidebar();
							}}
							as={Link}
						>
							{item.icon}
							<SidebarLabel>{item.title}</SidebarLabel>
						</DropdownLink>
					);
				})}
		</>
	);
};

export default SubMenu;
