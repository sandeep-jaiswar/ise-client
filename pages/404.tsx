import Image from "next/image";
import Link from "next/link";

const FourOhFour = () => {
    return(
        <div className="flex h-screen items-center justify-center">
            <div className="text-center">
                <Image src={'/404.svg'} width={200} height={200} alt={'404'} className="mb-6" />
                <p className="mb-6">Could not find requested resource</p>
                <Link href="/" className="text-blue-500 hover:text-blue-700">Return Home</Link>
            </div>
        </div>
    )
};

export default FourOhFour;
