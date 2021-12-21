import React from "react";
import axios from "axios";
import {ProfileType} from "../redux/profile-reducer";
import {AuthMeType} from "../redux/auth-reducer";


let instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': '5883697e-1933-44d6-978d-c735fd6eee7a'
    }
})
export const userAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(`users?page=${currentPage} &count${pageSize}`)
    },
    postFollow(id: number) {
        return instance.post(`follow/${id}`)
    },
    deleteUnfollow(id: number) {
        return instance.delete(`follow/${id}`)
    },
    getUserProfile(userId: string) {
        return instance.get<ProfileType>(`profile/${userId}`)
    }
}
export const authAPI = {
    me(){
        return instance.get<AuthMeType>(`auth/me`)
    }

}