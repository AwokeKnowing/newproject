


class Library
{
  constructor(){

  }
  
  async play()
  {
    let stuff = await this.makeStuff()
    alert(JSON.stringify(stuff))
  }
  
    
  async makeStuff()
  {
    let p = (await snow.UserData.Profile).hi
    alert (p)
    let f = await snow.UserData.File
    
    return [p,f]
  }
   
}












