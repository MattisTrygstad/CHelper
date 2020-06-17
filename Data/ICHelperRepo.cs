using System;
using System.Collections.Generic;
using CHelper.Models;

namespace CHelper.Data
{
    public interface ICHelperRepo
    {
        bool SaveChanges();

        IEnumerable<Command> GetAllCommands();
        Command GetCommandById(int id);
        void CreateCommand(Command cmd);
        void UpdateCommand(Command cmd);
        void DeleteCommand(Command cmd);
    }
}
