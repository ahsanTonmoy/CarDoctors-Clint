import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/logo.svg'
const Footer = () => {
    return (
        <div>
            <footer className="footer  bg-base-200 text-base-content px-4 md:px-20 py-4">
                <aside>
                    <Link to={'/'} className="m-4">
                        <img className="w-full h-16" src={logo} alt="" />
                    </Link>
                    <p>Car Doctor Ltd.<br />Providing reliable cars since 2010</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;