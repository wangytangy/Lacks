## Component Hierarchy

**AuthFormContainer**
  - AuthForm

**HomeContainer**
  - SidebarContainer
  - ChannelsContainer

**SidebarContainer**
  - ChannelsIndex

**ChannelContainer**
  - HeaderContainer
  - MessageIndex
    - MessageContainer
      - MessageIndexItem

**HeaderContainer**
  - Header

**NewChannelContainer**
  - NewChannel

**ProfileContainer**
  - ProfileDetail

  ## Routes

  |Path   | Component   |
  |-------|-------------|
  | "/sign-up" | "AuthFormContainer" |
  | "/sign-in" | "AuthFormContainer" |
  | "/messages" | "HomeContainer" |
  | "/messages/:channelId" | "ChannelContainer" |
  | "/messages/new-channel" | "NewChannelContainer" |
