import Link from "next/link";
import type { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="full bg-gradient-blue drawer-mobile drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col p-5 md:pl-0">
        {/* <!-- Navbar --> */}
        <div className="navbar w-full rounded-md bg-base-100 shadow-md">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-3" className="btn-ghost btn-square btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-6 w-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="mx-2 flex-1 px-2">Navbar Title</div>
          <div className="hidden flex-none lg:block">
            <ul className="menu menu-horizontal">
              {/* <!-- Navbar menu content here --> */}
              <li>
                <a>Navbar Item 1</a>
              </li>
              <li>
                <a>Navbar Item 2</a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!-- Page content here --> */}
        {children}
      </div>
      <div className="drawer-side md:m-5">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
        <ul className="menu w-80 rounded-md bg-base-100 p-4 shadow-md">
          {/* <!-- Sidebar content here --> */}
          <li>
            <Link href="/dashboard">Sidebar Item 1</Link>
          </li>
          <li>
            <Link href="/dashboard/hello">Sidebar Item 2</Link>
          </li>
          <li>
            <Link href="/api/auth/signout">Sidebar Item 2</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
