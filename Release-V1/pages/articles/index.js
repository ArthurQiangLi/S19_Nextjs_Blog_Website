import { useEffect } from "react";
import { useRouter } from "next/router";

const ArticlesIndex = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("/articles/default_page"); //redirect to the defautl article.
  }, [router]);

  return null; // Prevents any content from being shown before redirect
};

export default ArticlesIndex;
