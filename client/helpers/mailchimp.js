Meteor.startup(function () {
try {
    // You can as well pass different parameters on each call
    var api = new MailChimp( /* apiKey, { version : '2.0' } */ );
} catch ( error ) {
    console.log( error.message );
}

// api.call( 'campaigns', 'list', { list_id : '14b2b77b30', start: 0, limit: 25 }, function ( error, result ) {
//     if ( error )
//         console.log( error.message );
//     else
//         console.log( JSON.stringify( result ) ); // Do something with your data!
// });

// api.call( 'lists', 'members',{id:'14b2b77b30'}, function(err,res){
//   if(err)
//       console.log(err.message);
//   else
//       console.log(JSON.stringify(res));
// });
});