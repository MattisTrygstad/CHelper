using System;
using Microsoft.EntityFrameworkCore;

namespace CHelper.Data
{
    public class CHelperContext : DbContext
    {
        public CHelperContext(DbContextOptions<CHelperContext> opt) : base()
        {

        }
    }
}
