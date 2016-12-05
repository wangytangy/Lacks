## Component Hierarchy

**AuthFormContainer**
  - AuthForm

**HomeContainer**
  - SidebarContainer
  - ChannelsContainer

**SidebarContainer**
  - ChannelsIndex
  - DirectMessagesIndex

**ChannelContainer**
  - HeaderContainer
  - MessageIndex
    - MessageContainer
      - MessageIndexItem
        + MessageDetail

**DirectMessagesContainer**
  - HeaderContainer
    - MessageContainer
      - MessageIndexItem
        + MessageDetail

**HeaderContainer**
  - Header

**NewDirectMessageContainer**
  - NewDirectMessage

**NewChannelContainer**
  - NewChannel

**ProfileContainer**
  - ProfileDetail

**SearchContainer**
  - SearchResults

  ## Routes

  |Path   | Component   |
  |-------|-------------|
  | "/sign-up" | "AuthFormContainer" |
  | "/sign-in" | "AuthFormContainer" |
  | "/messages" | "HomeContainer" |
  | "/messages/:username" | "DirectMessagesContainer" |
  | "/messages/:channelId" | "ChannelContainer" |
  | "/messages/new-channel" | "NewChannelContainer" |
  | "/messages/new-directmessage" | "NewDirectMessageContainer" |
