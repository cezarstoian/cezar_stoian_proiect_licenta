import getConversationById from "@/app/actions/getConversationById";
import getMessages from "@/app/actions/getMessages";
import Header from "./components/Header";
import Body from "./components/Body";
import MessageSendingBox from "./components/MessageSendingBox";

interface IParams {
  conversationId: string;
}

const ConversationId = async (
  {params} : { params: IParams }
) => {
  const { conversationId } = params

  const conversation = await getConversationById(conversationId)
  const messages = await getMessages(conversationId)

  return (
    <div className="lg:pl-80 h-full">
      <div className="flex flex-col h-full">
        <Header conversation={conversation} />
        <Body />
        <MessageSendingBox />
      </div>
    </div>
  )
}

export default ConversationId;