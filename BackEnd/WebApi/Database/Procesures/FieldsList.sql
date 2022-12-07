IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND OBJECT_ID = OBJECT_ID('FieldsList'))
   DROP PROCEDURE FieldsList
GO

CREATE PROC FieldsList (
	@UserCod VARCHAR(15) = NULL
) AS
BEGIN
	SELECT
		COD_PRODUTO		[ProductCod]
		,DES_PRODUTO	[ProductDescription]
	FROM PRODUTO

	SELECT 
		COD_PRODUTO		[ProductCod]
		,COD_COSIF		[CosifCod]
	FROM PRODUTO_COSIF
END
GO

EXEC FieldsList