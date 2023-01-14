//Object with properties and method
var plan1 = {
    pkg: "Basic",
    price: 3.99,
    space: 100,
    transfer: 1000,
    pages: 10,
    discountMonths: [0, 1], //Jan & Feb according to JS
    afterDisc: function(discRate){
        var actualPrice = this.price
        var currDate = new Date()
        var thisMonth = currDate.getMonth() //0
    
        for(var i=0;i < this.discountMonths.length; i++)
        {
            if(this.discountMonths[i]===thisMonth)
            {
                actualPrice -= actualPrice * discRate
                break
            }
        }
        return actualPrice
    }
    };

var actualPriceForPlan1 = plan1.afterDisc(0.1)
console.log(actualPriceForPlan1)