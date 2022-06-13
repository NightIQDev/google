let apiKey = 'd9e53816d07345139c58d0ea733e3870';

$.getJSON('https://ipapi.co/json/' , function(data)  {

  let fill = JSON.stringify(data, null, 2)

  console.log(data)

  $('.pais').text(`${data.country_name}`)

  $('.city').text(`${data.city}`)

});