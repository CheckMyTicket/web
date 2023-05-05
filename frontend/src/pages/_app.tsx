import '../styles/globals.css'
import '@rainbow-me/rainbowkit/styles.css'

import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import { configureChains, createClient, useAccount, WagmiConfig } from 'wagmi'
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  goerli,
  polygonMumbai,
  optimismGoerli,
  arbitrumGoerli,
  polygonZkEvm,
  polygonZkEvmTestnet
} from 'wagmi/chains'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import Layout from '@/components/Layout'

import { useRouter } from 'next/router'
import ScreenSizeProvider from '@/context/screenSize/screenSizeProvider'

const apiKey = process.env.NEXT_PUBLIC_ALCHEMY_API_KEY || ''

const { chains, provider } = configureChains(
  [
    mainnet,
    goerli,
    polygon,
    polygonMumbai,
    optimism,
    optimismGoerli,
    arbitrum,
    arbitrumGoerli,
    polygonZkEvm,
    polygonZkEvmTestnet
  ],
  [alchemyProvider({ apiKey }), publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: 'My Alchemy DApp',
  chains
})

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

export { WagmiConfig, RainbowKitProvider }

function MyApp({ Component, pageProps }: any) {
  const router = useRouter()
  useAccount({
    onConnect({ isReconnected }) {
      if (!isReconnected) router.reload()
    }
  })

  const defaultChain = Number(process.env.NEXT_PUBLIC_DEFAULT_CHAIN) || 0
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider
        modalSize='compact'
        initialChain={defaultChain}
        chains={chains}
      >
        <ScreenSizeProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ScreenSizeProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}

export default MyApp
