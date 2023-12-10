import Header from "@/components/header/Header";
import LoginButton from "@/components/loginButtons/LoginButton";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function Home() {
  const user = await getServerSession();
  if (!user) {
    redirect("/api/auth/signin");
  }
  console.log("user", user);

  return (
    <div>
    <div className="pt-5 bg-dark pb-5">
      <div className="container pb-5 pt-5">
        <div className="container d-flex justify-content-center align-item-center pb-5 pt-5">
          <div className="d-flex justify-content-center align-item-center pt-5 pb-5 ">
          <div className="d-flex justify-content-center align-item-center pt-5 pb-5 ">
          <div className="d-flex justify-content-center align-item-center pt-3 pb-5  ">
          <LoginButton title="Doctor" isDoctor={true} />
          <LoginButton title="Patient" isPatient={true}/>

          </div>
          </div>
          </div>

        </div>
      </div>
    </div></div>
  );
}
