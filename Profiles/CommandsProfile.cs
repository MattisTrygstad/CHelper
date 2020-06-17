using System;
using AutoMapper;
using CHelper.Dtos;
using CHelper.Models;

namespace CHelper.Profiles
{
    public class CommandsProfile : Profile
    {
        public CommandsProfile()
        {
            // Source -> Destination
            CreateMap<Command, CommandReadDto>();

            // Destination -> Source
            CreateMap<CommandCreateDto, Command>(); 
        }
    }
}
