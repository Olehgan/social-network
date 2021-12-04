import React from "react";
import {UsersType} from "../../redux/users-reducer";
import axios from "axios";
import userPhoto from './../../assests/images/young-user-icon_5f450e6354e9e.png'
import s from './Users.module.css'

type UsersTypeProps = {
    users: UsersType[]
    follow: (userId: number) => void
    setUsersCount: (currentPage: number) => void
    setUsers: (users: UsersType[]) => void
    unfollow: (userId: number) => void
    totalCount: number
    pageSize: number
    currentPage: number
}


export class Users extends React.Component<UsersTypeProps> {

    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(res => {
                this.props.setUsers(res.data.items)
            })
        }
    }

    render() {
        let pageCount = Math.ceil(this.props.totalCount  / this.props.pageSize)
        console.log(pageCount)
        let pages = [];
        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
        return (

            <div>
                <div>
                    {
                        pages.map(p =>  {
                         return   <span className={this.props.currentPage === p ? s.selectedPage : ''} onClick={()=>{
                         this.props.setUsersCount(p)}
                         }>{p}</span>
                        })
                    }
                    {/*<span>1</span>*/}
                    {/*<span className={s.selectedPage}>2</span>*/}
                    {/*<span>3</span>*/}
                    {/*<span>4</span>*/}
                    {/*<span>5</span>*/}
                </div>
                {
                    this.props.users.map(u =>
                        <div key={u.id}>
                      <span>
                          <div>
                              <img key={u.id}
                                   src={u.photos.small !== null ? u.photos.small : userPhoto}
                                   alt={'image'}
                                   className={s.usersPhoto}
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
        )
    }
}
