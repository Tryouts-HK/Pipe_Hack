// import { useUser } from "../../user";
import { Grid } from "./grid"
import { DashProfile } from "./profile"

interface IWelcome {
}
// const {user} = useUser()

// const removeGmailDomain = (email?: string): string => {
//     if (email === undefined) {
//         return 'undefined'
//     }
//     if (email.includes('@gmail.com')) {
//       return email.replace('@gmail.com', '');
//     }
//     return email;
//   };

//   const nameformat = removeGmailDomain(user?.name)
const nameformat = 'Asab'
  

export const Welcome: React.FC<IWelcome> = () => {
    return (
        <div>
            <div className="flex justify-end">
                <DashProfile />
            </div>
            <div>
            <h1 className="text-4xl">Welcome,<span className="text-blue-600 font-semibold"> {nameformat}</span></h1>
            <Grid />
            </div>
        </div>
    )
}