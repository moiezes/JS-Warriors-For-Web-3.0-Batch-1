//Exception: try and catch (Introduction)

function greetEveryOne()
{
    try
    {
        consol.log(`Assalamu Alekum Everyone !`);
    }
    catch(err)
    {
        console.log(err,`Oops There is an error. Please come back later. Sorry for incovenience`);
    }
}
greetEveryOne();