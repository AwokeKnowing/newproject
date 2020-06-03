
class Course
{
  constructor(){
    //snow.at("/en/404")
    //snow.at("/en/404/child", App404Child)
    snow.on("ready", this.play)
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