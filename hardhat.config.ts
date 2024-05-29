// Get the environment configuration from .env file
//
// To make use of automatic environment setup:
// - Duplicate .env.example file and name it .env
// - Fill in the environment variables
import 'dotenv/config'

import 'hardhat-deploy'
import 'hardhat-contract-sizer'
import '@nomiclabs/hardhat-ethers'
import '@layerzerolabs/toolbox-hardhat'
import { HardhatUserConfig, HttpNetworkAccountsUserConfig } from 'hardhat/types'

import { EndpointId } from '@layerzerolabs/lz-definitions'

// Set your preferred authentication method
//
// If you prefer using a mnemonic, set a MNEMONIC environment variable
// to a valid mnemonic
const MNEMONIC = process.env.MNEMONIC

// If you prefer to be authenticated using a private key, set a PRIVATE_KEY environment variable
const PRIVATE_KEY = process.env.PRIVATE_KEY

const accounts: HttpNetworkAccountsUserConfig | undefined = MNEMONIC
    ? { mnemonic: MNEMONIC }
    : PRIVATE_KEY
      ? [PRIVATE_KEY]
      : undefined

if (accounts == null) {
    console.warn(
        'Could not find MNEMONIC or PRIVATE_KEY environment variables. It will not be possible to execute transactions in your example.'
    )
}

const config: HardhatUserConfig = {
    solidity: {
        compilers: [
            {
                version: '0.8.22',
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 200,
                    },
                },
            },
        ],
    },
    networks: {
        ethereum: {
            eid: EndpointId.ETHEREUM_V2_MAINNET,
            url:
                process.env.RPC_URL_ETHEREUM || 'https://eth-mainnet.g.alchemy.com/v2/Afv3a2XqqTUBXG295UjvDva-CrPntDHB',
            accounts,
        },
        arbitrum: {
            eid: EndpointId.ARBITRUM_V2_MAINNET,
            url:
                process.env.RPC_URL_ARBITRUM ||
                'https://bold-alien-needle.arbitrum-mainnet.quiknode.pro/49bc5f3a1c8cdb3fd476cb8eac6d061687b36d8b/',
            accounts,
        },
        optimism: {
            eid: EndpointId.OPTIMISM_V2_MAINNET,
            url:
                process.env.RPC_URL_OPTIMISM || 'https://opt-mainnet.g.alchemy.com/v2/BdE-iUrA82X7TOCivxJn3jnpNnVcJhXY',
            accounts,
        },
        base: {
            eid: EndpointId.BASE_V2_MAINNET,
            url: process.env.RPC_URL_BASE || 'https://base-mainnet.g.alchemy.com/v2/xFZGQE76v8lgEhEWFpzsOb6y_b_hmpTJ',
            accounts,
        },
        avalanche: {
            eid: EndpointId.AVALANCHE_V2_MAINNET,
            url:
                process.env.RPC_URL_AVALANCHE ||
                'https://layerzero.avax.network/ext/bc/C/rpc?token=dde55dbe017990fe15ee4c57117b45c6df90d7e6f81c3df205432cee98f6e3cf',
            accounts,
        },
        bsc: {
            eid: EndpointId.BSC_V2_MAINNET,
            url:
                process.env.RPC_URL_BSC ||
                'https://still-restless-pond.bsc.quiknode.pro/aabcf0825fb43e00fcf902ced32b731dffda3f8a/',
            accounts,
        },
        polygon: {
            eid: EndpointId.POLYGON_V2_MAINNET,
            url:
                process.env.RPC_URL_POLYGON ||
                'https://polygon-mainnet.g.alchemy.com/v2/5EdvdJJNN3WI0Di6kKyreh97W0Gf4cB5',
            accounts,
        },
    },
    namedAccounts: {
        deployer: {
            default: 0, // wallet address of index[0], of the mnemonic in .env
        },
    },
}

export default config
