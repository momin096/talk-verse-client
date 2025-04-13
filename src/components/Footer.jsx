import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'


const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-10 mt-20">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {/* Brand Info */}
                <div>
                    <img className='w-52' src={logo} alt="" />
                    <p className="text-sm text-gray-300 mt-5">
                        Learn languages from native speakers. Book lessons, grow your skills, and connect globally.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Platform</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="/" className="hover:text-indigo-400">Home</a></li>
                        <li><Link to={'/find-tutors'} className="hover:text-indigo-400">Find Tutors</Link></li>
                        <li><a href="/" className="hover:text-indigo-400">Languages</a></li>
                        <li><a href="/" className="hover:text-indigo-400">Pricing</a></li>
                    </ul>
                </div>

                {/* Support Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-indigo-400">Help Center</a></li>
                        <li><a href="#" className="hover:text-indigo-400">FAQ</a></li>
                        <li><a href="#" className="hover:text-indigo-400">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-indigo-400">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4 text-sm">
                        <a href="#" className="hover:text-indigo-400">Facebook</a>
                        <a href="#" className="hover:text-indigo-400">Twitter</a>
                        <a href="#" className="hover:text-indigo-400">LinkedIn</a>
                    </div>
                </div>
            </div>

            <div className="text-center text-gray-500 text-sm mt-10 border-t border-gray-800 pt-4">
                © {new Date().getFullYear()} TalkVerse. Learn. Connect. Grow.
            </div>
        </footer>
    );
};

export default Footer;