const makes = document.querySelector('#makes');
const models = document.querySelector('#models');

makes.addEventListener('change', (event) => {
  event.preventDefault();
  const populate = (makes, models) => {
    models.innerHTML = " ";

    if (makes.value === "toyota") {
      var optionsValues = [
        "rav4|RAV4",
        "camry|Camry",
        "4runner|4Runner",
        "matrix|Matrix"
      ];
    } else if (makes.value === 'nissan') {
      var optionsValues = [
        "sentra|Sentra",
        "maxima|Maxima",
        "urvan|Urvan",
        "x-trail|X-Trail"
      ];
    } else if (makes.value === "mercedez-benz") {
      var optionsValues = [
        "c-200|C-200",
        "glk|GLK",
        "clk|CLK",
        "s650|S650"
      ];
    } else if (makes.value !== "nissan"|| makes.value !== "toyota" || makes.value !== 'mercedez-benz') {
      var optionsValues = ["''|Please Select"];
    }
      for (let options in optionsValues) {
        const pair = optionsValues[options].split("|");
        const newOption = document.createElement("option");
        newOption.value = pair[0];
        newOption.innerHTML = pair[1];
        models.options.add(newOption);
      }
  };
  populate(makes,models);
});
