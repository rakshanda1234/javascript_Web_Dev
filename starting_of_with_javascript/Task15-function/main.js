//celcius to kelvin
function convertTemp(temperatureValue, k) {
  console.log(temperatureValue + 273 + k);
}
convertTemp(35, "k");

//kelvin to celcius
function convertTemp(temperatureValue, conversionUnit) {
  let rtnvalue =
    conversionUnit == "k"
      ? temperatureValue + "k"
      : temperatureValue - 273 + "c";
  return rtnvalue;
}
console.log(convertTemp(308, "c"));
