import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex justify-center items-center bg-blue-400 h-16">
      <ul className="flex w-full text-2xl font-bold text-white gap-10  justify-center">
        <Link className="hover:text-slate-300 duration-300" href="/">
          Form
        </Link>
        <Link
          className="hover:text-slate-300 duration-300"
          href="/Pages/Dashboard"
        >
          Dashboard
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
