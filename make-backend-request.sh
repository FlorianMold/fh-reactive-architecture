curl --request POST \
  --url http://localhost:3333/api/transaction \
  --header 'Content-Type: application/json' \
  --data '{
	"from": {
		"name": "Florian M",
		"iban": "AT1234"
	},
	"to": {
		"name": "Daniel K",
		"iban": "AT4321"
	},
	"amount":101,
	"paymentReference":"Miete",
	"executionDate":"2022-03-26"
}'