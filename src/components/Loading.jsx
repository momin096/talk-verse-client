import Lottie from "lottie-react";

import loading from '.././assets/loading.json'

const Loading = () => {
    return (
        <div className="min-h-[calc(100vh-200px)] min-w-screen flex justify-center items-center">
            <Lottie className="h-full max-w-2xl" animationData={loading} />
        </div>
    );
};

export default Loading;