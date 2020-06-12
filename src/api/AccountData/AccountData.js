class AccountData
{
	constructor(api, config)
    {
        this.api    = api;
        this.config = config;
    }


	get Settings()
	{
		return new Promise((resolve, reject)=>
	    {
	      	resolve({"hi":1});
	    });
	}

	

}

export default AccountData;