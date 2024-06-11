import React from 'react'
import LandingLayout from "../../../layouts/landing.layout";
import Head from "next/head";
import SingleProduct from "../../../components/singleProduct";

const Product = ({}) => {
    return (
        <>
            <Head>
                <title>
                    Weather For 2 | IT Consulting and Software Development Company
                </title>
                <meta
                    name="description"
                    content="Discover Tanta's expert IT consulting and innovative software
                development services, tailored to elevate your business and drive digital transformation."
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta
                    name="keywords"
                    content="tanta innovative, Tanta, Tanta Innovative Limited, Mobile app, IT consulting, Software development,
            Custom software, Digital transformation, Cloud computing, Cybersecurity, Data analytics, Business intelligence,
          Project management, Web development, Mobile app development, UI/UX design, E-commerce, Enterprise solutions,
          IT support, Outsourcing, IT consulting services"
                />
                <meta name="author" content="Tanta Innovative Limited" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <link rel="icon" href="/assets/favicon.ico" />
            </Head>
            <SingleProduct />
        </>
    )
}

Product.getLayout = (page) => {
    return <LandingLayout>{page}</LandingLayout>;
};
export default Product;