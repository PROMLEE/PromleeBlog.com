import { h1tag, h2tag, h3tag, h4tag, h5tag } from "@/components/mdx/htags";
import { oltag, litag, Answer } from "@/components/mdx/litags";
import { btag, ptag } from "@/components/mdx/font";
// import { imgtag } from "@/components/mdx/image";

export const components = {
  h1: h1tag,
  h2: h2tag,
  h3: h3tag,
  h4: h4tag,
  h5: h5tag,
  ol: oltag,
  li: litag,
  strong: btag,
  b: btag,
  p: ptag,
  // img: imgtag,
  Answer,
};