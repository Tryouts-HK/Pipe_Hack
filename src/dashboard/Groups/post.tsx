// src/components/PostCreationForm.tsx
import React, { useState } from 'react';
import { Post } from './groups.interfaces';

interface PostCreationFormProps {
  groupId: string;
  onCreatePost: (post: Post) => void;
}

const PostCreationForm: React.FC<PostCreationFormProps> = ({ groupId, onCreatePost }) => {
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost: Post = {
      id: Date.now().toString(),
      groupId,
      author,
      content,
      timestamp: new Date().toISOString(),
    };
    onCreatePost(newPost);
    setAuthor('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          required
        />
      </div>
      <button
        type="submit"
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
      >
        Post
      </button>
    </form>
  );
};

export default PostCreationForm;
