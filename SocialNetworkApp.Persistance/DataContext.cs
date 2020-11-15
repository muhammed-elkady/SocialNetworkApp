using Microsoft.EntityFrameworkCore;
using SocialNetworkApp.Domain;

namespace SocialNetworkApp.Persistance
{
    public class DataContext: DbContext 
    {

        public DataContext(DbContextOptions options): base(options)
        {
        }
        public DbSet<Value> Values { get; set; }
    }
}