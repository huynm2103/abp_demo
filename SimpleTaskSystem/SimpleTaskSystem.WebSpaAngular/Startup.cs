﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.Owin;
using Owin;
using SimpleTaskSystem.WebSpaAngular;

[assembly: OwinStartup(typeof(Startup))]
namespace SimpleTaskSystem.WebSpaAngular
{
    public class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            // Any connection or hub wire up and configuration should go here
            app.MapSignalR();
        }
    }
}