import { MessageHeader } from "./header"
import { Messages } from "./messages"

export const Messaging: React.FC = () => {
    return (
        <div>
            <MessageHeader />
            <div>
                <Messages />
            </div>
        </div>
    )
}