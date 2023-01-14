// // Object Contructor
// function Plan(pkgName,planPrice,planLimit,plandiscAreas,planDisc)
// {
//     this.pkgName = pkgName;
//     this.price = planPrice;
//     this.downloadLimit = planLimit;
//     this.pkgCity = `Karachi`;
//     this.dicountedAreas = plandiscAreas;
//     this.discount = planDisc;
//     this.afterDisc = function() {
//         return this.price - (this.price * this.discount) //Just for example
//     }
// }
// var plan1 = {
//     pkgName: `Silver`,
//     price: 1000,
//     downloadLimit: `100 GB`,
//     pkgCity: `Islamabad`,
//     dicountedAreas: [`D-Chowk`],
//     discount: 0.2
// }
// var plan2 = {
//     pkgName: `Gold`,
//     price: 1000,
//     downloadLimit: `100 GB`,
//     pkgCity: `Islamabad`,
//     dicountedAreas: [`D-Chowk`],
//     discount: 0.2
// }

// // var plan1 = new Plan(`Platimun`,10000,`Unlimited`,[`D-Chowk`],0.2)
// // console.log(plan1)

// console.log(myObj2.pkgName)

for(var i=1; i<=4; i++) //i=1
{
    for(var j=1; j<=4; j++) //j=2
    {
        if(i>j) // 2<1 false
        {
            document.write(" ")
        }
        else
        {
            document.write(" #")
        }
    }
    document.write(`<br>`)
}
//   #
//##
//###
//####

