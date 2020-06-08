import PageTemplates   from '/zapps/PageTemplates/PageTemplates.js'
import ModalDialog     from '/zapps/ModalDialog/ModalDialog.js'
import Api             from '/apidata/api.js'

import $               from '/vendors/jquery/jquery.latest.js'


class Course
{
  constructor(){
    //snow.at("/en/404")
    //snow.at("/en/404/child", App404Child)

    PageTemplates.applyThemeFromUrl()
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