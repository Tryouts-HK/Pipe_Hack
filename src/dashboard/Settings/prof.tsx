import { Profile } from "./profile"

export const Prof = () => {
    return (
        <div>
            <Profile initialUpdates={{
                firstName: "",
                middleName: "",
                lastName: "",
                specialization: "",
                contactNumber: "",
                address: ""
            }} updateUrl={""} />
        </div>
    )
}