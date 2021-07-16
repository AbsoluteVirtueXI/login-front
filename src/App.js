import { Button, Input } from '@chakra-ui/react'
import { useState } from 'react'
import axios from 'axios'

function App() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async () => {
    const res = await axios.post('http://192.168.0.10:3333', {
      username: username,
      hash: password,
    })
    console.log(res)
  }

  return (
    <>
      <Input
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin}>Login</Button>
    </>
  )
}

export default App
