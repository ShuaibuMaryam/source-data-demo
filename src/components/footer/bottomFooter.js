import React from 'react'
import {Box, Flex, Text, useTheme} from "@chakra-ui/react";
import Link from "next/link";

import {RiFacebookCircleLine} from "react-icons/ri";
import styled from "styled-components";
import {LiaTelegram} from "react-icons/lia";
import {BsInstagram} from "react-icons/bs";
import {FiTwitter} from "react-icons/fi";
import {FaPinterestP} from "react-icons/fa";

const BottomFooter = () => {
    const theme = useTheme();
    const year = new Date().getFullYear();
    return (
        <>
            <Box
                padding={'1rem 3rem'}
                bg='#480130'
                color={'#ffff'}
            >
                <Flex justifyContent={'center'} alignItems={'center'}>
                    <Text mr={'2rem'}>© {year} Weather for 2. Powered by {' '}
                        <Link href={'https://tantainnovatives.com'}
                              target={"_blank"}
                              rel="noopener noreferrer"
                              style={{textDecoration: 'underline'}}>
                            Tanta Innovative
                        </Link>
                    </Text>
                    <BottomIcons className="hide">
                        <Link href="https://twitter.com/tantainnovative" target="_blank">
                            <RiFacebookCircleLine fontSize={"1.2rem"} color="#fff"/>
                        </Link>
                        <Link href="https://facebook.com/tantainnovatives" target="_blank">
                            <LiaTelegram fontSize={"1.2rem"} color="#fff"/>
                        </Link>
                        <Link href="https://instagram.com/tantainnovative" target="_blank">
                            <BsInstagram fontSize={"1.2rem"} color="#fff"/>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/company/tantainnovative"
                            target="_blank"
                        >
                            <FiTwitter fontSize={"1.2rem"} color="#fff"/>
                        </Link>
                        <Link href="#" target="_blank">
                            <FaPinterestP fontSize={"1.2rem"} color="#fff"/>
                        </Link>
                    </BottomIcons>
                </Flex>
            </Box>
        </>
    )
}

export default BottomFooter;


const BottomIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding-left: .3rem;
  margin-left: 2rem;
  gap: .5rem;

  @media (min-width: 992px) {
    .hide {
      display: none;
    }
  }
`
