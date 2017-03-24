using System.Collections.Generic;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;

namespace LowStockApi.Controllers
{
    public class LocationsController : ApiController
    {
        [HttpGet]
        [ActionName("GetLocations")]
        public async Task<HttpResponseMessage> GetLocations()
        {
            List<Models.Location> locations = new List<Models.Location>();
            locations.Add(new Models.Location()
            {
                LocationId = "1",
                LocationName = "Warehouse 1"
            });
            locations.Add(new Models.Location()
            {
                LocationId = "2",
                LocationName = "US Warehouse 2"
            });
            locations.Add(new Models.Location()
            {
                LocationId = "3",
                LocationName = "East Asia"
            });

            return Request.CreateResponse(HttpStatusCode.OK, locations);
        }
    }
}
