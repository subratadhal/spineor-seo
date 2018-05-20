import React from "react";
import Helmet from "react-helmet";

const Contact = () => (
    <div>
        
        <Helmet>
            <title>Contact Page</title>
            <meta name="ROBOTS" CONTENT="NOINDEX, NOFOLLOW" />
            <meta name="description" content="This is a proof of concept for React SSR" />
        </Helmet>
        <h2>This is the contact page</h2>
    </div>
);

export default Contact;
