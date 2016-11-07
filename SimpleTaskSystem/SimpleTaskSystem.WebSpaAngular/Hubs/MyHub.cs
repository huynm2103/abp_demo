using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Abp.Dependency;
using Microsoft.AspNet.SignalR;

namespace SimpleTaskSystem.WebSpaAngular.Hubs
{
    public class MyHub : Hub, ITransientDependency
    {
        public void Hello()
        {
            Clients.All.hello();
        }
    }
}