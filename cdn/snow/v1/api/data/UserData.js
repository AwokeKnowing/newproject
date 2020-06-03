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