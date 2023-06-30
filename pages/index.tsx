import { Box, Center, Spacer, Stack } from "@chakra-ui/react"
import type { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.css"
import NavBar from "../components/NavBar"
import Disconnected from '../components/Disconnected'
import { useWallet } from "@solana/wallet-adapter-react"
import Connected from "../components/Connected"

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Buildoors</title>
        <meta name="The NFT Collection for Buildoors" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box
        w="100vw" /* Set the width of the Box to 100% of the viewport width */
        h="calc(100vh - 64px)" /* Subtract the height of the NavBar from the viewport height */
        bgImage={"url(/home-background.svg)"}
        backgroundPosition="center"
      >
        <Stack h="100%" justify="center" spacing={4}>
          {/* NavBar */}
          <NavBar />

          <Spacer />

          <Center>{Connected ? <Connected /> : <Disconnected />}</Center>

          <Center>
            {/* If connected, the second view, otherwise the first */}
          </Center>

          <Spacer />

          <Center>
            <Box marginBottom={4} color="white">
              <a
                href="https://github.com/thadimudupulasahith"
                target="_blank"
                rel="noopener noreferrer"
              >
                built with @_buildspace
              </a>
            </Box>
          </Center>
        </Stack>
      </Box>
    </div>
  )
}

export default Home
