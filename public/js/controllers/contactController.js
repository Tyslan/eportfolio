angular
.module('PortfolioApp')
.controller('ContactController', ContactController);

function ContactController($http, $mdToast, $animate){
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
        .content('Thanks for your message ' + data.contactName + '.')
        .position(vmContact.getToastPosition())
        .hideDelay(5000)
      );
    })
    .error(function(data, status, headers, config) {
      $mdToast.show(
        $mdToast.simple()
        .content('Sorry ' + vmContact.contactName + ', something went wrong!')
        .position(vmContact.getToastPosition())
        .hideDelay(5000)
      );
    });
  };
}
