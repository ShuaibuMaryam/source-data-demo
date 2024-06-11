import React from "react";
import { Result } from "./SearchComponent";
import {
	Button,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalCloseButton,
	ModalBody,
	useDisclosure,
	Input,
	Flex,
	Box,
	Text,
} from "@chakra-ui/react";
import { Hits } from "react-instantsearch-dom";

const SearchResultsModal = ({ isOpen, handleClose, onClose }) => {
	return (
		<Modal
			isOpen={isOpen}
			onClose={handleClose}
			size={{ lg: "3xl", "2xl": "5xl" }}
		>
			<ModalOverlay />
			<ModalContent className="modal">
				<ModalHeader>Search Results</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					<Hits
						hitComponent={(hit) => (
							<Result {...hit} handleClose={handleClose} />
						)}
						handleClose={onClose}
					/>
				</ModalBody>
			</ModalContent>
		</Modal>
	);
};

export default SearchResultsModal;
