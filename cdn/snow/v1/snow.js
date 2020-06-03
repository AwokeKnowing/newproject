var snow = {
  "UserData":UserData,
  
  events: {"ready":[]},
  
  on(ev, fn, ctx)
  {
    console.log("got an ev"+ev)
    console.log(fn)
    console.log("context",ctx)
    this.events[ev].push({
      "fn":fn,
      "bind":((typeof ctx==="undefined")?"APP":ctx)
    })
  },
  
  trigger(ev, data)
  {
    alert(this.events[ev].length)
    for (fn of this.events[ev])
      fn.fn.call(fn.bind=="APP"?this.app:fn.bind,data)
  },
  
  fall(path)
  {
    if(path=="/index.html") 
      this.app=new App404()
    else
      alert(path)
    this.trigger("ready", {"some":"data"})
  }

}

//snow data extensions.