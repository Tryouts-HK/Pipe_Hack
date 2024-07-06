import { UserHomeProfile } from "./profile/profile"
import { Welcome } from "./welcome"

export const Home: React.FC = () => {
    return (
        <div>
            <div>
                <UserHomeProfile />
            </div>
            <Welcome />
        </div>
    )
}