export class ApiData {
    static readonly allRoles = 'Roles';
    static readonly registration = 'signup';
    static readonly login = 'Login';
    static readonly adminDashboard = 'adminDashboard';
    static readonly allUsers = 'GetAllUsers';
    static readonly allBikeOwners = 'GetAllBikeOwners';
    static readonly bikeOwnerDashoard = 'bikeOwnerDashboard';
    static readonly userDashboard = 'userDashboard';
    static readonly pastRides = 'userPreviousRides';
    static readonly currentBookings = 'userCurrentBooking';
    static readonly changePassword = 'ChangePassword';
    static readonly updateStatus = 'updateUserStatus';
    static readonly userInfo = 'UserInfo';
    static readonly ownersBikesList = 'allBikesByOwnerId';
    static readonly addBikes = 'addBike';
    static readonly ownerBookings = 'RequestedRidesByOwnerId';
    static readonly searchUserBikes = 'Allbikes';
    static readonly bikeDetails = 'bikeDetails';


    static readonly firebaseLoginAPI = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCdctFxPpleBmE2I4jNGt4pe-slEIk62Nc';
}