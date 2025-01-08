import Image from "next/image";
import { Button } from "@/components/ui/button";
import Logo from "@/public/assets/icons/logo-full.svg";
import Patient from "@/public/assets/images/appointment-img.png"
import PatientForm from "@/components/forms/PatientForm";
import Link from "next/link";





const NewAppointment = () => {
  return (
    <div className="flex h-screen max-h-screen">
  

      <section className="remove-scrollbar w-[100%] container my-auto">
        <div className="mx-auto flex flex-col py-10 max-w-[496px]">
          <Image
            src={Logo}
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          {/* <PatientForm /> */}

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 CarePluse
            </p>
            <Link href="/?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>



      <Image
        src={Patient}
        height={1000}
        width={1000}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom "
      />

 

      
    </div>
  )
}

export default NewAppointment