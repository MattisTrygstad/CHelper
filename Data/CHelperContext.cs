using System;
using CHelper.Models;
using Microsoft.EntityFrameworkCore;

namespace CHelper.Data
{
    public class CHelperContext : DbContext
    {
        public CHelperContext(DbContextOptions<CHelperContext> opt) : base(opt)
        {

        }
        public DbSet<Command> Commands { get; set; }
    }
}
