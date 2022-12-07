using Core.Utils;
using Dapper;
using Models.Movimentation;
using System;

namespace Core.DataAccess
{
    public class MovimentationDataAccess
    {
        public MovimentationDataAccess()
        {
        }

        public List<Movimentation> List()
        {
            DynamicParameters parameters = new DynamicParameters();

            return new Database().ExecuteQuery<Movimentation>("ManualMovimentationList", parameters);
        }

        public List<Movimentation> Save(Movimentation movimentation)
        {
            DynamicParameters parameters = new DynamicParameters();
            parameters.Add("Month", movimentation.Month);
            parameters.Add("Year", movimentation.Year);
            parameters.Add("ProductCod", movimentation.ProductCod);
            parameters.Add("CosifCod", movimentation.CosifCod);
            parameters.Add("Value", movimentation.Value);
            parameters.Add("DesDescription", movimentation.ReleaseDescription);
            parameters.Add("MovementDate", DateTime.Now);
            parameters.Add("UserCod", 1);

            new Database().Execute("ManualMovimentationInsert", parameters);
            
            return List();
        }
    }
}
