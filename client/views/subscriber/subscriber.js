isValidEmailAddress = function ( emailAddress ) {
        // http://stackoverflow.com/a/46181/11236
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test( emailAddress );
};

mailChimpListSubscribe = function( email, list_id){
        var mailChimp = new MailChimp();
        mailChimp.call('lists', 'subscribe',
                {
                  id : list_id,
                  email : {
                        email: email
                  }
                },
                function(err, res){
                        if(err){
                                Session.set('subscribeStatus', {
                                        message: err.reason,
                                        class: 'red'
                                })
                                console.log(err)
                        }else{
                                console.log('successfully added subscriber to MailChimp: '+ email);

                        }
                }
        );
};



Template.subscriberClassic.events({
        'submit form': function (e) {
                e.preventDefault();
                console.log('clicked');
                var target = e.target;
                var email = $(target).find('input').val(); // fetch the input value

                if (isValidEmailAddress(email)){
                        mailChimpListSubscribe(email);
                        $(target).find('input').val("");
                        Session.set('subscribeStatus', {
                                message: 'Check your inbox :). Te hemos enviado un mail de confirmación',
                                class: 'green'
                        })
                } else {
                         Session.set('subscribeStatus', {
                                message: 'Lo sentimos, el formato de e-mail no es válido',
                                class: 'red'
                        });
                }
        }
});


Template.subscriberClassic.helpers({
        status: function () {
                // ...
                return Session.get('subscribeStatus');
        },
        message: function(){
                return Session.get('subscribeStatus').message;
        },
        class: function(){
                return Session.get('subscribeStatus').class;
        }
});