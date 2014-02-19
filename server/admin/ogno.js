OgnoAdmin.config({
    auto : true,
    filepicker : 'AZaQRQGWTT7KcbW8zKtBvz',
    prefix: 'admin',

    isAllowed : function () {
        var user = Meteor.user();

        if (user) {
            return 'admin@admin.com' === user.emails[0].address;
        }
    }
});
