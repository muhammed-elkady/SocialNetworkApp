using Microsoft.EntityFrameworkCore;
using SocialNetworkApp.Domain;

namespace SocialNetworkApp.Persistance
{
    public class DataContext : DbContext
    {

        public DataContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Value> Values { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Value>()
                 .HasData(
                new Value { Id = 1, Name = "Value 1" },
                new Value { Id = 2, Name = "Value 2" },
                new Value { Id = 3, Name = "Value 3" }
                );
        }
    }
}