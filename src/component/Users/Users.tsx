import React from "react";
import {UsersType} from "../../redux/users-reducer";
import userPhoto from './../../assests/images/young-user-icon_5f450e6354e9e.png'
import s from './Users.module.css'
import {NavLink} from "react-router-dom";
import {deleteUnfollow, postFollow} from "../../api/Api";

type UsersTypeProps = {
    users: UsersType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    totalCount: number
    pageSize: number
    currentPage: number
    onPageChange: (pageNumber: number) => void
}

export const Users = (props: UsersTypeProps) => {

    let pageCount = Math.ceil(props.totalCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {
                    pages.map(p => {
                        return <span
                            className={props.currentPage === p ? s.selectedPage : ''}
                            onClick={() => {
                                props.onPageChange(p)
                            }
                            }>{p + '...'}</span>
                    })
                }
            </div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                      <span>
                          <div>
                              <NavLink to={'/profile/' + u.id}> <img key={u.id}
                                                                     src={u.photos.small !== null
                                                                         ? u.photos.small
                                                                         : userPhoto}
                                                                     alt={'image'}
                                                                     className={s.usersPhoto}
                              /></NavLink>
                          </div>
                          <div>
                              {u.followed
                                  ? <button onClick={() => {
                                      // axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                      //     {
                                      //         withCredentials: true,
                                      //         headers: {
                                      //             'API-KEY': '5883697e-1933-44d6-978d-c735fd6eee7a'
                                      //         }
                                      //     })
                                      deleteUnfollow(u.id).then(res => {
                                          if (res.data.resultCode === 0) {
                                              props.unfollow(u.id)
                                          }
                                      })
                                      props.unfollow(u.id)
                                  }}>Unfollow</button>
                                  : <button onClick={() => {
                                      //     axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                      // {}, {
                                      //     withCredentials: true,
                                      //     headers: {
                                      //     'API-KEY': '5883697e-1933-44d6-978d-c735fd6eee7a'
                                      // }
                                      // })
                                      postFollow(u.id).then(res => {
                                          if (res.data.resultCode === 0) {
                                              props.follow(u.id)
                                          }
                                      })
                                  }}>Follow</button>
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

