
const TezosTestData = {

    TokenCreator: {
        TokenName: "My token name",
        TokenDescription: "My Token Descriptions",
        TC02TokenDescription: "",
        SupplyToken: "10000000",
        Decimals: "13",
        Symbol: "#",
        Icon: "Picture.PNG",
        WalletAddress: "tz1LCFwczMiEuNHcMvpqgNzzEs8f4FNBgyNK",
        Amount: "10000000",
    },

    DAOCreate: {
        DAOName: "Carbon black.",
        TokenAddress: "KT1Dmxer8pvx8vTUX5V2k44th4DqnKsjhUya",
        TokenID: "0",
        GuardianAddress: "tz1LCFwczMiEuNHcMvpqgNzzEs8f4FNBgyNK",
        Description: "A DAO focused on funding and promoting open-source projects related to sustainability and renewable energy.",
        TC04DAODescription: "",
        VotingDays: '00',
        VotingHours: '00',
        VotingMinutes: "10",
        ExecutionDays: "00",
        ExecutionHours: "00",
        ExecutionMinutes: "15",
        ThresholdExpiryDays: "01",
        ThresholdExpiryHours: "00",
        ThresholdExpiryMinutes: "00",
        QuorumThreshold: '2',
        QuorumChange: '2',
        MinQuorumAmount: '1',
        QuorumMaxChange: '19',
        MaxQuorumAmount: '90',
        RequiredStake: "0.1",
        MinAmount: "1",
        MaxAmount: "200000",
    },

    ChangeConfiguration: {
        ProposalFee: "12",
        ReturnedTokenPercentage: "64"
    },

    ChangeGuardian: {
        WalletAddress: "tz1XqJz9dj4eL5c1fboFFAnevueRNFEtrBRf",
    },

    ChangeDelegate: {
        NewDelegateAddress: "tz1LcL32qu4k7aBikZs9e7LojLPbPygz5HHR",
    },

    TransferToken: {
        RecipientAddress: "tz1TSz4j3ANETG1pERGv3kddJrCymRJUV5VD", 
        Asset: "$",
        Amount: "11",
        AgoraPostID: "0",
    },

    TransferNFT: {

    },

    EditRegistry: {
        Key: "Home DOC",
        Value: "ALL Documents",

    },

    AddLambda: {
        MichelsonCode: "  CDR;   Extract the lambda and an integer from the parameter",

    },

    RemoveLambda: {
        SearchText: "transfer_proposal",
    },

    ExecuteLambda: {
        SearchText: "transfer_proposal",
        LambdaArgumentsCode: "Write Michelson Code For the Input",
        LambdaParams: "Enter the values for the given params in a JSON/JavaScript Object format.",

    },

    VoteOnProposal: {
        Amount: "300000",

    },

   


    OffChainPoll: {
        ProposalTitle: 'governance',
        ShortDescription: "This proposal aims to conduct an off-chain poll to gather community input on potential upgrades to the Tezos governance process.",
        ExternalLink: "https://tezos-gov-upgrades.com",
        Choice1: "Democracy",
        Choice2: "Exploration",
        DD: "00",
        HH: "00",
        MM: "20",
    },

    TokenStaking: {
        Amount: "20"
    },

    TokenWithdrawal: {
        Amount: "50",
    },

}
export { TezosTestData };