"use client";
import styled from 'styled-components';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { login } from '@/src/lib/login';
import LoadingSpinner from '@/src/components/loader';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #121212;
`;

const LoginBox = styled.div`
  background-color: #1C1C1E;
  padding: 40px;
  border-radius: 12px;
  width: 400px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.3);
`;

const Title = styled.h1`
  color: #ffffff;
  text-align: center;
  margin-bottom: 30px;
  font-size: 28px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border-radius: 6px;
  border: none;
  outline: none;
  background-color: #2C2C2E;
  color: #ffffff;
  font-size: 16px;

  &::placeholder {
    color: #a0a0a0;
  }
`;

const SignInButton = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: none;
  outline: none;
  background-color: #FF6B00;
  color: #ffffff;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: #e65c00;
  }
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  margin: 20px 0;
  
  &::before, &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #3A3A3C;
    margin: 0 10px;
  }
`;

const SocialLoginButton = styled.button`
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  border: none;
  outline: none;
  background-color: #2C2C2E;
  color: #ffffff;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #3A3A3C;
  }

  & > img {
    margin-right: 10px;
  }
`;

const SignUpLink = styled.a`
  display: block;
  text-align: center;
  color: #FF6B00;
  margin-top: 20px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const StatusMessage = styled.p<{ type: string }>`
  text-align: center;
  color: ${({ type }) => (type === 'success' ? 'green' : 'red')};
  margin-top: 10px;
`;

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<{ message: string; type: string } | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a network request or some asynchronous operation
    const timer = setTimeout(() => setLoading(false), 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }
  const handleLogin = async () => {
    const result = await login(email, password);
    setStatus(result);
  };

  return (
    <LoginContainer>
      <LoginBox>
        <Title>Login in</Title>
        <Input 
          type="email" 
          placeholder="Enter your email address" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
          type="password" 
          placeholder="Enter your password"  
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <SignInButton onClick={handleLogin}>Login in</SignInButton>
        {status && <StatusMessage type={status.type}>{status.message}</StatusMessage>}
        <Divider>OR</Divider>
        <SocialLoginButton>
          <Image src="/google-icon.svg" alt="Google Icon" width={20} height={20} />
          Sign in with Google
        </SocialLoginButton>
        <SocialLoginButton>
          <Image src="/google-icon.svg" alt="Github Icon" width={20} height={20} />
          Sign in with Github
        </SocialLoginButton>
        <SignUpLink href="/register">Don’t have an account? Sign up</SignUpLink>
      </LoginBox>
    </LoginContainer>
  );
};

export default LoginPage;
