import Profilepage from '@/components/bitians/ProfilePage'
import spam from "../../assets/spam.svg"
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';
import {useRouter} from 'next/router';
import { useState,useEffect } from 'react';
const HomeComponent = () => {
    // const router = useRouter();
    // const [email, setEmail] = useState('');
    // const session=useSession();
    // console.log(session);
    // useEffect(() => {
    //     if (session.status === 'authenticated') {
    //         setEmail(session.data.user.email);
    //     }
    //     else{
    //         router.push('/');
    //     }
    // }, [session,router]);

    return (
        <>
            <div>
                <Link href='/userform'>
                     <div>
                    <button className="fixed top-0 right-0 m-2 p-2 text-white bg-black rounded-md shadow-md hover:bg-gray-400"><Image src={spam} height={36} width={36} alt='' /><span>Edit Profile</span></button>
                    </div>
                </Link>
                {/* <Profilepage /> */}
            </div>
        </>

    )
};


export default HomeComponent;