<?php

declare(strict_types=1);

use phpDocumentor\Reflection\Types\Boolean;

class AccountBank 
{
    /**
     * CONSTRUCT PROMOTION
     * Mixed types represents that the variable can receive any type of data
     */
    public function __construct(
       private string $bank,
       private string $nameTitle,
       private string $numberAgency,
       private string $numberAccount,
       private int|float $accountBalance,
    ) {
        $this->bank = $bank;
        $this->nameTitle = $nameTitle;
        $this->numberAgency = $numberAgency;
        $this->numberAccount = $numberAccount;
        $this->accountBalance = $accountBalance;
    }

    public function getBalance() : string
    {
        $this->accountBalance;
        return "Seu saldo atual é: R$ " . $this->accountBalance;
    }

    public function deposit(float $value) : string
    {
        $this->accountBalance += $value;
        return "Deposito realizado com sucesso! Seu novo saldo é de: R$ " . $this->accountBalance;
    }

    public function withdrawal(float $value) : string
    {
        $this->accountBalance -= $value;
        return "Saque realizado! Seu novo saldo Seu novo saldo é de: R$" . $this->accountBalance;
    }

}

