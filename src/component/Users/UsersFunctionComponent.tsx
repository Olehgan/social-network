import React from "react";
import {UsersType} from "../../redux/users-reducer";
import axios from "axios";
import userPhoto from './../../assests/images/young-user-icon_5f450e6354e9e.png'

type UsersFTypeProps = {
    users: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}


export const UsersF = (props: UsersFTypeProps) => {
    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
                debugger
                props.setUsers(res.data.items)
            })
        }
    }
    return (
        <div>
            <button onClick={getUsers}>Get users</button>
            {
                props.users.map(u =>
                    <div key={u.id}>
                      <span>
                          <div>
                              <img key={u.id}
                                   src={userPhoto}
                                   className={'usersPhoto'}
                              />
                          </div>
                          <div>
                              {u.followed
                                  ? <button onClick={() => {
                                      props.unfollow(u.id)
                                  }}>Unfollow</button>

                                  : <button onClick={() => {
                                      props.follow(u.id)
                                  }}>Follow </button>
                              }
                          </div>
                      </span>
                        <span>
                            <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </span>
                                <span>
                                    <div>{"u.location.city"}</div>
                                    <div>{"u.location.country"}</div>
                                </span>
                        </span>
                    </div>
                )}
        </div>
    )
}
