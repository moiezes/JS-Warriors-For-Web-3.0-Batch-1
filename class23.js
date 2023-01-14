
//Object Constructor
function Plan(pkgName,planPrice,planLimit,plandiscAreas,planDisc)
{
    this.pkgName = pkgName
    this.price = planPrice
    this.downloadLimit = planLimit
    this.pkgCity = `Karachi`
    this.dicountedAreas = plandiscAreas
    this.discount = planDisc
    this.afterDisc = function() {
        return this.price - (this.price * this.discount) //Just for example
    }
}

var plan2 = new Plan(`Silver`,2500,`100 GB`,[`DHA`,`PECHS`],0.10)
var plan3 = new Plan(`Gold`, 3500, `150 GB`,[`DHA`,`PECHS`,`Saddar`,`Garden`,`Numaish`], 0.3)
var plan4 = new Plan(`Platinum`,5500,`250 GB`,[`DHA`,`PECHS`,`Saddar`,`Garden`,`Numaish`],0.3)

console.log(plan2.afterDisc())

