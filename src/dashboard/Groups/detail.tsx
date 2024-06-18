import { useState } from "react";
import { Group, Post } from "./groups.interfaces";
import PostCreationForm from "./post";
import PostList from "./postlist";

interface GroupDetailsProps {
  group: Group;
}

const GroupDetails: React.FC<GroupDetailsProps> = ({ group }) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const handleCreatePost = (newPost: Post) => {
    setPosts((prevPosts : any) => [...prevPosts, newPost]);
  };

  return (
    <div className="p-4 border rounded mb-4">
      <h2 className="text-xl font-bold">{group.name}</h2>
      <p className="text-sm">{group.description}</p>
      <PostCreationForm groupId={group.id} onCreatePost={handleCreatePost} />
      <PostList posts={posts} />
    </div>
  );
};

export default GroupDetails;
