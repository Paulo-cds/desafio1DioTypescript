import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (valueLoan: number): void => {
    if(this.verificStatus()){
      this.newLoan(valueLoan)
    } else{
      console.log('Você não pode pegar um empréstimo.')
    }
  }
}
