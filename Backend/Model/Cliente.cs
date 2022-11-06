using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace Agencia.Model
{



    [Table("cliente")]
    public class Cliente
    {

        [Column("id")]
        public int Id { get; set; }

        [Column("cliente_nome")]
        public string Nome { get; set; } = string.Empty;

        [Column("cliente_cpf")]
        public string Cpf { get; set; }

        [Column("cliente_nascimento")]
        public string Nascimento { get; set; } = string.Empty; 




    }
}
