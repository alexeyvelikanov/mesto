export class UserInfo {
    constructor(profileName, profileProf) {
        this._profileName = profileName;
        this._profileProf = profileProf;
    }
    getUserInfo() {
        return {
          title: this._profileName.textContent,
          subtitle: this._profileProf.textContent
        }
      }
    
    setUserInfo(profileName, profileTitle) {
        this._profileName.textContent = profileName.value;
        this._profileProf.textContent = profileTitle.value;
    }
}