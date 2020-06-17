using System;
using System.ComponentModel.DataAnnotations;

namespace CHelper.Dtos
{
    public class CommandCreateDto
    {
        [Required]
        [MaxLength(250)]
        public string Desc { get; set; }

        [Required]
        [MaxLength(250)]
        public string Line { get; set; }

        [Required]
        [MaxLength(250)]
        public string Platform { get; set; }
    }
}
