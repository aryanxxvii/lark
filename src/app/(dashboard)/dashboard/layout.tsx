import type { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return <section className="pt-16">{children}</section>;
}
