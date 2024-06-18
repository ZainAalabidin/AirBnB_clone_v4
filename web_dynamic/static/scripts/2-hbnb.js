/* global $ */

$(document).ready(function () {
  const selectedAmenities = {};

  $('input[type="checkbox"]').change(function () {
    if (this.checked) {
      selectedAmenities[$(this).data('id')] = $(this).data('name');
    } else {
      delete selectedAmenities[$(this).data('id')];
    }
    updateAmenities();
  });

  function updateAmenities () {
    let amenitiesList = Object.values(selectedAmenities).join('', '');
    if (amenitiesList === '') {
      amenitiesList = '&nbsp;';
    }
    $('div.amenities h4').html(amenitiesList);
  }

  function checkApiStatus () {
    $.get('http://example.com/api/status/', function (data) {
      if (data.status === 'OK') {
        $('#api_status').addClass('available');
      } else {
        $('#api_status').removeClass('available');
      }
    });
  }

  checkApiStatus();
});
