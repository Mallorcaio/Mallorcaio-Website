Meteor.methods({
        insertSubscriber: function(email){
                var reg = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
                if(reg.test(email)){
                  if(Subscribers.findOne({email:email})){
                    throw new Meteor.Error(422, 'Estas ya apuntado')
                  } else {
                        var date = new Date().getTime(); // in epoch milliseconds
                        return Subscribers.insert({email: email, joined: date});
                      }
                }else{
                        throw new Meteor.Error(422, 'Lo sentimos, tu email no es valido.')
                }

        }
})