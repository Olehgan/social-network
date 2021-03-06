import React from "react";
import axios, {AxiosResponse} from "axios";
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
}

export const profileAPI = {
    getUserProfile(userId: string) {
        return instance.get<ProfileType>(`profile/${userId}`)
    },
    getStatus(userId: string) {
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status: string) {
        return instance.put(`profile/status`, {status: status})
    }
}

export const authAPI = {
    me() {
        return instance.get<AuthMeType,AxiosResponse<ResponseType<{login:string,id:number,email:string}>>>(`auth/me`)
    },
    login(data: LoginParamsType) {
        return instance.post<LoginParamsType, AxiosResponse<ResponseType<{ userId: string }>>>(`/auth/login`, data)

    },
    logout() {
        return instance.delete<ResponseType>(`/auth/login`)
    }
}


export type LoginParamsType = {
    email: string
    password: string
    rememberMe?: boolean
    captcha?: string
}

export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors: Array<string>
    data: D
}