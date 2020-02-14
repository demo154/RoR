// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `rails generate channel` command.
//
//= require action_cable
//= require_self
//= require_tree ./channels

(function() {
  this.App || (this.App = {});

  App.cable = ActionCable.createConsumer();

}).call(this);
function myValidate()
        {
            if(document.getElementById("username").value =="admin" && document.getElementById("password").value =="admin")
            {



                alert("Login success");
            }
            else
            {
                alert("Invalid Credentials");
            }

        }
