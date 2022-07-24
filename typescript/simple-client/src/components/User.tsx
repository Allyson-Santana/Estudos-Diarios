import React from "react"

interface IUsers {
    name: string;
    email: string;
}

interface Props {
    user: IUsers;
}

const User: React.FC<Props> = ({ user }) => {

    return(
        <div>
            <p> <strong>Nome: { user.name }</strong> </p>
            <p> <strong>E-mail: </strong> { user.email } </p>
        </div>
    )
}

export default User;