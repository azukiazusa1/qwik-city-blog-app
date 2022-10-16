import { component$, Resource } from "@builder.io/qwik";
import {
  DocumentHead,
  RequestHandler,
  useEndpoint,
} from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { getPostList, Post } from "~/lib/client";

export const onGet: RequestHandler<Post[]> = async () => {
  const data = await getPostList();
  return data.contents;
};

export const head: DocumentHead = {
  title: "Qwik Blog",
};

export const PostItem = component$((props: { post: Post }) => {
  const { post } = props;
  return (
    <li>
      <Link href={`/posts/${post.id}`}>{post.title}</Link>
    </li>
  );
});

export default component$(() => {
  const resource = useEndpoint<Post[]>();

  return (
    <div>
      <h1>Post List</h1>

      <Resource
        value={resource}
        onPending={() => <div>Loading...</div>}
        onRejected={(error) => <div>Error: {error.message}</div>}
        onResolved={(posts) => (
          <ul>
            {posts.map((post) => (
              <PostItem key={post.id} post={post} />
            ))}
          </ul>
        )}
      />
    </div>
  );
});
