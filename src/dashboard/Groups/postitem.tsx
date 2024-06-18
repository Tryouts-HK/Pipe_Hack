
import React from 'react';
import { Post } from './groups.interfaces';

interface PostItemProps {
  post: Post;
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <div className="p-4 border rounded mb-4">
      <p className="text-sm font-semibold">{post.author}</p>
      <p className="text-sm">{post.content}</p>
      <p className="text-xs text-gray-500">{new Date(post.timestamp).toLocaleString()}</p>
    </div>
  );
};

export default PostItem;
