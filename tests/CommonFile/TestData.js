const TezosTestData = {

    TokenCreation: {
        TokenName: "My token name",
        TokenDescription: "My Token Descriptions",
        TC01_02TokenDescription: "",
        SupplyToken: "100",
        Decimals: "18",
        Symbol: "#",
        Icon: "Picture.PNG",
        WalletAddress: "tz1LCFwczMiEuNHcMvpqgNzzEs8f4FNBgyNK",
        Amount: "100",
        TC01_03Amount: "10",

    },

    DAOCreation: {
        DAOName: "My Test DAO",
        TokenAddress: "KT1ND3pDj67PqfjvzqPUAvSRqmcqcHnqpiEQ",
        TokenAddress2:"KT1BERTLG7JzpzWcT5UMVZFe4gC2cv9BhKMM",
        TokenID: "0",
        GuardianAddress: "tz1LCFwczMiEuNHcMvpqgNzzEs8f4FNBgyNK",
        Description: "A DAO focused on funding and promoting open-source projects related to sustainability and renewable energy.",
        TC02_02DAODescription: "",
        VotingDays: '00',
        VotingHours: '01',
        VotingMinutes: "00",
        ExecutionDays: "00",
        ExecutionHours: "00",
        ExecutionMinutes: "01",
        ThresholdExpiryDays: "01",
        ThresholdExpiryHours: "01",
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

    OffChainPoll: {
        ProposalTitle: "Testing proposal",
        Description: "This proposal aims to conduct an off-chain poll.",
        ExternalLink: "https://example.com",
        Choice1: "option1",
        Choice2: "option2",
        DD: "01",
        HH: "02",
        MM: "05",
    },

    DAOConfiguration: {

        ProposalFee: "1",
        ReturnedTokenPercentage: "2",

    },

    ChangeGuardian: {
        WalletAddress: "tz1LCFwczMiEuNHcMvpqgNzzEs8f4FNBgyNK",

    },

    ChangeDelegate: {
        NewDelegateAddress: "tz1LCFwczMiEuNHcMvpqgNzzEs8f4FNBgyNK",
    },

    TransferToken: {
        RecipientAddress: "tz1LCFwczMiEuNHcMvpqgNzzEs8f4FNBgyNK",
        Asset: "TST",
        Amount: "05",
        AgoraPostID: "5",
    },


    EditRegistry: {
        Key: "This is Registry",
        Value: "Helloo",

    },

    VotingOnChain: {
        Amount: '25584',
    },

    TokenDeposit: {
        Amount: "2",
        Balance: "2"
    },

    TokenWithdrawal: {
        Amount: "5",
    }

}
export { TezosTestData };