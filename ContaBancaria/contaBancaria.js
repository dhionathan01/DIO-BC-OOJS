class ContaBancaria{
    constructor(agencia = null, numero = null, tipo = null, saldo = null) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = saldo;
    }

    getAgencia() {
        return this.agencia;
    };
    setAgencia(valor) {
        this.numero = valor;
    };

    getNumero() {
        return this.numero;
    };
    setNumero(valor) {
        this.tipo = valor;
    };

    getTipo() {
        return this.tipo;
    };
    setTipo(valor) {
        this.tipo = valor;
    };

    getSaldo() {
        return this.saldo;
    };
    setSaldo(valor) {
        this.saldo = valor;
    };
    
    depositar(valorDinheiro) {
        try {
            if (!valorDinheiro && tipeof(valorDinheiro) != Number) {
                throw TypeError;
            }
        } catch(erro) {
            console.log(erro.message);
        }
        this.saldo += valorDinheiro;
    }

    sacar(valorDinheiro) {
        try {
            if (!valorDinheiro && tipeof(valorDinheiro) != Number) {
                throw TypeError;
            }
            if (this.saldo < valorDinheiro) {
                return console.log("Saldo insuficiente");
            }
        } catch(erro) {
            console.log(erro.message);
        }
        this.saldo -= valorDinheiro;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia = null, numero = null, saldo = null, cartaoCredito = null) {
        super(agencia, numero, saldo);
        this.cartaoCredito = cartaoCredito;
        this.tipo = 'corrente';
    };

    getCartaoCredito() {
        return this.cartaoCredito;
    }

    setCartaoCredito(cartaoCredito) {
        this.cartaoCredito = cartaoCredito;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia = null, numero = null, saldo = null) {
        super(agencia, numero, saldo);
        this.tipo = 'poupança';
    };
   

    sacar(valorDinheiro) {
        try {
            if (!valor && tipeof(valorDinheiro) != Number) {
                throw TypeError;
            }
            if (this.saldo < valorDinheiro) {
                return console.log("Saldo insuficiente");
            }

            if(valorDinheiro > 500) {
                return console.log("Não é possível sacar valores acima de 500");
            }
        } catch(erro) {
            console.log(erro.message);
        }
        this.saldo -= valorDinheiro;
    }

}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia = null, numero = null, saldo = null) {
        super(agencia, numero, saldo);
        this.tipo = 'universitaria';
    };
   
    sacar(valorDinheiro) {
        try {
            if (!valorDinheiro && tipeof(valorDinheiro) != Number) {
                throw TypeError;
            }
            if (this.saldo < valorDinheiro) {
                return console.log("Saldo insuficiente");
            }

            if(valorDinheiro > 500) {
                return console.log("Não é possível sacar valores acima de 500");
            }
        } catch(erro) {
            console.log(erro.message);
        }
        this.saldo -= valorDinheiro;
    }
}