using System.ComponentModel;
using System.ComponentModel.DataAnnotations;

namespace BulkyBookWeb.Models
{
    public class Category
    {
        // .NET data annotation
        [Key]
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }
        [DisplayName("Display Order")]
        [Range(1111,20000,ErrorMessage ="Order number is not in range.")]
        public int DisplayOrder { get; set; }

        public DateTime CreatedDateTime { get; set; } = DateTime.Now;
    }
}
