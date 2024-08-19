class superUserFeatures {
    enableSuperUserMode(user){}
    disableSuperUserMode(user){}
    canPerformSuperUserTask(user){}
}

class User {
    constructor() {
        this.superUserFeatures = new superUserFeatures();
    }

    performTask() {
        if (this.superUserFeatures.canPerformSuperUserTask(this)) {
          // perform task
        }
    }
}