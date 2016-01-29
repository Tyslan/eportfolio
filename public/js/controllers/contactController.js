angular
.module('PortfolioApp')
.controller('ContactController', ContactController);

function ContactController($http, $mdToast, $animate, $translate){
  var vmContact = this;

  vmContact.toastPosition = {
    bottom: false,
    top: true,
    left: false,
    right: true
  };

  vmContact.getToastPosition = function() {
    return Object.keys(vmContact.toastPosition)
    .filter(function(pos) { return vmContact.toastPosition[pos]; })
    .join(' ');
  };

  vmContact.sendMail = function () {

    var data = ({
      contactName : vmContact.contactName,
      contactEmail : vmContact.contactEmail,
      contactMsg : vmContact.contactMsg
    });

    // Simple POST request example (passing data) :
    $http.post('/mail/contact-form', data)
    .success(function(data, status, headers, config) {
      // this callback will be called asynchronously
      // when the response is available
      $mdToast.show(
        $mdToast.simple()
        .content($translate.instant('CONTACT_THANKS') + ' ' + data.contactName + '.')
        .position(vmContact.getToastPosition())
        .hideDelay(5000)
      );
    })
    .error(function(data, status, headers, config) {
      $mdToast.show(
        $mdToast.simple()
        .content($translate.instant('CONTACT_SOMETHING_WRONG', {user: vmContact.contactName}))
        .position(vmContact.getToastPosition())
        .hideDelay(5000)
      );
    });
  };
}
