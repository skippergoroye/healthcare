import React from 'react'
import Image from "next/image";
import Logo from "@/public/assets/icons/logo-full.svg";
import Patient from "@/public/assets/images/register-img.png"
import RegisterForm from '@/components/forms/RegisterForm';

const Register = ({ params: { userId } }: SearchParamProps) => {
  return (



    



<div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src={Logo}
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <RegisterForm user={[]} />

          <p className="copyright py-12">© 2024 CarePluse</p>
        </div>
      </section>

      <Image
        src={Patient}
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  )
}

export default Register