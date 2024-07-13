"use server"

export async function searchUser(username: string, tag: string) {

  
    
    console.log("user: ", username)
    console.log("tag: ", tag)
    const response = await fetch(`https://open.api.nexon.com/tfd/v1/id?user_name=${username}%23${tag}`, {
        method: "GET",
        headers:{
          "x-nxopen-api-key": process.env.NEXT_PUBLIC_NEXON_API_KEY! 
        }
    })
    const ouidJson = await response.json()

    const basicInfoRes = await fetch(`https://open.api.nexon.com/tfd/v1/user/basic?ouid=${ouidJson.ouid}`, {
        method: "GET",
        headers:{
          "x-nxopen-api-key": process.env.NEXT_PUBLIC_NEXON_API_KEY!   
        }
    })

    const basicInfo = await basicInfoRes.json()  
    return basicInfo
}