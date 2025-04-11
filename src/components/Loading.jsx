import Lottie from "lottie-react";

import loading from '.././assets/loading.json'

const Loading = () => {
    return (
        <div>
            <Lottie animationData={loading} />
        </div>
    );
};

export default Loading;