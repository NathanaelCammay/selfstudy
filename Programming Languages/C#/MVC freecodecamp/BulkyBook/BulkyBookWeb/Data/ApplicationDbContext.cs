using BulkyBookWeb.Models;
using Microsoft.EntityFrameworkCore;

namespace BulkyBookWeb.Data
{
    // creating a DbContext object for our app, inherited from EF class DbContext
    public class ApplicationDbContext : DbContext 
    {
        // DbContext object constructor that is used to access the base DbContxt methods via your created instance context
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        // this property is of type DbSet, which defines one table model for your database/
        public DbSet<Category> Categories { get; set; }
    }
}
