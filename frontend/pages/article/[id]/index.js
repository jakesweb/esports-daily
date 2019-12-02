import { useRouter } from "next/router";
import PostDetail from "../../../components/PostDetail";

const Article = () => {
  const router = useRouter();
  const { id } = router.query;

  return <PostDetail id={id} />;
};

export default Article;
