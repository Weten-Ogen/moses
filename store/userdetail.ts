"use client"
import { getUserInfo } from '@/app/actions/authservice'
import {create} from 'zustand'

interface userprops {
    id: string,
    name: string,
    email: string,
    country: string,
    contactNumber:number,
    address?: string,
    createdAt: Date,
}

type userStore   =  {
    user: userprops | null,
    getUserdetails: () => void,
    deleteaccount: () => void,

}

export const useUserDetailsStore = create<userStore>((set) => ({
user : null,
getUserdetails: async() => {
    const userinfo = await getUserInfo()
    try {
        
        const fetcheduser= await fetch(`${process.env.NEXT_PUBLIC_BACKEND_API_URL}/user/${userinfo.id}`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json"
            },
            cache:"no-store"
        }).then(res => res.json())
        set((state) => ({user: state.user= fetcheduser.data}))
    } catch (error) {
        console.log('an error occured at the userdetails')
    }
   
},
deleteaccount: () =>{
    
},

}))