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

  ProposalCreation: {
    Search: "input[placeholder='Search']",
    ExampleDAO: "Example DAO",
    Proposal: "//p[text()='Proposals']",
    Cycle: "Creating",
    NewProposal: "New Proposal",

  },

  DAOConfiguration: {
    DAOConfiguration: "DAO Configuration",
    ProposalFee: "input[name='frozen_extra_value']",
    ReturnedTokenPercentage: "input[name='returnedPercentage']",
    SubmitButton: "Submit",

  },

  ChangeGuardian: {
    ChangeGuardian: "Change Guardian",
    WalletAddress: "input[placeholder=' tz1...']",
    SubmitButton: 'Submit',
    validateText: 'Guardian change proposal transaction confirmed'
  },

  ChangeDelegate: {
    ChangeDelegate: "Change Delegate",
    NewDelegateAddress: "input[placeholder=' tz1...']",
    SubmitButton: "Submit",
    PopUp: "",

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

  OffChainPoll: {
    NewProposal: "New Proposal",
    OffChainPoll: "Off Chain Poll",
    ProposalTitle: "input[placeholder='Proposal Title*']",
    Description: "textarea[placeholder='Short description']",
    ExternalLink: "input[placeholder='External Link']",
    multipleChoice: "input[value='1']",
    Choice1: "input[placeholder='Choice 1']",
    AddChoice: ".MuiButtonBase-root.MuiIconButton-root.MuiIconButton-sizeSmall",
    Choice2: "input[placeholder='Choice 2']",
    Choice3: "input[placeholder='Choice 3']",
    DD: "input[placeholder='DD']",
    HH: "input[placeholder='HH']",
    MM: "input[placeholder='MM']",
    CreateProposalButton: "Create Proposal",
    CreateText: "Proposal created!",
  },

  VoteOnOffChainPoll: {
    ProposalName: "Testing Proposal",
    Option1: "option1",
    Option2: "option2",
    CastYourVote: "Cast your vote",
    VoteVerify: "Your vote has been submitted",
  },

  CorrectVoteCount: {
    VoteCount: "div[class='MuiGrid-root MuiGrid-container MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-6 MuiGrid-grid-md-6 MuiGrid-grid-lg-6'] p[class='MuiTypography-root MuiTypography-body1 MuiTypography-colorSecondary']"
  },

  VotingOnChain: {
    active: 'Active',
    VoteFor: 'Vote For',
    VoteAgainst: 'Vote Against',
    Amount: 'input[placeholder="Type an Amount"]',
    Submit: 'Submit',
    validateText: 'Vote transaction confirmed!',
    View: 'View',
  },

  TokenDeposit: {
    User: "User",
    Deposit: "Deposit",
    Amount: "input[placeholder='0']",
    Submit: "Submit",
    verifyText: "Deposit transaction confirmed!",
    Balance: ".MuiTypography-root jss2800 MuiTypography-body1 MuiTypography-colorTextPrimary"

  },
  TokenWithdrawal: {
    User: "User",
    Withdraw: "Withdraw",
    Amount:"input[placeholder='0']",
    Submit: "Submit",
    verifyText: "Withdrawal transaction confirmed!"
  },

  TokenUnstaking: {
    Drop: "Drop Expired",
    User: "User",
    Unstake: "Unstake Votes",
    verifyText: "Execute transaction confirmed!"
  },
};

export { pageLocators };
