using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System.ComponentModel.DataAnnotations;

namespace investNetCore.Models
{
    public class UserModel
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [Required(ErrorMessage = "Prosím, vyplňte meno.")]
        public string name { get; set; } = null!;
        [Required(ErrorMessage = "Prosím, vyplňte Priezvisko.")]
        public string surname { get; set; } = null!;

        //[Required(ErrorMessage = "Prosím, vyplňte Váš email.")]
        public string email { get; set; } = null!;
        [Required(ErrorMessage = "Prosím, zvoľte si heslo.")]
        public string password { get; set; } = null!;
        public List<BankAccount> BankAccounts { get; set; }
        public List<BrokerAccount> BrokerAccounts { get; set; }
        public List<Income> Incomes { get; set; }
        public List<Expense> Expenses { get; set; }
        public List<Investment> Investments { get; set; }



    }
    public class BankAccount
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? _BankId { get; set; }
        public string BankInfo { get; set; } = null!;
        public decimal BankNumber { get; set; } 
    }
    public class BrokerAccount
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? _BrokerkId { get; set; }
        public string BrokerInfo { get; set; } = null!;
        public string BrokerLogin { get; set; } = null!;
        public string BrokerPassword { get; set; } = null!;


    }

    public class Expense
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? _ExpensekId { get; set; }

        public string Category { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
    }
    public class Income
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? _IncomekId { get; set; }

        public string Category { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
    }
    public class Investment
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? _InvestmentkId { get; set; }
        public string Ticker { get; set; }
        public Boolean Type { get; set; }
        public decimal Amount { get; set; }
        public DateTime Date { get; set; }
        public Boolean IsOpen { get; set; }
        public decimal OpeningPrice { get; set; }
        public decimal ClosingPrice { get; set; }
    }

}
