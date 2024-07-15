"use client"

import { useState } from "react"
import { searchUser } from "../../_actions/user"
import { UserCard } from "./user-card"
import { UserSearch } from "./user-search"
import { getDescendantMetadata, getModuleMetadata } from "../../_actions/metadata"
import { DescendantModuleViewer } from "@/components/modules-viewer"




export function UserProfile() {
    const [userProfile, setUserProfile] = useState<User | null>(null)

    const handleSubmit = async (username: string) => {
         const [user, tag] = username.split("#")
         const userData = await searchUser(user, tag)

         if(userData.status !== 200)
            {
               setUserProfile(null);
               return;
            }

        const descendants = await getDescendantMetadata("en")
        const descendant = descendants.filter((d : any) => d.descendant_id === userData.descendant.descendant_id)[0]
        const descendantStatDetailAtLevel = descendant.descendant_stat[userData.descendant.descendant_level - 1].stat_detail;

        const modules = await getModuleMetadata("en")
        const descendantModules = userData.descendant.module.map((dm: any) => {
            return  {
                data: modules.filter((m : any) => m.module_id === dm.module_id)[0],
                 slotId: dm.module_slot_id, 
                 enchant: dm.module_enchant_level
                 }
        })        
        console.log(descendantModules)
        const profile = {
            username: userData.basicInfo.user_name,
            platform: userData.basicInfo.platform_type,
            masteryRank: userData.basicInfo.mastery_rank_level,
            descendant: {
                Name: descendant ? descendant.descendant_name : "",
                Image: descendant ? descendant.descendant_image_url : "",
                Level: userData.descendant.descendant_level,
                Stats: descendantStatDetailAtLevel.map((stat : any) => {
                   return {name: stat.stat_type, value: stat.stat_value}
                }),
                moduleCapacity: userData.descendant.module_capacity,
                moduleMaxCapacity: userData.descendant.module_max_capacity,
                modules: descendantModules.map((module : any) => {
                    
                    return {
                        name: module.data.module_name,
                        image: module.data.image_url,
                        type: module.data.module_type,
                        tier: module.data.module_tier,
                        socketType: module.data.module_socket_type,
                        class: module.data.module_class,
                        slotID: module.slotId,
                        enchantLevel: module.enchant,
                        stats: module.data.module_stat.map((stat: any) => {
                            return {
                                level: stat.level,
                                capacity: stat.module_capacity,
                                value: stat.value
                            }
                        })
                    }
                })                 
            }
         }
         
         setUserProfile(profile)
    }

    return (
        <div>
            <UserSearch onSubmit={handleSubmit}/>
            <div className="mt-6">
            {userProfile ? (
                <>
                <UserCard data={userProfile}/>
                <DescendantModuleViewer modules={userProfile.descendant.modules}/>
                </>
                ) : null}
            </div>
        </div>
    )
}