import './SignIn.html';

Template.signIn.events({
    'click #loginButton'(event){
        Meteor.loginWithPassword($('#email').val(), $('#password').val(), function(error){
            if(error){
                swal("Error", "Usuario o contraseña incorrecta.", "error");
            }else{
                Router.go('/');
            }
        })
    }
})
