"use client";
import styled from 'styled-components';
import Image from 'next/image';
import { useState } from 'react';

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #121212;
`;

const RegisterBox = styled.div`
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

const SignUpButton = styled.button`
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

const LoginLink = styled.a`
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

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [status, setStatus] = useState<{ message: string; type: string } | null>(null);

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      setStatus({ message: "Passwords do not match", type: "error" });
      return;
    }
    // Implement your registration logic here
    setStatus({ message: "Registration successful!", type: "success" });
  };

  return (
    <RegisterContainer>
      <RegisterBox>
        <Title>Sign up</Title>
        <Input 
          type="email" 
          placeholder="Enter email address" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input 
          type="password" 
          placeholder="Create password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        <Input 
          type="password" 
          placeholder="Confirm password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <SignUpButton onClick={handleSignUp}>Sign up</SignUpButton>
        {status && <StatusMessage type={status.type}>{status.message}</StatusMessage>}
        <Divider>OR</Divider>
        <SocialLoginButton>
          <Image src="/google-icon.svg" alt="Google Icon" width={20} height={20} />
          Sign up with Google
        </SocialLoginButton>
        <SocialLoginButton>
          <Image src="/google-icon.svg" alt="Github Icon" width={20} height={20} />
          Sign up with Github
        </SocialLoginButton>
        <LoginLink href="/login">Already have an account? Sign in</LoginLink>
      </RegisterBox>
    </RegisterContainer>
  );
};

export default RegisterPage;
