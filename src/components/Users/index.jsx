import {
	Checkbox,
	HStack,
	IconButton,
	Image,
	Switch,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from "@chakra-ui/react";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebaseConfig";

const headings = [
	"name",
	"gender",
	"Phone number",
	"email",
	"state of origin",
	"LGA of origin",
	"ward",
	"district",
	"highest qualification",
	"employment preference",
	"NIN",
	"federal constituency",
	"senatorial district",
	"number of years unemployed",
	"disability",
];

const Users = () => {
	const [users, setUsers] = useState([]);
	const usersCollectionRef = collection(db, "users");

	useEffect(() => {
		const getUsers = async () => {
			const data = await getDocs(usersCollectionRef);
			setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
		};

		getUsers();
	});

	return (
		<div>
			<Table
				className="table-tiny"
				borderRadius="8px"
				border="1px solid #E8EEF8"
				variant="unstyled"
			>
				<Thead border="1px solid #E8EEF8">
					<Tr>
						<Th>
							<Checkbox colorScheme="yellow" />
						</Th>
						{headings.map((head, index) => (
							<Th color="#4B465C" py="16px" key={index}>
								<Text fontSize="14px" className="admin-table-font">
									{head}
								</Text>
							</Th>
						))}
					</Tr>
				</Thead>
				<Tbody>
					{users.map((user, index) => (
						<Tr fontWeight="500" fontSize="14px" color="#4B465C" key={index}>
							<Td className="admin-table-font">
								{/* <Checkbox colorScheme="yellow" /> */}
								{index + 1}
							</Td>
							<Td className="admin-table-font">{user?.name}</Td>
							<Td className="admin-table-font">{user?.gender}</Td>
							<Td fontWeight="600" color="#343330" className="admin-table-font">
								{user?.phone_number}
							</Td>
							<Td fontWeight="600" color="#343330" className="admin-table-font">
								{user?.email}
							</Td>
							<Td fontWeight="600" color="#343330" className="admin-table-font">
								{user?.state_of_origin}
							</Td>
							<Td className="admin-table-font">{user?.lga_of_origin}</Td>

							<Td>{user?.ward}</Td>
							<Td>{user?.district}</Td>
							<Td>{user?.highest_qualification}</Td>
							<Td>{user?.employment_preference}</Td>
							<Td>{user?.nin}</Td>
							<Td>{user?.federal_constituency}</Td>
							<Td>{user?.senatorial_district}</Td>
							<Td>{user?.number_of_years_unemployed}</Td>
							<Td>{user?.disability}</Td>
						</Tr>
					))}
				</Tbody>
			</Table>
		</div>
	);
};

export default Users;
