using System;
using System.Collections.Generic;
using CHelper.Models;

namespace CHelper.Data
{
    public interface ICHelperRepo
    {
        IEnumerable<Command> GetAllCommands();

        Command GetCommandById(int id);
    }
}
