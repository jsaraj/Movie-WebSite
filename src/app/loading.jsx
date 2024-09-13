
import Image from "next/image";

const Loading = () => {
    return (
        <div>
            <Image width={50} height={50} src={"/loading.svg"} alt="loading"/>
        </div>
    );
}

export default Loading;