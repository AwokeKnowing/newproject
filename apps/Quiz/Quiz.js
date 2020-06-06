import {PageTemplates}   from '/zapps/PageTemplates/PageTemplates.js'
import {Modal}           from '/zapps/Modal/Modal.js'
import {AccountData,
        AccountActions}  from '/apidata/AccountData/AccountData.js'
import {SiteData
        SiteActions}     from '/apidata/SiteData/SiteData.js'
import {UserData, 
        UserActions}     from '/apidata/UserData/UserData.js'

class Quiz
{
  constructor(){
    //snow.at("/en/404")
    //snow.at("/en/404/child", App404Child)
    PageTemplates.applyFromURL().
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

let quiz = new Quiz();