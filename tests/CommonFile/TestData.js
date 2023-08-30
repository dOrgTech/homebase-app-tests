const TezosTestData = {

    TokenCreator: {
        TokenName: "My token name",
        TokenDescription: "My Token Descriptions",
        TC02TokenDescription: "",
        SupplyToken: "100",
        Decimals: "18",
        Symbol: "#",
        Icon: "Picture.PNG",
        WalletAddress: "tz1LCFwczMiEuNHcMvpqgNzzEs8f4FNBgyNK",
        Amount: "100",
    },

    DAOCreate: {
        DAOName: "Carbon black",
        TokenAddress: "KT1Dmxer8pvx8vTUX5V2k44th4DqnKsjhUya",
        TokenID: "0",
        GuardianAddress: "tz1LCFwczMiEuNHcMvpqgNzzEs8f4FNBgyNK",
        Description: "A DAO focused on funding and promoting open-source projects related to sustainability and renewable energy.",
        TC04DAODescription: "",
        VotingDays: '00',
        VotingHours: '00',
        VotingMinutes: "03",
        ExecutionDays: "00",
        ExecutionHours: "00",
        ExecutionMinutes: "01",
        ThresholdExpiryDays: "01",
        ThresholdExpiryHours: "00",
        ThresholdExpiryMinutes: "00",
        QuorumThreshold: '2',
        QuorumChange: '2',
        MinQuorumAmount: '1',
        QuorumMaxChange: '19',
        MaxQuorumAmount: '90',
        RequiredStake: "10",
        MinAmount: "10",
        MaxAmount: "20",
    },

    ChangeConfiguration: {

        ProposalFee: "1",
        ReturnedTokenPercentage: "1",

    },

    ChangeGuardian: {
        WalletAddress: "tz1RXo8kLmLZDfnuAyGD2vCAZWGcCsziR4HX",

    },

    ChangeDelegate: {
        NewDelegateAddress: "tz1RXo8kLmLZDfnuAyGD2vCAZWGcCsziR4HX",
    },

    TransferToken: {
        RecipientAddress: "tz1RXo8kLmLZDfnuAyGD2vCAZWGcCsziR4HX",
        Asset: "$",
        Amount: "10",
        AgoraPostID: "10",
    },

    TransferNFT: {

    },

    EditRegistry: {
        Key: "Hello",
        Value: "Hi",

    },

    AddLambda: {
        MichelsonCode: "update_guardian_proposal",

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
        Amount: "30000",

    },

    ProposalExecutionAndDrop: {
        Execute: "//span[text()='Execute']",
        DropExpired: "//span[text()='Drop Expired']",
    },


    OffChainPoll: {
        ProposalTitle: 'governance',
        ShortDescription: "This proposal aims to conduct an off-chain poll to gather community input on potential upgrades to the Tezos governance process.",
        ExternalLink: "https://tezos-gov-upgrades.com",
        Choice1: "Democracy",
        Choice2: "Exploration",
        DD: "01",
        HH: "05",
        MM: "00",
    },

    TokenStaking: {
        Amount: "20"
    },

    TokenWithdrawal: {
        Amount: "23",
    },



}
export { TezosTestData };