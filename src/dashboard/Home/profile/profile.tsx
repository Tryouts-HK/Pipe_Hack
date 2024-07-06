import { SocialScore } from "./socialscore"
import { UserMetrics } from "./usermetrics"

export const UserHomeProfile: React.FC = () => {
    return (
        <div className="flex justify-between">
            <div>
                <SocialScore />
            </div>
            <div>
                <UserMetrics />
            </div>
       </div>
    )
}