import type { AppProps } from 'next/app'
import {ChakraProvider} from "@chakra-ui/react"
import { AppProvider } from '@/context/AppProvider'
import { useState } from 'react'

const App = ({ Component, pageProps }: AppProps) => {

  const [nickname, setNickName] = useState("")
  const [addNickName, setAddNickName] = useState("")
  
  return (
    <ChakraProvider>
      <AppProvider value={{name: "sample", nickname: nickname, setNickName: setNickName, addNickName: addNickName, setAddNickName}}>
        <Component {...pageProps} />
      </AppProvider>
    </ChakraProvider>
  )
}


export default App