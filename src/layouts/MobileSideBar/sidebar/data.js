import {
	MdInfoOutline,
	MdKeyboardArrowRight,
	MdLineWeight,
	MdOutlineHome,
	MdOutlineKeyboardArrowDown,
	MdOutlineMenuBook,
	MdOutlineMiscellaneousServices,
	MdOutlinePersonPin,
	MdWorkHistory,
} from "react-icons/md";
import { BsJournalBookmarkFill, BsPencilSquare } from "react-icons/bs";
import { FaBlogger, FaIndustry } from "react-icons/fa";

export const ServicesData = [
	{
		title: "Software Development",
		path: "/",
		icon: <MdOutlineHome />,
		iconOpened: <MdOutlineKeyboardArrowDown fontSize={"1.4rem"} />,
	},

	{
		title: "Application Services",
		path: "/",
		icon: <MdInfoOutline fontSize={"1.4rem"} />,
		iconOpened: <MdOutlineKeyboardArrowDown fontSize={"2rem"} />,

		subNav: [
			{
				title: "About",
				path: "about",
				icon: <MdLineWeight />,
				cName: "sub-nav",
			},
			{
				title: "Careers",
				path: "careers",
				icon: <MdLineWeight />,
				cName: "sub-nav",
			},

			{
				title: "Contact Us",
				path: "contact",
				icon: <MdLineWeight />,
				cName: "sub-nav",
			},
		],
	},

	{
		title: "IT Consulting",
		path: "/it_consulting",
		icon: <MdOutlinePersonPin />,
		iconOpened: <MdOutlineKeyboardArrowDown fontSize={"1.4rem"} />,
	},
	{
		title: "Cyber Security",
		path: "/",
		icon: <MdOutlineMenuBook />,
		iconOpened: <MdOutlineKeyboardArrowDown />,
	},
	{
		title: "Managed IT Services",
		path: "/",
		icon: <BsPencilSquare />,
		iconOpened: <MdOutlineKeyboardArrowDown />,
	},
	{
		title: "UI/UX Designs",
		path: "/",
		icon: <MdKeyboardArrowRight />,
		iconOpened: <MdOutlineKeyboardArrowDown />,
	},
	{
		title: "Infrastructural Services",
		path: "/",
		iconClosed: <MdKeyboardArrowRight />,
		iconOpened: <MdOutlineKeyboardArrowDown />,
	},
	{
		title: "Data Analytics",
		path: "/",
	},

	{
		title: "Testing and QA",
		path: "/services/testing_and_qa",
	},

	{
		title: "IOT Services",
		path: "/services/iot_services",
	},
];
export const SidebarData = [
	{
		title: "Home",
		path: "/",
		icon: <MdOutlineHome fontSize={"1.6rem"} />,
		iconOpened: <MdOutlineKeyboardArrowDown />,
	},
	{
		title: "Company",
		path: "/",
		icon: <MdWorkHistory fontSize={"1.6rem"} />,

		iconClosed: <MdKeyboardArrowRight fontSize={"2rem"} />,
		iconOpened: <MdOutlineKeyboardArrowDown fontSize={"2rem"} />,

		subNav: [
			{
				title: "Contact Us",
				path: "contactUs",
				icon: <MdLineWeight />,
				cName: "sub-nav",
			},
			{ title: "About Us", path: "/about_us", icon: <MdLineWeight /> },
			{
				title: "Career Opportunities",
				path: "/career/career_opportunities",
				icon: <MdLineWeight />,
			},
			{ title: "Leadership", path: "/leadership", icon: <MdLineWeight /> },
			{ title: "Our Experts", path: "/expert/", icon: <MdLineWeight /> },

			{
				title: "Partner with us",
				path: "/partnerWithUs",
				icon: <MdLineWeight />,
			},
		],
	},
	{
		title: "Services",
		path: "/",
		icon: <MdOutlineMiscellaneousServices fontSize={"1.6rem"} />,

		iconClosed: <MdKeyboardArrowRight fontSize={"2rem"} />,
		iconOpened: <MdOutlineKeyboardArrowDown fontSize={"2rem"} />,

		subNav: [
			{
				title: "Software Development",
				path: "/services/software_development_services",
				icon: <MdLineWeight />,
			},
			{
				title: "Testing & QA",
				path: "/services/qa_testings",
				icon: <MdLineWeight />,
			},
			{
				title: "Application Services",
				path: "/services/application_services",
				icon: <MdLineWeight />,
			},
			{
				title: "UX/UI Design",
				path: "/services/ui_ux",
				icon: <MdLineWeight />,
			},
			{
				title: "IT Consulting",
				path: "/services/it_consulting",
				icon: <MdLineWeight />,
			},

			{
				title: "Data Analytics",
				path: "/services/data_analytics",
				icon: <MdLineWeight />,
			},

			{
				title: "Cyber Security",
				path: "/services/cyber_security",
				icon: <MdLineWeight />,
			},
			{
				title: "IoT Services",
				path: "/services/iot_services",
				icon: <MdLineWeight />,
			},
			{
				title: "IT Outsourcing",
				path: "/services/it_outsourcing",
				icon: <MdLineWeight />,
			},
		],
	},
	{
		title: "Industries",
		path: "/industries",
		icon: <FaIndustry fontSize={"1.6rem"} />,

		iconClosed: <MdKeyboardArrowRight fontSize={"2rem"} />,
		iconOpened: <MdOutlineKeyboardArrowDown fontSize={"2rem"} />,

		subNav: [
			{
				title: "Health Care",
				path: "/industries/health_care",
				icon: <MdLineWeight />,
			},
			{ title: "Retail", path: "/industries/retail", icon: <MdLineWeight /> },
			{
				title: "Corporate",
				path: "/industries/corporate",
				icon: <MdLineWeight />,
			},
			{
				title: "Real Estate and Housing",
				path: "/industries/real_estate_and_housing",
				icon: <MdLineWeight />,
			},
			{
				title: "Education",
				path: "/industries/education",
				icon: <MdLineWeight />,
			},
			{ title: "Banking", path: "/industries/banking", icon: <MdLineWeight /> },
		],
	},
	{
		title: "Solutions",
		path: "/solutions/solutions_we_deliver",
		icon: <MdInfoOutline fontSize={"1.6rem"} />,
		iconOpened: <MdOutlineKeyboardArrowDown fontSize={"2rem"} />,
	},
	{
		title: "Case Studies",
		path: "/caseStudies",
		icon: <BsJournalBookmarkFill fontSize={"1.6rem"} />,
		iconOpened: <MdOutlineKeyboardArrowDown fontSize={"1.4rem"} />,
	},
	{
		title: "Blog",
		path: "/blog",
		icon: <FaBlogger fontSize={"1.6rem"} />,
		iconOpened: <MdOutlineKeyboardArrowDown fontSize={"1.4rem"} />,
	},
];
