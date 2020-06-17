using System;
using System.Collections.Generic;
using System.Linq;
using CHelper.Models;

namespace CHelper.Data
{
    public class SqlCHelperRepo : ICHelperRepo
    {
        private readonly CHelperContext _context;

        public SqlCHelperRepo(CHelperContext context)
        {
            _context = context;
        }

        public IEnumerable<Command> GetAllCommands()
        {
            return _context.Commands.ToList();
        }

        public Command GetCommandById(int id)
        {
            return _context.Commands.FirstOrDefault(p => p.Id == id);
        }
    }
}
