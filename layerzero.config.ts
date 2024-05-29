import { EndpointId } from '@layerzerolabs/lz-definitions'

import contractsConfig from './contracts.json'

import type { OAppOmniGraphHardhat, OmniPointHardhat } from '@layerzerolabs/toolbox-hardhat'

const ethContract: OmniPointHardhat = {
    eid: EndpointId.ETHEREUM_V2_MAINNET,
    contractName: 'DummieOFT',
}

const arbContract: OmniPointHardhat = {
    eid: EndpointId.ARBITRUM_V2_MAINNET,
    contractName: 'DummieOFT',
}

const optContract: OmniPointHardhat = {
    eid: EndpointId.OPTIMISM_V2_MAINNET,
    contractName: 'DummieOFT',
}

const baseContract: OmniPointHardhat = {
    eid: EndpointId.BASE_V2_MAINNET,
    contractName: 'DummieOFT',
}

const avaContract: OmniPointHardhat = {
    eid: EndpointId.AVALANCHE_V2_MAINNET,
    contractName: 'DummieOFT',
}

const bnbContract: OmniPointHardhat = {
    eid: EndpointId.BSC_V2_MAINNET,
    contractName: 'DummieOFT',
}

const polyContract: OmniPointHardhat = {
    eid: EndpointId.POLYGON_V2_MAINNET,
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
        {
            contract: optContract,
        },
        {
            contract: baseContract,
        },
        {
            contract: avaContract,
        },
        {
            contract: bnbContract,
        },
        {
            contract: polyContract,
        },
    ],
    connections: [
        {
            from: ethContract,
            to: arbContract,
            config: {
                sendLibrary: contractsConfig.ethereum.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.ethereum.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.ethereum.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(15),
                        requiredDVNs: [contractsConfig.ethereum.lzDVN, contractsConfig.ethereum.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.ethereum.lzDVN, contractsConfig.ethereum.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: arbContract,
            to: ethContract,
            config: {
                sendLibrary: contractsConfig.arbitrum.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.arbitrum.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.arbitrum.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.arbitrum.lzDVN, contractsConfig.arbitrum.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(15),
                        requiredDVNs: [contractsConfig.arbitrum.lzDVN, contractsConfig.arbitrum.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: ethContract,
            to: optContract,
            config: {
                sendLibrary: contractsConfig.ethereum.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.ethereum.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.ethereum.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(15),
                        requiredDVNs: [contractsConfig.ethereum.lzDVN, contractsConfig.ethereum.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.ethereum.lzDVN, contractsConfig.ethereum.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: optContract,
            to: ethContract,
            config: {
                sendLibrary: contractsConfig.optimism.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.optimism.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.optimism.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.optimism.lzDVN, contractsConfig.optimism.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(15),
                        requiredDVNs: [contractsConfig.optimism.lzDVN, contractsConfig.optimism.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: ethContract,
            to: baseContract,
            config: {
                sendLibrary: contractsConfig.ethereum.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.ethereum.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.ethereum.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(15),
                        requiredDVNs: [contractsConfig.ethereum.lzDVN, contractsConfig.ethereum.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(10),
                        requiredDVNs: [contractsConfig.ethereum.lzDVN, contractsConfig.ethereum.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: baseContract,
            to: ethContract,
            config: {
                sendLibrary: contractsConfig.base.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.base.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.base.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(10),
                        requiredDVNs: [contractsConfig.base.lzDVN, contractsConfig.base.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(15),
                        requiredDVNs: [contractsConfig.base.lzDVN, contractsConfig.base.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: ethContract,
            to: avaContract,
            config: {
                sendLibrary: contractsConfig.ethereum.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.ethereum.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.ethereum.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(15),
                        requiredDVNs: [contractsConfig.ethereum.lzDVN, contractsConfig.ethereum.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(12),
                        requiredDVNs: [contractsConfig.ethereum.lzDVN, contractsConfig.ethereum.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: avaContract,
            to: ethContract,
            config: {
                sendLibrary: contractsConfig.avalanche.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.avalanche.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.avalanche.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(12),
                        requiredDVNs: [contractsConfig.avalanche.lzDVN, contractsConfig.avalanche.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(15),
                        requiredDVNs: [contractsConfig.avalanche.lzDVN, contractsConfig.avalanche.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: ethContract,
            to: bnbContract,
            config: {
                sendLibrary: contractsConfig.ethereum.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.ethereum.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.ethereum.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(15),
                        requiredDVNs: [contractsConfig.ethereum.lzDVN, contractsConfig.ethereum.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.ethereum.lzDVN, contractsConfig.ethereum.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: bnbContract,
            to: ethContract,
            config: {
                sendLibrary: contractsConfig.bsc.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.bsc.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.bsc.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.bsc.lzDVN, contractsConfig.bsc.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(15),
                        requiredDVNs: [contractsConfig.bsc.lzDVN, contractsConfig.bsc.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: ethContract,
            to: polyContract,
            config: {
                sendLibrary: contractsConfig.ethereum.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.ethereum.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.ethereum.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(15),
                        requiredDVNs: [contractsConfig.ethereum.lzDVN, contractsConfig.ethereum.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(512),
                        requiredDVNs: [contractsConfig.ethereum.lzDVN, contractsConfig.ethereum.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: polyContract,
            to: ethContract,
            config: {
                sendLibrary: contractsConfig.polygon.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.polygon.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.polygon.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(512),
                        requiredDVNs: [contractsConfig.polygon.lzDVN, contractsConfig.polygon.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(15),
                        requiredDVNs: [contractsConfig.polygon.lzDVN, contractsConfig.polygon.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: arbContract,
            to: optContract,
            config: {
                sendLibrary: contractsConfig.arbitrum.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.arbitrum.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.arbitrum.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.arbitrum.lzDVN, contractsConfig.arbitrum.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.arbitrum.lzDVN, contractsConfig.arbitrum.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: optContract,
            to: arbContract,
            config: {
                sendLibrary: contractsConfig.optimism.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.optimism.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.optimism.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.optimism.lzDVN, contractsConfig.optimism.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.optimism.lzDVN, contractsConfig.optimism.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: arbContract,
            to: baseContract,
            config: {
                sendLibrary: contractsConfig.arbitrum.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.arbitrum.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.arbitrum.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.arbitrum.lzDVN, contractsConfig.arbitrum.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(10),
                        requiredDVNs: [contractsConfig.arbitrum.lzDVN, contractsConfig.arbitrum.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: baseContract,
            to: arbContract,
            config: {
                sendLibrary: contractsConfig.base.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.base.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.base.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(10),
                        requiredDVNs: [contractsConfig.base.lzDVN, contractsConfig.base.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.base.lzDVN, contractsConfig.base.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: arbContract,
            to: avaContract,
            config: {
                sendLibrary: contractsConfig.arbitrum.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.arbitrum.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.arbitrum.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.arbitrum.lzDVN, contractsConfig.arbitrum.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(12),
                        requiredDVNs: [contractsConfig.arbitrum.lzDVN, contractsConfig.arbitrum.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: avaContract,
            to: arbContract,
            config: {
                sendLibrary: contractsConfig.avalanche.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.avalanche.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.avalanche.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(12),
                        requiredDVNs: [contractsConfig.avalanche.lzDVN, contractsConfig.avalanche.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.avalanche.lzDVN, contractsConfig.avalanche.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: arbContract,
            to: bnbContract,
            config: {
                sendLibrary: contractsConfig.arbitrum.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.arbitrum.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.arbitrum.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.arbitrum.lzDVN, contractsConfig.arbitrum.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.arbitrum.lzDVN, contractsConfig.arbitrum.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: bnbContract,
            to: arbContract,
            config: {
                sendLibrary: contractsConfig.bsc.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.bsc.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.bsc.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.bsc.lzDVN, contractsConfig.bsc.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.bsc.lzDVN, contractsConfig.bsc.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: arbContract,
            to: polyContract,
            config: {
                sendLibrary: contractsConfig.arbitrum.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.arbitrum.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.arbitrum.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.arbitrum.lzDVN, contractsConfig.arbitrum.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(512),
                        requiredDVNs: [contractsConfig.arbitrum.lzDVN, contractsConfig.arbitrum.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: polyContract,
            to: arbContract,
            config: {
                sendLibrary: contractsConfig.polygon.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.polygon.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.polygon.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(512),
                        requiredDVNs: [contractsConfig.polygon.lzDVN, contractsConfig.polygon.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.polygon.lzDVN, contractsConfig.polygon.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: optContract,
            to: baseContract,
            config: {
                sendLibrary: contractsConfig.optimism.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.optimism.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.optimism.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.optimism.lzDVN, contractsConfig.optimism.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(10),
                        requiredDVNs: [contractsConfig.optimism.lzDVN, contractsConfig.optimism.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: baseContract,
            to: optContract,
            config: {
                sendLibrary: contractsConfig.base.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.base.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.base.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(10),
                        requiredDVNs: [contractsConfig.base.lzDVN, contractsConfig.base.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.base.lzDVN, contractsConfig.base.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: optContract,
            to: avaContract,
            config: {
                sendLibrary: contractsConfig.optimism.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.optimism.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.optimism.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.optimism.lzDVN, contractsConfig.optimism.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(12),
                        requiredDVNs: [contractsConfig.optimism.lzDVN, contractsConfig.optimism.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: avaContract,
            to: optContract,
            config: {
                sendLibrary: contractsConfig.avalanche.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.avalanche.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.avalanche.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(12),
                        requiredDVNs: [contractsConfig.avalanche.lzDVN, contractsConfig.avalanche.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.avalanche.lzDVN, contractsConfig.avalanche.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: optContract,
            to: bnbContract,
            config: {
                sendLibrary: contractsConfig.optimism.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.optimism.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.optimism.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.optimism.lzDVN, contractsConfig.optimism.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.optimism.lzDVN, contractsConfig.optimism.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: bnbContract,
            to: optContract,
            config: {
                sendLibrary: contractsConfig.bsc.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.bsc.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.bsc.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.bsc.lzDVN, contractsConfig.bsc.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.bsc.lzDVN, contractsConfig.bsc.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: optContract,
            to: polyContract,
            config: {
                sendLibrary: contractsConfig.optimism.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.optimism.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.optimism.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.optimism.lzDVN, contractsConfig.optimism.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(512),
                        requiredDVNs: [contractsConfig.optimism.lzDVN, contractsConfig.optimism.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: polyContract,
            to: optContract,
            config: {
                sendLibrary: contractsConfig.polygon.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.polygon.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.polygon.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(512),
                        requiredDVNs: [contractsConfig.polygon.lzDVN, contractsConfig.polygon.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.polygon.lzDVN, contractsConfig.polygon.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: baseContract,
            to: avaContract,
            config: {
                sendLibrary: contractsConfig.base.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.base.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.base.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(10),
                        requiredDVNs: [contractsConfig.base.lzDVN, contractsConfig.base.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(12),
                        requiredDVNs: [contractsConfig.base.lzDVN, contractsConfig.base.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: avaContract,
            to: baseContract,
            config: {
                sendLibrary: contractsConfig.avalanche.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.avalanche.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.avalanche.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(12),
                        requiredDVNs: [contractsConfig.avalanche.lzDVN, contractsConfig.avalanche.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(10),
                        requiredDVNs: [contractsConfig.avalanche.lzDVN, contractsConfig.avalanche.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: baseContract,
            to: bnbContract,
            config: {
                sendLibrary: contractsConfig.base.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.base.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.base.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(10),
                        requiredDVNs: [contractsConfig.base.lzDVN, contractsConfig.base.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.base.lzDVN, contractsConfig.base.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: bnbContract,
            to: baseContract,
            config: {
                sendLibrary: contractsConfig.bsc.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.bsc.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.bsc.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.bsc.lzDVN, contractsConfig.bsc.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(10),
                        requiredDVNs: [contractsConfig.bsc.lzDVN, contractsConfig.bsc.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: baseContract,
            to: polyContract,
            config: {
                sendLibrary: contractsConfig.base.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.base.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.base.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(10),
                        requiredDVNs: [contractsConfig.base.lzDVN, contractsConfig.base.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(512),
                        requiredDVNs: [contractsConfig.base.lzDVN, contractsConfig.base.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: polyContract,
            to: baseContract,
            config: {
                sendLibrary: contractsConfig.polygon.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.polygon.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.polygon.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(512),
                        requiredDVNs: [contractsConfig.polygon.lzDVN, contractsConfig.polygon.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(10),
                        requiredDVNs: [contractsConfig.polygon.lzDVN, contractsConfig.polygon.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: avaContract,
            to: bnbContract,
            config: {
                sendLibrary: contractsConfig.avalanche.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.avalanche.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.avalanche.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(12),
                        requiredDVNs: [contractsConfig.avalanche.lzDVN, contractsConfig.avalanche.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.avalanche.lzDVN, contractsConfig.avalanche.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: bnbContract,
            to: avaContract,
            config: {
                sendLibrary: contractsConfig.bsc.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.bsc.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.bsc.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.bsc.lzDVN, contractsConfig.bsc.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(12),
                        requiredDVNs: [contractsConfig.bsc.lzDVN, contractsConfig.bsc.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: avaContract,
            to: polyContract,
            config: {
                sendLibrary: contractsConfig.avalanche.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.avalanche.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.avalanche.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(12),
                        requiredDVNs: [contractsConfig.avalanche.lzDVN, contractsConfig.avalanche.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(512),
                        requiredDVNs: [contractsConfig.avalanche.lzDVN, contractsConfig.avalanche.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: polyContract,
            to: avaContract,
            config: {
                sendLibrary: contractsConfig.polygon.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.polygon.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.polygon.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(512),
                        requiredDVNs: [contractsConfig.polygon.lzDVN, contractsConfig.polygon.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(12),
                        requiredDVNs: [contractsConfig.polygon.lzDVN, contractsConfig.polygon.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: bnbContract,
            to: polyContract,
            config: {
                sendLibrary: contractsConfig.bsc.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.bsc.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.bsc.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.bsc.lzDVN, contractsConfig.bsc.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(512),
                        requiredDVNs: [contractsConfig.bsc.lzDVN, contractsConfig.bsc.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
        {
            from: polyContract,
            to: bnbContract,
            config: {
                sendLibrary: contractsConfig.polygon.sendLib302,
                receiveLibraryConfig: {
                    receiveLibrary: contractsConfig.polygon.receiveLib302,
                    gracePeriod: BigInt(0),
                },
                sendConfig: {
                    executorConfig: {
                        maxMessageSize: 99,
                        executor: contractsConfig.polygon.executor,
                    },
                    ulnConfig: {
                        confirmations: BigInt(512),
                        requiredDVNs: [contractsConfig.polygon.lzDVN, contractsConfig.polygon.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
                receiveConfig: {
                    ulnConfig: {
                        confirmations: BigInt(20),
                        requiredDVNs: [contractsConfig.polygon.lzDVN, contractsConfig.polygon.googleDVN],
                        optionalDVNs: [],
                        optionalDVNThreshold: 0,
                    },
                },
            },
        },
    ],
}

export default config
