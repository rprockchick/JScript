let restaurant = {
    name: 'Chianti',
    capacity: 75,
    guestcount: 0,
    checkAvailability : function(partySize){
    if(this.capacity - partySize >=0)
    return true
    else
    return `Party cannot be seated`    
    },
    seatParty : function(partySize){
        this.guestcount = this.guestcount +partySize
        this.capacity = this.capacity - partySize
        console.log(`Guest count is ${restaurant.guestcount} and seats remaining are ${restaurant.capacity}`)
    },
    removeParty : function(partySize){
        this.guestcount = this.guestcount - partySize
        this.capacity = this.capacity + partySize
        console.log(`Guest count is ${restaurant.guestcount} and seats remaining are ${restaurant.capacity}`)
    }
}

restaurant.seatParty(20)
console.log(restaurant.checkAvailability(15))
restaurant.seatParty(15)
console.log(restaurant.checkAvailability(23))
restaurant.seatParty(23)
console.log(restaurant.checkAvailability(20))
restaurant.removeParty(20)
console.log(restaurant.checkAvailability(25))
