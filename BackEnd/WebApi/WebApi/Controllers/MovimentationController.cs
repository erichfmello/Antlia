using Core.Business;
using Microsoft.AspNetCore.Mvc;
using System.Reflection;
using WebApi.ViewModel.Movimentation;

namespace WebApi.Controllers
{
    [ApiController]
    [Route("v1/Movimentation")]
    public class MovimentationController : ControllerBase
    {
        [Route("List"), HttpPost]
        public ActionResult<MovimentationListResponse> List(MovimentationListRequest request)
        {
            MovimentationListResponse response = new MovimentationListResponse();

            try
            {
                if (request == null)
                    throw new Exception("Request não pode ser nulo.");

                response.Items = new MovimentationBusiness().List();
                response.Succsess = true;
                response.Message = "Consulta da lista de movimentações realizada com sucesso.";

                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
                response.ErroMessage = $"ERROR: Erro ao consultar lista de movimentos -- {MethodInfo.GetCurrentMethod()} -- {ex.Message}";

                return BadRequest(response);
            }
        }

        [Route("Save"), HttpPost]
        public ActionResult<MovimentationSaveResponse> Save(MovimentationSaveRequest request)
        {
            MovimentationSaveResponse response = new MovimentationSaveResponse();

            try
            {
                if (request == null)
                    throw new Exception("Request não pode ser nulo.");

                response.Items = new MovimentationBusiness().Save(request.Item);
                response.Message = "Movimentação salva com sucesso.";
                response.Succsess = true;

                return Ok(response);
            }
            catch (Exception ex)
            {
                response.Message = ex.Message;
                response.ErroMessage = $"ERROR: Erro ao salvar movimentação -- {MethodInfo.GetCurrentMethod()} -- {ex.Message}";

                return BadRequest(response);
            }
        }
    }
}
