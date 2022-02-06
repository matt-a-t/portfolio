import React from "react";

import { Icon } from "react-icons-kit";
import { github, twitter, linkedin } from "react-icons-kit/icomoon";
import { yellow, black } from "./colors";

const iconStyle = {
    margin: "64px",
    color: yellow,
};

const emailStyle = {
    color: black,
    backgroundColor: yellow,
};

const Footer = () => (
    <div
        style={{
            textAlign: "center",
            color: yellow,
        }}
    >
        <h2>Contact Me</h2>
        <p>
            If you'd like to get in touch, feel free to email me at{" "}
            <a href="mailto:matt.armstro@gmail.com" style={emailStyle}>
                matt.armstro@gmail.com
            </a>
            . I can also be found on Twitter, Github, and LinkedIn at the icons
            below.
        </p>

        <a href="https://twitter.com/The42ndMatt" target="new">
            <Icon icon={twitter} size={64} style={iconStyle} />
        </a>
        <a href="https://github.com/matt-a-t" target="new">
            <Icon icon={github} size={64} style={iconStyle} />
        </a>
        <a href="https://www.linkedin.com/in/matt-armstrong-064b66130/">
            <Icon icon={linkedin} size={64} style={iconStyle} />
        </a>
    </div>
);

export default Footer;
