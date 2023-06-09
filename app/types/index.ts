import { Conversation, Message, User, ConversationsOnUsers } from "@prisma/client";
import { Data } from "aws-sdk/clients/firehose";

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

export type UploadedFile = {
  path: string,
  lastModified: number,
  lastModifiedData: Date,
  name: string,
  size: number,
  type: string,
}