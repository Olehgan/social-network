import React from "react";
import {UsersType} from "../../redux/users-reducer";
import axios from "axios";
import userPhoto from './../../assests/images/young-user-icon_5f450e6354e9e.png'
import './users.css'

type UsersTypeProps = {
    users: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: UsersType[]) => void
}


export class Users extends React.Component<UsersTypeProps> {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
                debugger
                this.props.setUsers(res.data.items)
            })
        }
    }

    // constructor(props: UsersTypeProps) {
    //     super(props);
    //     if (this.props.users.length === 0) {
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
    //             debugger
    //             this.props.setUsers(res.data.items)
    //         })
    //     }
    // }
    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
    //             debugger
    //             this.props.setUsers(res.data.items)
    //         })
    //     }
    // }
    render() {
        return <div>
            {/*<button onClick={this.getUsers}>Get users</button>*/}
            {
                this.props.users.map(u =>
                    <div key={u.id}>
                      <span>
                          <div>
                              <img key={u.id}
                                   src={u.photos.small !== null ? u.photos.small : userPhoto}
                                   alt={'image'}
                                   className={'usersPhoto'}
                              />
                          </div>
                          <div>
                              {u.followed
                                  ? <button onClick={() => {
                                      this.props.unfollow(u.id)
                                  }}>Unfollow</button>

                                  : <button onClick={() => {
                                      this.props.follow(u.id)
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
    }
}
