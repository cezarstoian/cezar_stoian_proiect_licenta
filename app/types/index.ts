import { Conversation, Message, User, ConversationsOnUsers } from "@prisma/client";

export type ConversationExtraType = Conversation & {
  messages: Message[],
}

export type MessageExtraType = Message & {
  sender: User
}

export type ConversationOnUserExtraType = ConversationsOnUsers & {
  user: User,
  conversation: ConversationExtraType,
}