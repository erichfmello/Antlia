using Dapper;
using Models.Multi;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Diagnostics;

namespace Core.Utils
{
    public class Database
    {
        private readonly string connectionString = "Server=localhost\\SQLEXPRESS;Database=antliaTeste;Trusted_Connection=True;";

        public List<T> ExecuteQuery<T>(string procedure, DynamicParameters parameters)
        {
            var stopWatch = Stopwatch.StartNew();
            int commandTimeoutSeconds = 180;

            try
            {
                var command = new Dapper.CommandDefinition(procedure, parameters, commandTimeout: commandTimeoutSeconds, commandType: CommandType.StoredProcedure);
                var ret = Dapper.SqlMapper.Query<T>(new SqlConnection(connectionString), command).ToList();

                stopWatch.Stop();

                return ret;
            }
            catch (Exception ex)
            {
                stopWatch.Stop();
                throw new Exception(ex.Message);
            }
        }

        public Models.Multi.Multi<T1, T2> ExecuteMulti<T1, T2>(string procedure, DynamicParameters parameters)
        {
            var stopWatch = Stopwatch.StartNew();
            int commandTimeoutSeconds = 180;

            try
            {
                var command = new Dapper.CommandDefinition(procedure, parameters, commandTimeout: commandTimeoutSeconds, commandType: CommandType.StoredProcedure);
                var ret = Dapper.SqlMapper.QueryMultiple(new SqlConnection(connectionString), command);

                stopWatch.Stop();

                return new Multi<T1, T2>()
                {
                    Result1 = (List<T1>)ret.Read<T1>(),
                    Result2 = (List<T2>)ret.Read<T2>(),
                };
            }
            catch (Exception ex)
            {
                stopWatch.Stop();
                throw new Exception(ex.Message);
            }
        }

        public void Execute(string procedure, DynamicParameters parameters)
        {
            var stopWatch = Stopwatch.StartNew();
            int commandTimeoutSeconds = 180;

            try
            {
                var command = new Dapper.CommandDefinition(procedure, parameters, commandTimeout: commandTimeoutSeconds, commandType: CommandType.StoredProcedure);
                var ret = Dapper.SqlMapper.Execute(new SqlConnection(connectionString), command);

                stopWatch.Stop();
            }
            catch (Exception ex)
            {
                stopWatch.Stop();
                throw new Exception(ex.Message);
            }
        }
    }
}
