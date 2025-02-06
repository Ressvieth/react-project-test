import { useEffect, useState } from "react";
import { Layout } from "../components/Layout/Layout";
import { Postview } from "../components/Postview";

export const Home = () => {
  const [posts, setPosts] = useState();

  useEffect(() => {
    fetch("https://my.api.mockaroo.com/posts.json?key=6d1737e0")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  console.log("posts from Home component:", posts);

  const updatedPosts = posts?.map((post) => {
    return {
      ...post,
      postimage: `https://picsum.photos/id/${post.id}/800/400`,
    };
  });

  return (
    <Layout>
      <div className="main-content right-chat-active">
        <div className="middle-sidebar-bottom">
          <div className="middle-sidebar-left">
            <div className="row feed-body">
              <div className="col-xl-8 col-xxl-9 col-lg-8">
                {updatedPosts &&
                  updatedPosts.length > 0 &&
                  updatedPosts.map((post) => (
                    <Postview key={post.id} {...post} />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};
