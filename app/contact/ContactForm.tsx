"use client";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col p-5 md:w-full md:py-10 md:gap-2"
    >
      <input
        defaultValue=""
        placeholder="Whats your name ?"
        {...register("name", { required: true })}
        className="p-2 rounded-lg text-accent outline outline-[3px] focus:outline-accent dark:focus:outline-accent placeholder:text-accent/50 placeholder:text-sm bg-light dark:bg-dark dark:outline-light/50 outline-dark/50"
      />

      <span className="h-6 px-3 grid items-center text-xs text-red-500">
        {errors.name && "Please enter your Name"}
      </span>

      <input
        type="email"
        defaultValue=""
        placeholder="Whats your email address ?"
        {...register("email", { required: true })}
        className="p-2 rounded-lg text-accent text-sm outline outline-[3px] focus:outline-accent dark:focus:outline-accent placeholder:text-accent/50 placeholder:text-sm bg-light dark:bg-dark dark:outline-light/50 outline-dark/50"
      />

      <span className="h-6 px-3 grid items-center text-xs text-red-500">
        {errors.email && "Please enter your Email Address"}
      </span>

      <textarea
        placeholder="What can i do for you ?"
        rows={8}
        {...register("message", { required: true })}
        className="p-2 rounded-lg text-accent outline outline-[3px] focus:outline-accent dark:focus:outline-accent placeholder:text-accent/50 placeholder:text-sm bg-light dark:bg-dark dark:outline-light/50 outline-dark/50 "
      />

      <span className="h-6 px-3 grid items-center text-xs text-red-500">
        {errors.message && "Please enter a message"}
      </span>

      <input
        type="submit"
        value="Send me your message"
        className="bg-accent p-5 rounded-lg text-light dark:text-dark border-4 border-accent cursor-pointer dark:hover:bg-dark dark:hover:text-accent hover:bg-light hover:text-accent"
      />
    </form>
  );
};
export default ContactForm;
