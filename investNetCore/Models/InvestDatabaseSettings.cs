namespace investNetCore.Models
{
    public class InvestDatabaseSettings
    {
        public string UsersCollectionName { get; set; } = null!;
        public string ArticleCollectionName { get; set; } = null!;
        public string ConnectionString { get; set; } = null!;

        public string DatabaseName { get; set; } = null!;
    }
}
