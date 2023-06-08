export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }  

  getName = (): string => {
    return this.name
  }

  deposit = (valueDeposit: number): void => {
    if(this.validateStatus()){
      this.balance += valueDeposit
      console.log(`Voce depositou ${valueDeposit}, agora seu saldo é ${this.balance}`)
    }
  }

  depositPrime = (valueDeposit: number): void => {
    if(this.validateStatus()){
      this.balance += (valueDeposit + 10)
      console.log(`Voce depositou ${valueDeposit}, agora seu saldo é ${this.balance}`)
    }
  }

  withdraw = (valueWithdraw: number): void => {
    if(this.validateStatus()){
      this.balance -= valueWithdraw
      console.log(`Voce sacou ${valueWithdraw}, agora seu saldo é ${this.balance}`)
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  verificStatus = (): boolean => {
    return this.validateStatus()
  }

  newLoan = (valueLoan: number): void => {
    this.balance += valueLoan
    console.log(`Voce pegou um empréstimo de ${valueLoan}, seu saldo agora é ${this.balance}`)
  }

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
