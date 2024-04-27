import Image from "next/image";
import "katex/dist/katex.min.css";
import Link from "next/link";

interface Props {
  id: string;
  children: string;
  href: string;
}

export function imgtag({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative md:h-[600px] h-[800px] m-0">
      <Image
        src={src}
        alt={alt}
        className="m-0"
        layout="fill"
        objectFit="contain"
      />
    </div>
  );
}
export function h1tag({ id, children }: Props) {
  return (
    <>
      <hr
        className={
          "my-10 mx-auto border-1 rounded  w-full dark:border-slate-800"
        }
      />
      <div id={id} className="text-3xl font-bold mt-10 mb-5">
        💡 {children}
      </div>
    </>
  );
}
export function h2tag({ id, children }: Props) {
  return (
    <div id={id} className="text-xl font-bold ml-3 mt-10 mb-3">
      🚀 {children}
    </div>
  );
}
export function h3tag({ id, children }: Props) {
  return (
    <div id={id} className="text-2xl font-bold mt-5 mb-2">
      ▫️ {children}
    </div>
  );
}
export function h4tag({ id, children }: Props) {
  return (
    <div id={id} className="text-1xl font-bold">
      {children}
    </div>
  );
}
export function h5tag({ id, children }: Props) {
  return (
    <div id={id} className="text-xl font-bold">
      {children}
    </div>
  );
}
export function h6tag({ id, children }: Props) {
  return (
    <div id={id} className="font-bold my-1">
      {children}
    </div>
  );
}
export const oltag = ({ children }: Props) => {
  return <ol className={"mt-0 mb-4"}>{children}</ol>;
};
export const ultag = ({ children }: Props) => {
  return <ul className={"mt-0 mb-4"}>{children}</ul>;
};
export const litag = ({ id, children }: Props) => {
  return (
    <li id={id} className={"my-0"}>
      {children}
    </li>
  );
};
export const thtag = ({ children }: Props) => {
  return <th className={"dark:text-white p-1"}>{children}</th>;
};
export const tdtag = ({ children }: Props) => {
  return <th className={"text-center"}>{children}</th>;
};
export const codetag = ({ children }: Props) => {
  return <code className={"dark:text-white "}>{children}</code>;
};
export const btag = ({ children }: Props) => {
  return (
    <div
      className={
        "inline decoration-wavy underline underline-offset-4 dark:decoration-yellow-400 dark:text-white  decoration-yellow-800"
      }
    >
      {children}
    </div>
  );
};

export const ptag = ({ children }: Props) => {
  return <div className={"leading-10"}>{children}</div>;
};
export const spantag = ({ children }: Props) => {
  return <span className={""}>{children}</span>;
};
export const blockquotetag = ({ children }: Props) => {
  return (
    <blockquote className={"my-2 dark:bg-slate-800 ml-2"}>
      {children}
    </blockquote>
  );
};
export const atag = ({ id, children, href }: Props) => {
  return (
    <Link
      id={id}
      className={" hover:text-blue-700 dark:text-white no-underline"}
      href={href}
    >
      {children}
    </Link>
  );
};
