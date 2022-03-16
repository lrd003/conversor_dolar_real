function Converter() {
	var valorElemento = document.getElementById("valor");
	var valor = valorElemento.value;
	var valorEmDolarNumerico = parseFloat(valor);

	var valorEmReal = valorEmDolarNumerico * 5.01;

	var elementoValorConvertido = document.getElementById("valorConvertido");
	var valorConvertido = "O valor em Reais é R$ " + valorEmReal;
	elementoValorConvertido.innerHTML = valorConvertido;
}
