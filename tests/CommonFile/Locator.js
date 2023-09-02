const pageLocators = {

  TokenCreation: {
    MainNet: 'Mainnet',
    GhostNet: "Ghostnet",
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
    Slider: "span[role='slider']",
    MinAmount: "input[name='minXtzAmount']",
    MaxAmount: "input[name='maxXtzAmount']",
    QuorumThreshold: "input[name='quorumThreshold']",
    QuorumChange: "input[name='quorumChange']",
    MinQuorumAmount: "input[name='minQuorumAmount']",
    QuorumMaxChange: "input[name='quorumMaxChange']",
    MaxQuorumAmount: "input[name='maxQuorumAmount']",
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

  TransferToken: {
    Treasury: "Treasury",
    NewTransfer: "New Transfer",
    Recipient: "input[placeholder='Type an Address Here']",
    Asset: "input[class='MuiInputBase-input MuiInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused MuiInputBase-inputAdornedEnd']",
    TST: "TST",
    Amount: "input[placeholder='0']",
    AgoraPostID: "input[placeholder='Type an Agora Post ID']",
    SubmitButton: "Submit",
    verifyText: "Registry proposal transaction confirmed",
  },

  TransferNFT: {
    NFTs: "NFTs",
    NFTid: "input[class='MuiInputBase-input MuiInput-input MuiAutocomplete-input MuiAutocomplete-inputFocused MuiInputBase-inputAdornedEnd']"
  },

  EditRegistry: {
    Registry: "Registry",
    NewItem: "New Item",
    Key: "input[placeholder='Type a Key']",
    Value: "textarea[placeholder='Type a value']",
    verifyText: "Registry proposal transaction confirmed!"
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

  ProposalExecutionandDrop: {
    PassedExecutable: "Passed - Executable",
    Passed: "Passed",
    DropProposal: "Drop Proposal",
    PercentageText: "p[class='MuiTypography-root jss1339 jss1340 MuiTypography-body1']",
    DropExpired: "//span[text()='Drop Expired']",
    Execute: "//span[text()='Execute']",
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
    Amount: "input[placeholder='0']",
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
