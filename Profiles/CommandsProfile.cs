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
            CreateMap<Command, CommandReadDto>();
        }
    }
}
