import React from "react";
import Image from "next/image";
import RegisterForm from "./register.form";

function page() {
  return (
    <div className="grid lg:grid-cols-2 p-10 h-screen">
      <RegisterForm />
      <div className="my-auto hidden lg:block ">
        <Image
          height={900}
          width={700}
          src="https://images.squarespace-cdn.com/content/v1/60818be3726c6c6c3f24a841/1622140128102-KWTH9R30PZ4DOZ9UN9KB/Mental+Health.png"
          alt=""
        />
      </div>
    </div>
  );
}

export default page;
