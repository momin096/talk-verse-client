import Navbar from "../components/Navbar";

const ErrorPage = () => {
    return (
        <div>
            <Navbar />
            <div className="flex min-h-screen max-w-screen items-center justify-center">
                <img className=" h-full" src='https://i.ibb.co.com/FCvbykz/error.jpg' alt="" />
            </div>
        </div>
    );
};

export default ErrorPage;