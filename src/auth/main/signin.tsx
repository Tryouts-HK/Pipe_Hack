import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import avatar from '../../../assets/navprofile.png'
import { baseUrl } from '../../config';
import { useUser } from '../../user';

export const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const { setUser } = useUser()
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const handleSignIn = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      setIsLoading(true)
      const url = `${baseUrl}/auth/login`;
      const response = await axios.post(url, { email: email, password: password, role: role }, { withCredentials: true });
      console.log(response)
      alert(`Sign In Successful for ${response.data.data.email}`);
      setUser({ name: response.data.data.email, image: avatar })
      setRole('')
      navigate('/dashboard')
      // Handle signup logic here
      console.log('Signing in with:', { email, password });
      setError('');
    } catch (error) {
      setError('Sign in failed. Please check your credentials and try again.');
      console.error('Error signing in:', error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-md rounded-lg">q
        <h1>Demo Email: asab@gmail.com</h1>
        <h1>Demo Password: 12345678</h1>
        <h2 className="text-2xl font-bold text-center">Sign In</h2>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-4 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            disabled={isLoading}
          >
             {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>
      </div>
    </div>
  );
};


