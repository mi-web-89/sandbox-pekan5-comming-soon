import WaitlistForm from "./WaitlistForm";

export default function Subscribe() {
  return (
    <div className=" flex flex-col items-center justify-center text-center p-4 mt-15 pt-15 pb-20 border-t border-t-slate-600">
      <h1 className="text-5xl font-extrabold mb-4">
        Sesuatu yang Besar Akan Datang
      </h1>
      <p className="text-lg text-slate-400 max-w-xl mb-8">
        Jadilah yang pertama tahu saat kami meluncur. Daftarkan email Anda di
        daftar tunggu kami dan dapatkan akses awal.
      </p>
      <WaitlistForm />
    </div>
  );
}
