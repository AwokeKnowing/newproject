import Api             from '/src/api/Api.js'

import $               from '/vendors/jquery/3.5.1/module.js'

export default class PageTemplates
{
    constructor(config) 
    {
        this.config = config
    }

    async create(settings)
    {
    	 let template = $('<div class="site"><div class="header"></div><div class="sidebar"></div><div class="content"></div><div class="header"></div><div class="footer"><div class="dialog"></div></div>')
    	 for (let section of template.children())
    	 	section.innerText =section.className + " loading...";

    	 return template;
    }

}