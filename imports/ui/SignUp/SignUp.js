import './SignUp.html';


Template.signUp.events({
    'click #registerButton'(event){
        let profile = {
            firstName: $('#username').val()
        }
        let user = {
            username: $('#username').val(),
            email: $('#email').val(),
            password: $('#password').val(),
            profile: profile
        }
        Accounts.createUser(user, function(error){
            if(error){
                swal("Error", "Error al crear usuario.", "error");
                console.log(error);
            }else{
                Router.go('/');
            }
        });
    }
});
