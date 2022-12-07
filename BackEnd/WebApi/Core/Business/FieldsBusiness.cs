using Core.DataAccess;
using Models.Fields;

namespace Core.Business
{
    public class FieldsBusiness
    {
        public FieldsBusiness()
        {
        }

        public Fields List()
        {
            return new FieldsDataAccess().List();
        }
    }
}
