"use client";

import { WaitlistFormValues, waitlistSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "./Toast";

export default function WaitlistForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
  });

  const { showToast } = useToast();

  const onSubmit = async (data: WaitlistFormValues) => {
    console.log("Data form valid: ", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    showToast(`email ${data.email} valid dan siap dikirim`, "success");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col sm:flex-row gap-2 w-full max-w-lg mx-auto"
    >
      <div className="flex-grow">
        <div className="flex flex-col">
          <input
            {...register("email")}
            type="email"
            placeholder="masukkan email anda..."
            className="w-full text-white border border-slate-700 bg-slate-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email?.message}</p>
          )}
        </div>

        {/* checkbox */}
        <div className="flex flex-col">
          <div className="inline-flex gap-2 justify-start mt-1 px-1 ">
            <input {...register("terms")} type="checkbox" id="terms" />
            <label
              htmlFor="terms"
              className="text-white text-sm leading-loose cursor-pointer"
            >
              Saya setuju dengan{" "}
              <span className="text-cyan-500">Syarat dan Ketentuan</span>
            </label>
          </div>
          {errors.terms && (
            <p className="text-red-400 text-sm mt-1">{errors.terms?.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="max-h-13 bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition-colors disabled:bg-indigo-400 cursor-pointer"
      >
        {isSubmitting ? "Memeriksa" : "Daftar Tunggu"}
      </button>

    </form>
  );
}
