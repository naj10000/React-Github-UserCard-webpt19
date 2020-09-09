import React from 'react'

function User(props) {
    return (
        <div className="container">
            {props.user.map(user => (
                <div className="cards">
                    <div className="card">
                        <img width="200" src={user.avatar_url}/>
            <h2 className="username">UserName: {user.login}</h2>
            <br/>
            <p>Bio: {user.bio}</p>

                    </div>

                </div>
            ))}
            
        </div>
    )
}

export default User
