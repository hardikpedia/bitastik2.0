import spam from "../../assets/spam.svg";
import Image from "next/image";
import Link from "next/link";
import pencil from "../../assets/pencil.gif";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import ProfilePage from "@/components/bitians/ProfilePage";
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
      <div className="ml-16">
        <Link href="/userform">
          <div>
            <button className="fixed z-50 top-0 right-0 m-2 p-2 text-black bg-white rounded-md shadow-md">
              <Image src={pencil} height={36} width={36} alt="" />
              <span>Edit Profile</span>
            </button>
          </div>
        </Link>
   <ProfilePage/>
      </div>
    </>
  );
};

export default HomeComponent;
