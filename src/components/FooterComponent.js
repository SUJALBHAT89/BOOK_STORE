import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

function FooterComponent(props) {
    return (
        <div
            className={
                props.position === "absolute"
                    ? props.page === "Home"
                        ? "footer footer-home footer-absolute"
                        : "footer footer-absolute"
                    : "footer"
            }
        >
            <p className="copyright">© 2022 BT-BookStore | Follow us on</p>
            <ul className="footer-list">
                <li className="footer-item">
                    <a href="https://www.facebook.com/sujal.bhat.503" target="_blank" rel="noreferrer">
                        <FaFacebookSquare />
                    </a>
                </li>
                <li className="footer-item">
                    <a href="https://twitter.com/sujalbhat" target="_blank" rel="noreferrer">
                        <FaTwitterSquare />
                    </a>
                </li>
                <li className="footer-item">
                    <a href="https://www.linkedin.com/in/sujal-bhat-556856218/" target="_blank" rel="noreferrer">
                        <FaLinkedin />
                    </a>
                </li>
                <li className="footer-item">
                    <a href="https://www.instagram.com/suzzal.__/" target="_blank" rel="noreferrer">
                        <FaInstagramSquare />
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default FooterComponent;
