import PageTemplates   from '/src/zapps/PageTemplates/PageTemplates.js'
import ModalDialog     from '/src/zapps/ModalDialog/ModalDialog.js'
import Api             from '/src/api/Api.js'

import $               from '/vendors/jquery/3.5.1/module.js'


class Course
{
    constructor(config){
        this.config = config;
        document.addEventListener("DOMContentLoaded", this.main.bind(this))
    }
    
    async main()
    {
        this.api = new Api(this.config);

        /*$('<p>').html('Course: ' + location.pathname).appendTo('body')
        
        this.templates = new PageTemplates();
        
        let template = this.templates.create({
            "features":{

            }
        });



        template.sections
        

        let stuff = await this.makeStuff()
        alert(JSON.stringify(stuff))


        let settings = await api.account.Settings;
        let settings = api.account.settings
        
        if(settings.canDoSomething)
            doIt()
        */

    }
        
    async makeStuff()
    {
        let p = "hi"
        let f = "hi"
        alert (p)
        //let f = await api.userData.File
        
        return [p,f]
    }
     
}

window.course = new Course(window.config)

