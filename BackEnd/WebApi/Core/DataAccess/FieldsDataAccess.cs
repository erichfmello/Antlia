using Core.Utils;
using Dapper;
using Models.Fields;

namespace Core.DataAccess
{
    public class FieldsDataAccess
    {
        public FieldsDataAccess()
        {
        }

        public Fields List()
        {
            DynamicParameters parameters = new DynamicParameters();

            var multi = new Database().ExecuteMulti<Product, ProductCosif>("FieldsList", parameters);
            return new Fields()
            {
                Products = multi.Result1,
                ProductCosifs = multi.Result2,
            };
        }
    }
}
