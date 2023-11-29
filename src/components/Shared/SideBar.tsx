import React from "react";
import Navbar from "./Navbar";
import Link from "next/link";
import { fetchMenu } from "@/app/actions/fetchMenu";
import SearchBar from "./SearchBar";

interface SideBarProps {
  children: React.ReactNode;
}

const SideBar = async ({ children }: SideBarProps) => {
  const menu = await fetchMenu();
  return (
    <div className="drawer lg:drawer-open">
      <input id="sidebar" type="checkbox" className="drawer-toggle"></input>
      <div className="drawer-content">
        <Navbar />
        <div className="min-h-screen">{children}</div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="sidebar"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu  p-4 w-80 bg-base-200 h-full">
          <div className="text-xl font-bold">
            <Link href="/">E-Live</Link>
          </div>
          <div className="divider">building list</div>
          <>
            {menu ? (
              <li>
                {menu.map((m) => (
                  <details key={m.id}>
                    <summary>{m.name}</summary>
                    <ul>
                      {m.floors.map((f) => (
                        <li key={f.id}>
                          <details>
                            <summary>{f.name}</summary>
                            <ul>
                              {f.rooms.map((r) => (
                                <li key={r.id}>
                                  <Link href={`?roomId=${r.id}`}>{r.name}</Link>
                                </li>
                              ))}
                            </ul>
                          </details>
                        </li>
                      ))}
                    </ul>
                  </details>
                ))}
              </li>
            ) : null}
          </>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
