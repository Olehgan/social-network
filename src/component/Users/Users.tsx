import React from "react";
import {UserType} from "../../redux/users-reducer";
import s from './users.module.css'

type UsersTypeProps = {
    users: UserType[]
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (users: any) => void
}


export const Users = (props: UsersTypeProps) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photos: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSktCCowOqZSCjQWBe0h5Go3wnvv54jBfvzA&usqp=CAU',
                followed: false,
                fullName: "Oleg",
                status: "very good",
                location: {country: 'Belarus', city: 'Minsk',}
            },
            {
                id: 2,
                photos: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSktCCowOqZSCjQWBe0h5Go3wnvv54jBfvzA&usqp=CAU',
                followed: true,
                fullName: "Ilia",
                status: "very good",
                location: {country: 'Belarus', city: 'Minsk',}
            },
            {
                id: 3,
                photos: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSktCCowOqZSCjQWBe0h5Go3wnvv54jBfvzA&usqp=CAU',
                followed: false,
                fullName: "Kodaly",
                status: "very good",
                location: {country: 'Belarus', city: 'Minsk',}
            },
        ])
    }

    return (
        <div>
            {
                props.users.map(u =>
                    <div key={u.id}>
                      <span>
                          <div>
                              <img
                                  className={s.usersPhoto}
                                  src={u.photos}
                                  alt={'image'}/>
                          </div>
                          <div>
                              {u.followed
                                  ?
                                  <button onClick={() => {
                                      props.unfollow(u.id)
                                  }}>Unfollow</button>

                                  :
                                  <button onClick={() => {
                                      debugger
                                      props.follow(u.id)
                                  }}>Follow</button>
                              }
                                      </div>
                                      </span>
                        <span>
                                      <span>
                                      <div>{u.fullName}</div>
                                      <div>{u.status}</div>
                                      </span>
                                      <span>
                                      <div>
                                  {u.location.city}
                                      </div>
                                      <div>
                                  {u.location.country}
                                      </div>
                                      </span>
                                      </span>
                    </div>
                )}
        </div>
    )


}
