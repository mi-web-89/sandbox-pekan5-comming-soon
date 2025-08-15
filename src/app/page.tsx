import WaitlistForm from "@/components/WaitlistForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center text-center p-4">
      <h1 className="text-5xl font-extrabold text-white mb-4">
        Sesuatu yang Besar Akan Datang
      </h1>
      <p className="text-lg text-slate-400 max-w-xl mb-8">
        Jadilah yang pertama tahu saat kami meluncur. Daftarkan email Anda di daftar tunggu kami dan dapatkan akses awal.
      </p>
      <WaitlistForm />
    </div>
  );
}
