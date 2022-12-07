using Core.Business;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;
using WebApi.ViewModel.Fields;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("v1/Fields")]
    public class FieldsController : ControllerBase
    {
        [Route("List"), HttpPost]
        public ActionResult<FieldsListResponse> List(FieldsListRequest request)
        {
            FieldsListResponse response = new FieldsListResponse();

            try
            {
                if (request == null)
                    throw new Exception("Request não pode ser nulo.");

                response.Item = new FieldsBusiness().List();
                response.Succsess = true;
                response.Message = "Consulta da lista dos campos realizada com sucesso.";

                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
                response.ErroMessage = $"ERROR: Erro ao consultar lista dos campos -- {MethodInfo.GetCurrentMethod()} -- {ex.Message}";

                return BadRequest(response);
            }
        }
    }
}
