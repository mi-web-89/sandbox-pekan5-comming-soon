"use client";

import { WaitlistFormValues, waitlistSchema } from "@/lib/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useToast } from "../Toast";
import { useMutation } from "@tanstack/react-query";
import FormField from "../FormField";

export default function WaitlistForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }, // isSubmitting
    reset, // reset form
  } = useForm<WaitlistFormValues>({
    resolver: zodResolver(waitlistSchema),
  });

  const { showToast } = useToast();

  const { mutate, isPending } = useMutation({
    mutationFn: async (data: WaitlistFormValues) => {
      console.log(data);
      const response = await fetch(
        "https://sandbox-hsi-ismail.free.beeceptor.com/api/add-user",
        {
          method: "POST",
          headers: { "Content-Type": "aplication/json" },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error("Gagal mendaftar. Silahkan mencoba lagi");
      }

      return response.json();
    },

    onSuccess: () => {
      console.log("data berhasil dikirim");
      showToast("Data berhasil dikirm", "success");
      reset(); // reset form
    },

    onError: (error) => {
      console.error("Terjadi kesalahan: ", error);
      showToast(
        "Oops! terjadi kesalahan. silahkan coba beberapa saat lagi",
        "error"
      );
    },
  });

  const onSubmit = async (data: WaitlistFormValues) => {
    mutate(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col sm:flex-row gap-2 w-full max-w-lg mx-auto"
    >
      <div className="flex-grow">
        <div className="flex flex-col mb-5">
          <FormField
            id="username"
            label="username"
            error={errors.username?.message}
          >
            <input
              {...register("username")}
              id="username"
              type="text"
              placeholder="masukan nama anda..."
              className="w-full text-white border border-slate-700 bg-slate-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </FormField>
        </div>

        <div className="flex flex-col">
          <FormField id="email" label="email" error={errors.email?.message}>
            <input
              {...register("email")}
              id="email"
              type="email"
              placeholder="masukkan email anda..."
              className="w-full text-white border border-slate-700 bg-slate-800 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </FormField>
        </div>

        {/* checkbox */}
        <div className="flex flex-col">
          <div className="inline-flex gap-2 justify-start mt-2 px-1 ">
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

        {/* 4. Gunakan `isPending` dari `useMutation` untuk status loading */}
        {/* sebelumnya menggunakan `isSubmiting` dari `formState RFH`  */}
        <div className="flex flex-col mt-8">
          <button
            type="submit"
            disabled={isPending}
            className="max-h-13 bg-indigo-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-indigo-700 transition-colors disabled:bg-indigo-400 cursor-pointer"
          >
            {isPending ? "Memeriksa" : "Daftar Tunggu"}
          </button>
        </div>
      </div>
    </form>
  );
}
