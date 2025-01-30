using MagicVilla_VillaAPI.Data;
using MagicVilla_VillaAPI.Models;
using MagicVilla_VillaAPI.Models.DTO;
using Microsoft.AspNetCore.JsonPatch;
using Microsoft.AspNetCore.Mvc;

namespace MagicVilla_VillaAPI.Controllers
{
    [Route("api/VillaAPI")] // can also use  'api/[controller]" to dynamically refer to the controller name
    [ApiController]
    public class VilaAPIController : ControllerBase // inheriting from "Controller" class would incur unnessessary for views
    {
        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public ActionResult<IEnumerable<VillaDTO>> GetVillas()
        {
            return Ok(VillaStore.villaList); // Ok method implements status code 200
        }
        [HttpGet("{id:int}", Name = "GetVilla")] // can specify the return type
                                                 // "Name" param is used to generate a link
        [ProducesResponseType(StatusCodes.Status200OK)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<VillaDTO> GetVilla(int id)
        {

            if (id == 0)
            {
                return BadRequest(); // creates status code 400 "Bad Request"
            }

            var villa = VillaStore.villaList.FirstOrDefault(v => v.Id == id);

            if (villa is null)
            {
                return NotFound(); //  creates status code 404 "Not Found"
            }

            return Ok(villa);
        }

        [HttpPost]

        [ProducesResponseType(StatusCodes.Status201Created)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]
        public ActionResult<VillaDTO> CreateVilla([FromBody] VillaDTO villaDTO)
        {

            //if (!ModelState.IsValid)
            //{
            //    return BadRequest(ModelState);
            //}

            if (VillaStore.villaList.FirstOrDefault(v => v.Name.ToLower() == villaDTO.Name.ToLower()) != null)
            {
                ModelState.AddModelError("CustomError", "Villa already Exists!");
                return BadRequest(ModelState);
            }

            if (villaDTO is null)
            {
                return BadRequest(villaDTO);
            }

            if (villaDTO.Id is not 0)
            {
                return StatusCode(StatusCodes.Status500InternalServerError);
            }

            villaDTO.Id = VillaStore.villaList
                .OrderByDescending(v => v.Id)
                .FirstOrDefault()
                .Id + 1;

            VillaStore.villaList.Add(villaDTO);

            return CreatedAtRoute("GetVilla", new { id = villaDTO.Id }, villaDTO); // invoke method that returns the route link for post just made
        }

        [HttpDelete("{id:int}", Name = "DeleteVilla")]

        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        [ProducesResponseType(StatusCodes.Status404NotFound)]


        public IActionResult DeleteVilla(int id)
        {
            if (id == 0)
            {
                return BadRequest();
            }
            var villa = VillaStore.villaList.FirstOrDefault(v => v.Id == id);

            if (villa is null)
            {
                return NotFound();
            }
            VillaStore.villaList.Remove(villa);

            return NoContent();
        }

        [HttpPut("{id:int}", Name = "UpdateVilla")]

        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]

        public IActionResult UpdateVilla(int id, [FromBody] VillaDTO villaDTO)
        {
            if (villaDTO is null || id != villaDTO.Id)
            {
                return BadRequest();
            }

            var villa = VillaStore.villaList.FirstOrDefault(v => v.Id == id);

            villa.Name = villaDTO.Name;
            villa.Sqft = villaDTO.Sqft;
            villa.Occupancy = villaDTO.Occupancy;

            return NoContent();
        }

        [HttpPatch("{id:int}", Name = "UpdatePartialVilla")]
        [ProducesResponseType(StatusCodes.Status204NoContent)]
        [ProducesResponseType(StatusCodes.Status400BadRequest)]
        public IActionResult UpdatePartialVilla(int id, JsonPatchDocument<VillaDTO> patchDTO)
        {
            if (patchDTO is null || id == 0)
            {
                return BadRequest();
            }
            var villa = VillaStore.villaList.FirstOrDefault(u => u.Id == id);
            if (villa is null)
            {
                return BadRequest();
            }
            patchDTO.ApplyTo(villa, ModelState);
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }
            return NoContent();
        }
    }
}




