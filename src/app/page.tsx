import Image from "next/image";
import Form from "./components/Form";
import { Signup } from "./components/Signup";
import { AuthProvider } from "./context/AuthContext";

export default function Home() {
  return (
    <AuthProvider>
      <div>
        <Signup />
      </div>
    </AuthProvider>
  );
}
