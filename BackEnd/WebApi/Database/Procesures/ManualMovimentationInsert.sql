IF EXISTS (SELECT * FROM sys.objects WHERE type = 'P' AND OBJECT_ID = OBJECT_ID('ManualMovimentationInsert'))
   DROP PROCEDURE ManualMovimentationInsert
GO

CREATE PROC ManualMovimentationInsert (
	@Month INT
	,@Year INT 
	,@ProductCod CHAR(4)
	,@CosifCod VARCHAR(11)
	,@Value DECIMAL(18,2)
	,@DesDescription VARCHAR(50)
	,@MovementDate SMALLDATETIME
	,@UserCod VARCHAR(15)
) AS
BEGIN
	DECLARE @ReleaseNumber INT = (SELECT 
									COUNT(*) 
								FROM MOVIMENTO_MANUAL
								) + 1

	INSERT INTO MOVIMENTO_MANUAL (
		DTA_MES
		,DTA_ANO
		,NUM_LANCAMENTO
		,COD_PRODUTO
		,COD_COSIF
		,VAL_VALOR
		,DES_DESCRICAO
		,DAT_MOVIMENTO
		,COD_USUARIO
	)
	VALUES (
		@Month
		,@Year
		,@ReleaseNumber
		,@ProductCod
		,@CosifCod
		,@Value
		,@DesDescription
		,@MovementDate
		,@UserCod
	)
END
GO
