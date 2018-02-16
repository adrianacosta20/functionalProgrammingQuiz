const workers = [
    { name: 'Adrian Acosta', hourlyRate: 10.50, hoursWorked: 50 },
    { name: 'Ines Hernandez', hourlyRate: 10.50, hoursWorked: 70 },
    { name: 'Gabriel Luciano', hourlyRate: 10.50, hoursWorked: 100 },

]

class Payroll {
    constructor(workers) {
        this.workers = workers
        this.orderName = this.getNames(this.workers)
        this.fullTime = this.getFullTime(this.workers)
        this.average = this.getTotalLabor(this.workers)

    }
    getNames(workers) {
        return workers.map(n => {
            return n.name
            
        }
    )
    return orderName.sort()
        


    }

    getFullTime(workers) {
        return workers.filter(n => {
            return (n.hoursWorked > 60) ? 1 : 0
        })
    }
    getTotalLabor(workers) {
        return workers.reduce((acc, curr) => {
            return 
        })
    }
}
payroll = new Payroll(workers)
console.log(payroll.orderName)