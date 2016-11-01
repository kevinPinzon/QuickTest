import './navBar.html';

Template.navBar.onRendered(function(){
	$(window).scroll(function() {
		if ($(window).scrollTop() > $(".logoNav").height()) {
			$('#navI').addClass("navbar-fixed");
			$('#navI').addClass("positionNavbar");
			$('#logoNav').show("normal");
		} else{
			$('#navI').removeClass("navbar-fixed");
			$('#navI').removeClass("positionNavbar");
			$('#logoNav').hide("normal");
		}
	});
});

Template.navBar.events({
    // 'click .dropdown'(event){
    // 	$(".dropdown dd ul").toggle();
    // },
    // 'click #closeSesion'(event){
    //     Meteor.logout();
    // 	Router.go('/signIn');
    // },
		// 'click #perfilRegular'(event){
    // 	Router.go('/perfil');
    // },
    // 'click #administrar'(event){
    // 	Router.go('/createAdmin');
    // }
});
