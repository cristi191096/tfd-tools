"use client"

import { useState } from "react"
import { searchUser } from "../_actions/user"
import { UserCard } from "./user-card"
import { UserSearch } from "./user-search"


export function UserProfile() {
    const [userProfile, setUserProfile] = useState<User | null>(null)

    const handleSubmit = async (username: string) => {
         const [user, tag] = username.split("#")
         const userData = await searchUser(user, tag)
        
         if(userData.error)
         {
            setUserProfile(null);
            return;
         }

         setUserProfile({
            username: userData.user_name,
            platform: userData.platform_type,
            masteryRank: userData.mastery_rank_level
         })
    }

    return (
        <div>
            <UserSearch onSubmit={handleSubmit}/>
            <div className="mt-6">
            {userProfile ? <UserCard data={userProfile}/> : null}
            </div>
        </div>
    )
}