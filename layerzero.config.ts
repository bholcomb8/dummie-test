import { EndpointId } from '@layerzerolabs/lz-definitions'

import type { OAppOmniGraphHardhat, OmniPointHardhat } from '@layerzerolabs/toolbox-hardhat'

const ethContract: OmniPointHardhat = {
    eid: EndpointId.ETHEREUM_V2_MAINNET,
    contractName: 'DummieOFT',
}

const arbContract: OmniPointHardhat = {
    eid: EndpointId.ARBITRUM_V2_MAINNET,
    contractName: 'DummieOFT',
}

const config: OAppOmniGraphHardhat = {
    contracts: [
        {
            contract: ethContract,
        },
        {
            contract: arbContract,
        },
    ],
    connections: [
        {
            from: ethContract,
            to: arbContract,
        },
        {
            from: arbContract,
            to: ethContract,
        },
    ],
}

export default config
