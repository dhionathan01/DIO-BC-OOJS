class ContaBancaria{
    constructor() {
        this.agencia = null;
        this.numero = null;
        this.tipo = null;
        this.saldo = null;
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
        return this.numero;
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
    constructor() {
        super();
        this.cartaoCredito = null;
        this.tipo = 'conta corrente';
    };

    getCartaoCredito() {
        return this.cartaoCredito;
    }

    setCartaoCredito(cartaoCredito) {
        this.cartaoCredito = cartaoCredito;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor() {
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

let contaBancaria = new ContaBancaria();

contaBancaria.setSaldo(1200);
console.log(contaBancaria.getSaldo());
contaBancaria.sacar(300);
console.log(contaBancaria.getSaldo());

let contaUniv = new ContaUniversitaria();

contaUniv.depositar(4500);
console.log(contaUniv.getSaldo());
contaUniv.sacar(800);
console.log(contaUniv.getSaldo());
contaUniv.sacar(300);
console.log(contaUniv.getSaldo());