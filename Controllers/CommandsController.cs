using System;
using System.Collections.Generic;
using CHelper.Data;
using CHelper.Models;
using Microsoft.AspNetCore.Mvc;

namespace CHelper.Controllers
{
    [Route("api/commands")]
    [ApiController]
    public class CommandsController :  ControllerBase
    {
        private readonly ICHelperRepo _repository;

        public CommandsController(ICHelperRepo repository)
        {
            _repository = repository;
        }


        //private readonly MockCHelperRepo _repository = new MockCHelperRepo();

        //GET api/commands
        [HttpGet]
        public ActionResult<IEnumerable<Command>> GetAllCommands()
        {
            var commandItems = _repository.GetAllCommands();

            return Ok(commandItems);
        }

        //GET api/commands/{id}
        [HttpGet("{id}")]
        public ActionResult<Command> GetCommandById(int id)
        {
            var commandItem = _repository.GetCommandById(id);

            return Ok(commandItem);
        }
    }
}
