
import Image from "next/image";

const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <Image width={100} height={100} src={"/loading.svg"} alt="loading"/>
        </div>
    );
}

export default Loading;