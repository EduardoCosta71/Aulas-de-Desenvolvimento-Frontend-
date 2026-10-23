    function lerNumero(mensagem, inteiro = false) {
            // Removidas as aspas de "mensagem" para usar a variável dinâmica
            const texto = prompt(mensagem, ""); 

            if (texto === null) {
                throw new Error("Entrada Cancelada. Execute Novamente!");
            }
            
            const normalizado = texto.trim().replace(",", ".");
            const numero = Number(normalizado);

            // Adicionado a exclamação (!) para rejeitar se NÃO for um número finito
            if (normalizado === "" || !Number.isFinite(numero)) {
                throw new Error("Digite um número válido");
            }
            
            if (inteiro && !Number.isInteger(numero)) {
                throw new Error("Digite um número inteiro.");
            }

            return numero; // A função termina exatamente aqui e devolve o número
        }

        // 2. CÓDIGO PRINCIPAL (Execução fora da função lerNumero)
        try {
            const salario = lerNumero("Digite o Salario Atual: ");

            if (salario < 0) {
                throw new Error("Digite um valor Acima de 0.");
            }

            const aumento = salario * 0.25;
            const novoSalario = salario + aumento;

            // Agora os logs vão aparecer perfeitamente no console (F12)
            console.log("Seu aumento foi de: ", aumento);
            console.log("Seu salário atual: ", novoSalario);

        } catch (error) {
            console.error("Ocorreu um erro:", error.message);
            alert(error.message); // Alerta opcional para avisar o usuário do erro
        }