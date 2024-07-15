"use server"

export async function getDescendantMetadata(language_code: string) {
    const url = `https://open.api.nexon.com/static/tfd/meta/${language_code}/descendant.json`
    const response = await fetch(url, {
        cache: 'force-cache',
        method: "GET",
        headers:{
          "x-nxopen-api-key": process.env.NEXT_PUBLIC_NEXON_API_KEY! 
        }
    })

    const json = await response.json()
    return json;
}

export async function getWeaponsMetadata(language_code: string) {
    const url = `https://open.api.nexon.com/static/tfd/meta/${language_code}/weapon.json`
    const response = await fetch(url, {
        cache: 'force-cache',
        method: "GET",
        headers:{
          "x-nxopen-api-key": process.env.NEXT_PUBLIC_NEXON_API_KEY! 
        }
    })
    
    const json = await response.json()
    return json;
}

export async function getModuleMetadata(language_code: string) {
  const url = `https://open.api.nexon.com/static/tfd/meta/${language_code}/module.json`
  const response = await fetch(url, {
      cache: 'force-cache',
      method: "GET",
      headers:{
        "x-nxopen-api-key": process.env.NEXT_PUBLIC_NEXON_API_KEY! 
      }
  })

  const json = await response.json()
  return json;
}