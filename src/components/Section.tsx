import type { PropsWithChildren } from "react";
export default function Section({ children }: PropsWithChildren) {
  return <section className="section">{children}</section>;
}