
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
// import ConfessionList from "../components/confessions/ConfessionList";
export default function Home() {
  const [name, setName] = useState("");
  const a = useSession();
  useEffect(() => {
    if (a.data) {
      setName(a.data.user.name);
    }
  }, [a]);
  return (
    <div>
      <button onClick={() => signIn("google")}>Sign in</button>
      <div className="bg-red-300">Hi {name}</div>
    </div>
  );
}
