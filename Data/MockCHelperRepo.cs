using System;
using System.Collections.Generic;
using CHelper.Models;

namespace CHelper.Data
{
    public class MockCHelperRepo : ICHelperRepo
    {
        public MockCHelperRepo()
        {
        }

        public void CreateCommand(Command cmd)
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Command> GetAllCommands()
        {
            var commands = new List<Command>
            {
                new Command { Id = 0, Desc = "View files in directory", Line = "ls", Platform = "Ubuntu 16.04" },
                new Command { Id = 1, Desc = "Enter folder", Line = "cd [PATH]", Platform = "Ubuntu 16.04" },
                new Command { Id = 2, Desc = "Install package", Line = "apt-get [PACKAGE NAME]", Platform = "Ubuntu 16.04" }
            };

            return commands;
        }

        public Command GetCommandById(int id)
        {
            return new Command { Id = 0, Desc = "View files in directory", Line = "ls", Platform = "Ubuntu 16.04" };
        }

        public bool SaveChanges()
        {
            throw new NotImplementedException();
        }

        public void UpdateCommand(Command cmd)
        {
            throw new NotImplementedException();
        }
    }
}
