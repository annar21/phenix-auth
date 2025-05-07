import { useState } from "react"
import Input from "./ui/Input"
import Button from "./ui/Button";
import CustomPhoneInput from "./ui/PhoneInput";

// name, surname, email, phone, password, repeat password

const RegisterForm = () => {
  interface IForm {
    name: string;
    surname: string;
    email: string;
    phone: string;
    password: string;
    passwordConfirm: string;
  }

  const [form, setForm] = useState<IForm>({
    name: "",
    surname: "",
    email: "",
    phone: "",
    password: "",
    passwordConfirm: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
  }


  return (
    <div className="h-fit text-white py-8 px-12 rounded-lg border w-[28vw] min-w-[360px] shadow-[0px_0px_10px_5px_rgb(154,1,255)]">
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <h1 className="text-4xl font-bold text-center">Register</h1>
        <Input 
          type="text"
          placeholder="Surname..."  
          value={form.surname}
          setValue={(t) => setForm(prev => ({...prev, surname: t}))}
          header="Surname"
        />

        <Input 
          type="text"
          placeholder="Name..."
          value={form.name}
          setValue={(t) => setForm(prev => ({...prev, name: t}))}
          header="Name"
        />

        <Input 
          type="email"
          placeholder="example@example.com"
          value={form.email}
          setValue={(t) => setForm(prev => ({...prev, email: t}))}
          header="Email"
        />

        {/* <Input 
          type="text"
          placeholder="+1234567890"
          value={form.phone}
          setValue={(t) => setForm(prev => ({...prev, phone: t}))}
          header="Phone number"
        /> */}
        <CustomPhoneInput 
          header="Phone Number"
          value={form.phone}
          setValue={(t) => setForm(prev => ({...prev, phone: t}))}
        />

        <Input 
          type="password"
          placeholder="********"
          value={form.password}
          setValue={(t) => setForm(prev => ({...prev, password: t}))}
          header="Password"
        />

        <Input 
          type="password"
          placeholder="********"
          value={form.passwordConfirm}
          setValue={(t) => setForm(prev => ({...prev, passwordConfirm: t}))}
          header="Repeat Password"
        />

        <Button
          type="submit"
          className="mt-2"
        >
          <span className="font-light text-black text-[16px]">Register</span>
        </Button>
      </form>
    </div>
  )
}

export default RegisterForm;