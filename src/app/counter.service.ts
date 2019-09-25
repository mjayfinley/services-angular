export class CounterService {
    activeToInactive = 0
    inactiveToActive = 0

    countActiveToInactive() {
        this.activeToInactive += 1
    }

    countInactiveToActive() {
        this.inactiveToActive += 1
    }
}