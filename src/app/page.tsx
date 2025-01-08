import Image from "next/image";
import { Button } from "@/components/ui/button";
import Logo from "@/public/assets/icons/logo-full.svg";
import Patient from "@/public/assets/svgs/sign-up.svg"
import PatientForm from "@/components/forms/PatientForm";
import Link from "next/link";

export default function Home() {
  return (
    // <div className="flex h-screen max-h-screen">
    //   <section className="remove-scrollbar w-[85%] container my-auto">
    //     <div className="mx-auto flex  flex-col py-1">
    //       <Image
    //         src={Logo}
    //         // height={500}
    //         // width={500}
    //         alt="logo"
    //         className="mb-12 h-20"
    //       />

    //       <div className="text-16-regular mt-20 flex justify-between">
    //         <p className="justify-items-end text-dark-600 xl:text-left">
    //           © 2024 CarePluse
    //         </p>
    //       </div>
    //     </div>
    //   </section>

    //   <section className="w-[45%]">
    //     <Image
    //       src={Patient}
    //       height={500}
    //       width={500}
    //       alt="patient"
    //       className="hidden h-full object-cover md:block w-full"
    //     />
    //   </section>
    // </div>
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

          <PatientForm />

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


      <section className="w-[40%]">
      <Image
        src={Patient}
        height={1000}
        width={1000}
        alt="patient"
        className="hidden h-full object-cover md:block w-full"
      />

      </section>

      
    </div>
  );
}
