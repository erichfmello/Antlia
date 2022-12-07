namespace WebApi.ViewModel
{
    public class BaseRequest
    {
    }

    public class BaseSaveRequest<T> : BaseRequest
    {
        public T? Item { get; set; }
    }

    public class BaseResponse
    {
        public string? Message { get; set; }
        public string? ErroMessage { get; set; }
        public bool Succsess { get; set; }
    }

    public class BaseItemResponse<T> : BaseResponse
    {
        public T? Item { get; set; }
    }

    public class BaseListResponse<T> : BaseResponse
    {
        public List<T>? Items { get; set; }
    }
}
