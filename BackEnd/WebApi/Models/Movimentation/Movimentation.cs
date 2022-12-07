namespace Models.Movimentation
{
    public class Movimentation
    {
        public int Month { get; set; }
        public int Year { get; set; }
        public string? ProductCod { get; set; }
        public string? CosifCod { get; set; }
        public string? ProductDescription { get; set; }
        public int? ReleaseNumber { get; set; }
        public string? ReleaseDescription { get; set; }
        public decimal Value { get; set; }
    }
}
