
function getVoidMissions() {
    const API_KEY = "test_5e27611acc2fa45d8233cd1d49b596dcb01cdb693b92c72ddea6455fc22789dbefe8d04e6d233bd35cf2fabdeb93fb0d";    
    const urlString = "https://open.api.nexon.com/static/tfd/meta/en/void-battle.json";
    
    const answer = fetch(urlString, {
        headers:{
          "x-nxopen-api-key": API_KEY
        }
    })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error(error))
    
    console.log(answer)
}

export default function VoidMissionsPage() {
    getVoidMissions()
    return (
      <div>
        <h2>Void Missions</h2>
      </div>
    );
  }