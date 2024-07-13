"use server"

export async function searchUser(username: string, tag: string) {

    const API_KEY = "test_5e27611acc2fa45d8233cd1d49b596dcb01cdb693b92c72ddea6455fc22789dbefe8d04e6d233bd35cf2fabdeb93fb0d";    
    
    console.log("user: ", username)
    console.log("tag: ", tag)
    const response = await fetch(`https://open.api.nexon.com/tfd/v1/id?user_name=${username}%23${tag}`, {
        method: "GET",
        headers:{
          "x-nxopen-api-key": API_KEY   
        }
    })
    const ouidJson = await response.json()

    const basicInfoRes = await fetch(`https://open.api.nexon.com/tfd/v1/user/basic?ouid=${ouidJson.ouid}`, {
        method: "GET",
        headers:{
          "x-nxopen-api-key": API_KEY   
        }
    })

    const basicInfo = await basicInfoRes.json()  
    return basicInfo
}