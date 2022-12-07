using Core.DataAccess;
using Models.Movimentation;

namespace Core.Business
{
    public class MovimentationBusiness
    {
        public MovimentationBusiness()
        {
        }

        public List<Movimentation> List()
        {
            return new MovimentationDataAccess().List();
        }

        public List<Movimentation> Save(Movimentation movimentation)
        {
            return new MovimentationDataAccess().Save(movimentation);
        }
    }
}
