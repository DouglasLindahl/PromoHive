'use client'
import Input from '@/components/input/input'
import { useState } from 'react'
import styled from 'styled-components'
import supabase from '../../../supabase'
import { useRouter } from 'next/navigation'

const StyledLoginPage = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledLoginForm = styled.div`
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

export const StyledButton = styled.button`
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  padding: 4px 32px;
  border-radius: 4px;
  font-size: 16px;
  background-color: gainsboro;
  color: inherit;
`

const Login = () => {
  const router = useRouter()
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const attemtLogin = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: username,
      password: password,
    })
    if (data.user != null) {
      router.push('/adminPage')
    }
  }

  return (
    <StyledLoginPage>
      <StyledLoginForm>
        <Input
          label="Username"
          placeholder="Username"
          setValue={setUsername}
          type="text"
          value={username}
        />
        <Input
          label="Password"
          placeholder="********"
          setValue={setPassword}
          type="password"
          value={password}
        />
        <StyledButton onClick={attemtLogin}>Login</StyledButton>
      </StyledLoginForm>
    </StyledLoginPage>
  )
}
export default Login
