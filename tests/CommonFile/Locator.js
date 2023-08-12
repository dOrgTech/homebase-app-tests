const pageLocators = {

  TokenCreation: {
    MainNet:'Mainnet',
    GhostNet:"Ghostnet",
    EnterApp: ".MuiButtonBase-root.MuiButton-root.MuiButton-contained.jss11.jss12.MuiButton-containedSecondary",
    frame: "div.MuiGrid-root.MuiGrid-container.MuiGrid-align-items-xs-center.MuiGrid-justify-content-xs-center",
    // ConnectWallet: "//span[text()='Connect Wallet']",
    CreateDAO: "Create DAO",
    GovernanceToken: "No, I need one",
    TokenName: "input[placeholder='Contract Name']",
    TokenDescription: "textarea[placeholder='Type a description']",
    TotalSupply: "input[name='totalSupply']",
    Decimals: "input[name='decimals']",
    Symbol: "input[name='symbol']",
    Icon: "input[name='icon']",
    ContinueButton: "Continue",
    WalletAddress: "input[placeholder='Wallet address']",
    Amount: "input[name='holders.[0].amount']",
    launch: "Launch",
    DeployText: "Governance token successfully deployed",
    ConsoleAddress: "p[class='MuiTypography-root-165 MuiTypography-body1-167 MuiTypography-colorTextSecondary-191']",
    ErrorText: "Required",
    ErrorText2: "Total Supply not fully allocated",
  },

  DAOCreation: {
    CreateDAO: "Create DAO",
    GovernanceToken: "Yes, I have one",
    FullDAO: "Full DAO",
    ContinueButton: "Continue",
    DAOName: "input[placeholder='DAO Name']",
    TokenAddress: "input[name='governanceToken.address']",
    TokenID: "input[name='governanceToken.tokenId']",
    GuardianAddress: "input[name='guardian']",
    Description: "textarea[placeholder='Type a description']",
    VotingDays: "input[name='votingBlocksDay']",
    VotingHours: "input[name='votingBlocksHours']",
    VotingMinutes: "input[name='votingBlocksMinutes']",
    ExecutionDays: "input[name='proposalFlushBlocksDay']",
    ExecutionHours: "input[name='proposalFlushBlocksHours']",
    ExecutionMinutes: "input[name='proposalFlushBlocksMinutes']",
    ThresholdExpiryDays: "input[name='proposalExpiryBlocksDay']",
    ThresholdExpiryHours: "input[name='proposalExpiryBlocksHours']",
    ThresholdExpiryMinutes: "input[name='proposalExpiryBlocksMinutes']",
    RequireStake: "input[name='proposeStakeRequired']",
    Slider:"span[role='slider']",
    MinAmount: "input[name='minXtzAmount']",
    MaxAmount: "input[name='maxXtzAmount']",
    QuorumThreshold:"input[name='quorumThreshold']",
    QuorumChange:"input[name='quorumChange']",
    MinQuorumAmount:"input[name='minQuorumAmount']",
    QuorumMaxChange:"input[name='quorumMaxChange']",
    MaxQuorumAmount:"input[name='maxQuorumAmount']",
    SelfDeployed: " Self-Deployed",
    DeployDAO: "Deploy DAO",
    // Managed: "//p[text()='Managed']",
    DAOText: "Go to my DAO",
    ErrorText: "Required",
  },

  DAOConfiguration: {
    DAOConfiguration: "//p[text()='DAO Configuration']",
    ProposalFee: "input[placeholder='Proposal fee']",
    ReturnedTokenPercentage: "input[placeholder='Returned tokens percentage']",
    SubmitButton: "//span[text()='Submit']",

  },

  ChangeGuardian: {
    ChangeGuardian: "//p[text()='Change Guardian']",
    WalletAddress: "input[placeholder=' tz1...']",
    SubmitButton: '//span[text()="Submit"]',
  },

  ChangeDelegate: {
    ChangeDelegate: "//p[text()='Change Delegate']",
    NewDelegateAddress: "input[placeholder=' tz1...']",
    SubmitButton: "//span[text()='Submit']",
    PopUp: "",

  },

  TransferToken: {
    Treasury: "//p[text()='Treasury']",
    NewTransfer: "//span[text()='New Transfer']",
    Recipient: "input[placeholder='Type an Address Here']",
    Asset: "//input[@class='MuiInputBase-input MuiInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused MuiInputBase-inputAdornedEnd']",
    Amount: "input[placeholder='0']",
    AgoraPostID: "input[placeholder='Type an Agora Post ID']",
    SubmitButton: "//span[normalize-space()='Submit']",
    TransactionText: "Registry proposal transaction confirmed",
  },

  TransferNFT: {
    NFTs: "//span[text()='NFTs']",
  },

  EditRegistry: {
    Registry: "//p[text()='Registry']",
    NewItem: "//span[text()='New Item']",
    BatchTransfer: "//input[@type='checkbox']",
    Key: "//input[@placeholder='Type a Key']",
    Value: "//textarea[@placeholder='Type a value']",
    Submit: "//span[text()='Submit']",

  },

  AddLambda: {
    AddLambda: "//p[text()='Add Lambda']",
    TestBox: ".npm__react-simple-code-editor__textarea",
    SubmitButton: "//span[text()='Submit']",

  },

  RemoveLambda: {
    RemoveLambda: "//p[text()='Remove Lambda']",
    SearchBox: "#combo-box-demo",
    SubmitButton: "//span[text()='Submit']",

  },

  ExecuteLambda: {
    ExecuteLambda: "//p[text()='Execute Lambda']",
    SearchBox: "#combo-box-demo",
    LambdaArgumentsCode: 'Write Michelson Code for the input Paramerers of your Lambda\n\nEg:-\n\n{\n  "prim": "pair",\n  "annots": [\n    "%xtz_transfer_type"\n  ],\n  "args": [\n    {\n      "prim": "mutez",\n      "annots": [\n        "%amount"\n      ]\n    },\n    {\n      "prim": "address",\n      "annots": [\n        "%recipient"\n      ]\n    }\n  ]\n},\n',
    LambdaParams: 'Enter the values for the given params in a JSON/JavaScript Object format.\n\nEg:-\n\n{\n  xtz_transfer_type: {\n    amount: 10000000000000000000,\n    recipient: "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb"\n  }\n}\n  ',
    SubmitButton: "//span[text()='Submit']",
  },

  VoteOnProposal: {
    VotingCycle: "//p[text()='Creating']",
    OnChainButton: "//button[@class='MuiButtonBase-root MuiButton-root MuiButton-text jss417']",
    Active: "//p[text()='Active']",
    Pending: "//p[text()='Pending']",
    VoteFor: "//span[text()='Vote For']",
    VoteAgainst: "//span[text()='Vote Against']",
    UseMax: "//p[text()='Use Max']",
    Submit: "//span[text()='Submit']",
    View: "//span[text()='View']",
    Support: ".MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-wrap-xs-nowrap.MuiGrid-align-items-xs-baseline.MuiGrid-grid-md-12",
    Oppose: ".MuiGrid-root.MuiGrid-container.MuiGrid-wrap-xs-nowrap.MuiGrid-align-items-xs-center.MuiGrid-grid-md-12",

  },

  ProposalExecutionAndDrop: {
    PassedExecutable: "//p[text()='Passed - Executable']",
    Passed: "//p[text()='Passed']",
    NoQuorum: "//p[text()='No Quorum']",
    Expired: "//p[text()='Expired']",
    DropProposal: "//span[text()='Drop Proposal']",
    PercentageText: "//p[@class='MuiTypography-root jss1339 jss1340 MuiTypography-body1']",
    DropExpired: "//span[text()='Drop Expired']",
    Execute: "//span[text()='Execute']",
  },

  OffChainPoll: {
    ExampleDAO: "//p[text()='Example DAO']",
    Proposal: "//p[text()='Proposals']",
    cycle: "//p[text()='Creating']",
    NewProposal: "//span[text()='New Proposal']",
    OffChainPoll: "//p[text()='Off Chain Poll']",
    ProposalTitle: "input[placeholder='Proposal Title*']",
    ShortDescription: "textarea[placeholder='Short description']",
    ExternalLink: "input[placeholder='External Link']",
    multipleChoice: "input[value='1']",
    Choice1: "input[placeholder='Choice 1']",
    AddChoice: ".MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall",
    Choice2: "input[placeholder='Choice 2']",
    Choice3: "input[placeholder='Choice 3']",
    DD: "input[placeholder='DD']",
    HH: "input[placeholder='HH']",
    MM: "input[placeholder='MM']",
    CreateProposalButton: "button[class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedSecondary']",
    CreateText: "//div[text()='Proposal created!']",
  },

  VoteOnOffChainPoll: {
    ProposalName: "//h4[text()='Community Governance Upgrades Poll']",
    Option1: "//p[text()='Introduce Liquid Democracy']",
    Option2: "//p[text()='Increase Proposal Exploration Period']",
    CastYourVote: "//span[text()='Cast your vote']",
    VoteDone: "Your vote has been submitted",
  },

  CorrectVoteCount: {
    VoteCount: "div[class='MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-6'] p[class='MuiTypography-root MuiTypography-body1 MuiTypography-colorSecondary']",
    Option1: "div[class='MuiGrid-root jss342 jss373 jss372 MuiGrid-container MuiGrid-direction-xs-column'] div[class='MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-justify-content-xs-flex-end MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-lg-6'] p[class='MuiTypography-root MuiTypography-body2 MuiTypography-colorTextPrimary']",
    Option2: "div[class='MuiGrid-root jss342 jss374 jss372 MuiGrid-container MuiGrid-direction-xs-column'] div[class='MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-justify-content-xs-flex-end MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-lg-6'] p[class='MuiTypography-root MuiTypography-body2 MuiTypography-colorTextPrimary']",

  },

  TokenStaking: {
    User: "//p[text()='User']",
    Deposit: "//span[text()='Deposit']",
    PassAmount: "//input[@placeholder='0']",
    UseMax: "//p[text()='Use Max']",
    Submit: "//span[text()='Submit']",
    TransactionText: "Deposit transaction confirmed",
  },

  UnStakingToken: {
    UnStakeVotes: "//span[text()='Unstake Votes']",
    TransactionText: "Execute transaction confirmed",
  },

  TokenWithdrawal: {
    Withdraw: "//span[text()='Withdraw']",
    Amount: "//input[@placeholder='0']",
    UseMax: "//p[text()='Use Max']",
    Submit: "//span[text()='Submit']",
    TransactionText: "Withdrawal transaction confirmed",
  }

};

export { pageLocators };
