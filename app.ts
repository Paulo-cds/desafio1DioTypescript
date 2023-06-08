import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { PrimeAccount } from './class/PrimeAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(10)
peopleAccount.withdraw(6)
console.log(peopleAccount)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(20)
companyAccount.withdraw(12)
companyAccount.getLoan(50)
console.log(companyAccount)
const primeAccount: PrimeAccount = new PrimeAccount(1, 'Prime', 30)
primeAccount.depositPrime(100)
console.log(primeAccount)