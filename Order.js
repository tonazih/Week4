module.exports = class Order{
    constructor(sNumber, sUrl){
        this.sNumber = sNumber;
        this.sUrl = sUrl;
        this.bDone = false;
    }
    isDone(bDone){
        if(bDone){
            this.bDone = bDone;
        }
        return this.bDone;
    }
}