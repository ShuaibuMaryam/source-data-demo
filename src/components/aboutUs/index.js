import React from "react";
import {Box, Button, Container, Flex, Grid, Image, Text} from "@chakra-ui/react";
import {BsFillSquareFill} from "react-icons/bs"
import Head from "next/head";

function AboutUs() {
    return (
        <>

            <Head>
                <title> About Us - Weatherfor2</title>
                <meta
                    name="description"
                    content="Discover exquisite interior decors and homely accessories at Weatherfor2.
                     Our curated collection blends style, functionality, and innovation to transform
                     spaces into captivating havens. Join us in creating harmonious living environments that
                     inspire conversations. Welcome to Weatherfor2, where timeless elegance awaits."
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Epilogue:wght@700;800&family=Manrope:wght@700;800&family=Open+Sans:wght@300;400;500;600;800&family=Roboto:wght@300;400;500;700;900&family=Urbanist:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,500;1,600;1,700;1,800&display=swap"
                    rel="stylesheet"></link>
            </Head>
            <Box fontFamily={"'Urbanist', sans-serif"}>
                <Box
                    backgroundImage="url('/assets/aboutUs/mobileBanner.png')"
                    backgroundSize={"contain"}
                    width={"100%"}
                    backgroundRepeat={"no-repeat"}
                    height={"7.4rem"}
                    backgroundPosition={"center"}
                    display={{base: "block", md: "none", lg: "none"}}

                > <Box width={"30%"} m={"auto"}>
                    <Text
                        fontSize={"27.26px"}
                        fontWeight={"700"}
                        color={"#FFF"}
                        textShadow={" 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
                        position={"relative"}
                        top={"2rem"}
                    >About Us</Text>
                    <Text fontSize={"14px"}
                          fontWeight={"700"}
                          color={"#FFF"}
                          textShadow={" 0px 4px 4px 0px rgba(0, 0, 0, 0.25), 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"}
                          position={"relative"}
                          top={"1.5rem"}
                          left={"0.5rem"}
                    >Home  About</Text>

                </Box>
                </Box>

                <Box
                    backgroundImage="url('/assets/aboutUs/aboutUsBanner.png')"
                    backgroundSize={"cover"}
                    width={"100%"}
                    backgroundRepeat={"no-repeat"}
                    height={"7.4rem"}
                    backgroundPosition={"center"}
                    display={{base: "none", md: "block", lg: "block"}}
                    mt={"3rem"}
                >


                </Box>

                <Container maxW={"7xl"}>
                    <Box width={{base: "100%", md: "90%", lg: "90%"}} m={{base: "0", md: "auto", lg: "auto"}}>
                        <Box alignItems={"center"} display={"flex"} justifyContent={"center"} mt={"3rem"}>
                            <Image src={"/assets/authenticationPages/resetPassword/logo.png"}
                                   width={""}
                                   height={""}
                                   alt={"logo"}/>
                        </Box>

                        <Box alignItems={"center"} display={"flex"} justifyContent={"center"} mt={"3rem"}>
                            <Image src={"/assets/aboutUs/dinning.png"}
                                   width={""}
                                   height={""}
                                   alt={"logo"}/>
                        </Box>

                        <Grid mt={"3rem"}
                              gridTemplateColumns={{
                                  base: "1fr",
                                  lg: "40% 70%",
                                  md: "40% 60%",
                                  sm: "none",
                              }}

                        >
                            <Box position={"relative"} top={{base: "2rem", md: "0", lg: "0"}}>
                                <Image src={"/assets/aboutUs/space.png"}
                                       width={{base: "10rem", md: "108rem", lg: "108rem"}}
                                       height={{base: "7rem", md: "35rem", lg: "30rem"}}
                                       alt={"logo"}/>
                            </Box>
                            <Box ml={"2rem"}>
                                <Text
                                    fontSize={{base: "24px", md: "20px", lg: "44.766px"}}
                                    fontWeight={"700"}
                                    ml={{base: "9rem", md: "0", lg: "0"}}
                                    mb={{base: "1rem", md: "0", lg: "0"}}
                                    color={""}
                                >Simply Creative</Text>
                                <Box
                                    style={{
                                        height: "2px",
                                        background: "rgba(167, 1, 110, 1)",
                                        marginBottom: "1rem ",
                                        marginTop: "1rem"
                                    }}
                                    display={{base: "none", md: "block", lg: "block"}}
                                    width={{base: "0", md: "6rem", lg: "14rem"}}
                                ></Box>
                                <Box
                                    w={{base: "17.125rem", md: "25rem", lg: "43rem"}}
                                    color={""}
                                    fontSize={{base: "14px", md: "20px", lg: "24px"}}
                                    fontWeight={"400"}
                                    ml={{base: "4rem", md: "0", lg: "0"}}
                                >
                                    <Text>
                                        Discover exquisite interior decors and homely accessories at
                                        <Text as="span" fontWeight={"700"}> Weatherfor2.</Text>
                                        Our curated collection blends style, functionality, and innovation to
                                        transform spaces into captivating havens.
                                    </Text>
                                    <Text mt={"1rem"}>
                                        Choose from statement furniture to enchanting accents, reflecting your unique
                                        personality
                                        and taste. Let us inspire you on your design journey with personalized
                                        assistance and a
                                        commitment to excellence.
                                    </Text>
                                    <Text mt={"1rem"}>
                                        Join us in creating harmonious living environments that evoke emotions and
                                        inspire
                                        conversations. Welcome to a world of refined aesthetics and timeless elegance at
                                        <Text as="span" fontWeight={"700"}> Weatherfor2.</Text>
                                    </Text>
                                </Box>
                            </Box>
                        </Grid>

                        <Flex mt={"3rem"}>
                            <Box
                                w={{base: "12rem", md: "36.289rem", lg: "36.289rem"}}
                                height={{base: "20rem", md: "33rem", lg: "38rem"}}
                                bg={"rgba(245, 245, 245, 1)"}
                                boxShadow={"8px 12px 22px 0px rgba(0, 0, 0, 0.14)"}
                            >
                                <Box width={"80%"} m={"auto"}>
                                    <Flex mt={"3rem"}>
                                        <Text color={"rgba(167, 1, 110, 1)"}
                                              fontSize={"10px"} mt={"5px"}>
                                            <BsFillSquareFill/>
                                        </Text>
                                        <Text
                                            color={"#DB0090"}
                                            fontSize={"15px"}
                                            fontWeight={"400"}
                                            ml={"4px"}
                                        >INTRODUCING</Text>
                                    </Flex>
                                    <Text color={"#000"}
                                          fontSize={{base: "20px", md: "50px", lg: "59.708px"}}
                                          fontWeight={"700"}
                                          w={{base: "9rem", md: "20rem", lg: "24rem"}}
                                          lineHeight={{base: "2rem", md: "4rem", lg: "4rem"}}
                                    >
                                        Introducing our All-New Collection
                                    </Text>
                                    <Text
                                        color={"#000"}
                                        fontSize={{base: "12px", md: "20px", lg: "22.658px"}}
                                        fontWeight={"400"}
                                        w={{base: "9rem", md: "20rem", lg: "23.367rem"}}
                                        mt={{base: "2px", md: "2rem", lg: "2rem"}}
                                    >
                                        Soft premium Bedding easy to wash, with up to 100 wash. Exclusive just for you.
                                    </Text>
                                    <Button
                                        bg={"rgba(219, 0, 144, 1)"}
                                        boxShadow={" 0px 3.804173231124878px 3.804173231124878px 0px rgba(0, 0, 0, 0.25)"}
                                        color={"rgba(255, 255, 255, 1)"}
                                        p={{base: "7px 30px", md: "7.435px 48.149px", lg: "7.435px 48.149px"}}
                                        mt={{base: "1rem", md: "3rem", lg: "3rem"}}
                                        fontSize={{base: "12px", md: "15px", lg: "19.021px"}}
                                    >View Collection</Button>
                                </Box>
                            </Box>
                            <Box
                                zIndex={""}
                            >
                                <Image src={"/assets/aboutUs/bedSpace.png"}
                                       height={{base: "20rem", md: "33rem", lg: "38rem"}}
                                       w={{base: "12rem", md: "30rem", lg: "50rem"}}
                                       alt={"Bed space"}/>
                            </Box>
                        </Flex>
                    </Box>
                </Container>
            </Box>
        </>
    )
}

export default AboutUs