import { LinkedinIcon } from "./Icons";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex flex-row justify-between items-center bg-slate-800 p-6 text-slate-100 font-bold">
      <div>Created With Abu Rasyad</div>
      <div className="flex">
        <Link href="https://www.linkedin.com/in/muhammad-ismaill-0698a824b/" target="_blank">
          <LinkedinIcon />
        </Link>
      </div>
    </div>
  );
}
