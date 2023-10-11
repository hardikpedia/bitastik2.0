import React, { useEffect, useState} from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import pencil from "../../assets/pencil.gif";
import ProfileCard from "@/components/bitians/ProfileCard";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const HomeComponent = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [info, setInfo] = useState(null);
  const { data: session, status } = useSession()
 
  const router = useRouter();
  const handleCloseCard = () => {
    setIsOpen(false);
    router.push("/bitians");
  };
  useEffect(() => {
    const findUser = async (email) => {
      const res = await axios.get(`/api/user?email=${email}`);
      setInfo(res.data.user[0]);
    };
    findUser(session.user.email);
  }, []);

  const cardClassName = isOpen
    ? "fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-80 transition-opacity duration-50"
    : "hidden";

  return (
    <>
      <div>
        <Link href="/userform">
          <button className="fixed z-10 top-0 right-0 m-2 p-2 text-black bg-white rounded-md shadow-md">
            <Image src={pencil} height={36} width={36} alt="" />
            <span>Edit Profile</span>
          </button>
        </Link>
      </div>

      <div className={cardClassName}>
        <div > {info && <ProfileCard info={info} onClose={handleCloseCard} />}</div>
      </div>
    </>
  );
};

export default HomeComponent;
