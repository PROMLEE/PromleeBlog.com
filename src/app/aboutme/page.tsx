import Image from "next/image";
import { Contact } from "../../components/aboutme/Contact";
import { AboutMe } from "../../components/aboutme/AboutMe";
import { Skills } from "../../components/aboutme/Skills";
import { Projects } from "../../components/aboutme/Projects";
import { Exprience } from "../../components/aboutme/Exprience";
import { Toup } from "@/components/buttons/Toup";
import { Todown } from "@/components/buttons/Todown";
export default function App() {
  return (
    <>
      <Toup />
      <div
        className={
          "prose my-10 flex flex-col items-center gap-20 dark:prose-invert md:px-20"
        }
      >
        <div className="w-full">
          <h2>👨‍💻안녕하세요, 풀스택 개발자 이동훈입니다</h2>
          <div className="flex flex-wrap gap-10">
            <div className="relative mb-10 mt-[2em] h-[10rem] w-[10rem]">
              <Image
                src="https://avatars.githubusercontent.com/u/80230701?v=4?s=400"
                alt="profile_image"
                fill
                className="m-0 w-full rounded-lg border border-foreground"
              />
            </div>
            <Contact />
          </div>
        </div>
        <AboutMe />
        <Skills />
        <Projects />
        <Exprience />
      </div>
      <Todown />
    </>
  );
}
