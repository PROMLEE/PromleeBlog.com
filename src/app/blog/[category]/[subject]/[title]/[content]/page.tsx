import { urlParams } from "@/config/types";
import RightSidebarComp from "@/components/bars/RightSidebar";
import { Pw } from "@/components/Pw";
import { Suspense } from "react";
import { Toup } from "@/components/buttons/Toup";
import { Todown } from "@/components/buttons/Todown";
import { Metadata } from "next";
import { BreadCrumb } from "@/components/posts/BreadCrumb";
import { MdxBody } from "@/components/posts/MdxBody";
import { MdxHeader } from "@/components/posts/MdxHeader";
import { getPostDetail } from "@/lib/PostUtils/GetPost";
import { GenerateMeta } from "@/lib/PostUtils/GenerateMeta";

export async function generateMetadata({
  params,
}: {
  params: urlParams;
}): Promise<Metadata> {
  const post = await getPostDetail(params);
  return GenerateMeta({ meta: post, params });
}

const Post = async ({ params }: { params: urlParams }) => {
  const post = await getPostDetail(params);
  return (
    <>
      <Toup />
      <Suspense fallback={<div>Loading...</div>}>
        {post.lock && <Pw />}
      </Suspense>
      <BreadCrumb params={params} />
      <RightSidebarComp content={post.content} />
      <div className="prose mt-10 min-h-[100vh] scroll-smooth dark:prose-invert focus:scroll-auto">
        <Suspense fallback={<div>Loading...</div>}>
          <MdxHeader props={post} />
          <MdxBody content={post.content} />
        </Suspense>
      </div>
      <Todown />
    </>
  );
};
export default Post;
