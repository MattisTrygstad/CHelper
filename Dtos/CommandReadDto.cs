using System;
using System.ComponentModel.DataAnnotations;

namespace CHelper.Dtos
{
    public class CommandReadDto
    {
        public int Id { get; set; }

        public string Desc { get; set; }

        public string Line { get; set; }

        public string Platform { get; set; }
    }
}
