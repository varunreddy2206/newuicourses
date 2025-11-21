"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import SubHeader from "./SubHeader";

export default function RouteWrapper({ children }) {
  const pathname = usePathname();

  const hideHeader = pathname.startsWith("/userdashboard");

  return (
    <div className={hideHeader ? "" : "pt-28"}>
      {!hideHeader && (
        <>
          <Header />
          <SubHeader />
        </>
      )}
      {children}
    </div>
  );
}
