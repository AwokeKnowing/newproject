import SiteData      from '/src/api/SiteData/SiteData.js'
import AccountData   from '/src/api/AccountData/AccountData.js'
import UserData      from '/src/api/UserData/UserData.js'

class Api
{
    constructor(config)
    {
        this.site    = new SiteData(this, config);
        this.account = new AccountData(this, config);
        this.user    = new UserData(this, config);
        this.token   = "";
        this.mui     = new MuiData(this, config);
    }

    
    logIn(user, pass)
    {
    }

}

export default Api
/*
var UserData = {
    "version":1,
    get Profile() {
        return new Promise((resolve, reject)=>
        {
            resolve({"hi":1});
        });
    },
    set Profile(value) {
        //this._profile = value;
    },
    get File() {
        return new Promise((resolve, reject)=>
        {
            resolve({"hi":1});
        });
    },
    set File(value) {
        //this._profile = value;
    }
};
*/