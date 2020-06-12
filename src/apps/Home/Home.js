import PageTemplates   from '/src/zapps/PageTemplates/PageTemplates.js'
import ModalDialog     from '/src/zapps/ModalDialog/ModalDialog.js'
import Api             from '/src/api/Api.js'

import $               from '/vendors/jquery/3.5.1/module.js'


class Home
{
    constructor(config){
        this.config = config;
        document.addEventListener("DOMContentLoaded", this.main.bind(this))
    }
    
    async main()
    {
        this.api = new Api(this.config);
        this.modalDialog = new ModalDialog(this.config, this.api);

        this.pageTemplates = new PageTemplates(this.config, this.api);
        
        this.template = await this.pageTemplates.create({
            "theme": { },
            "template": { },
            "header": { },
            "sidebar": { },
            "content": { },
            "footer": { },
            "dialog": { }
        });

        this.template.children('.content').append(`<p>Home: ${location.pathname}</p>`);

        $('body').append(this.template)
        this.template.show();


    }
        
    
}

window.home = new Home(window.config)

