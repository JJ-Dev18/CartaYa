

export const types ={

     //auth
     login : '[Auth] Login' ,
     KeepLogin : '[Auth] Keep',
     loggout : '[Auth] Logout',
     //admin
     loginAdmin:'[Admin] Login',
     logoutAdmin : '[Admin] Logout',
     //admin-users
       UserAdd : '[User] Add',
       UserDelete : '[User] Delete',
       UserEdit : '[User] Edit',
       UserView : '[User] View',
       ErrorUser : '[User] set Error',

       //Ui Users
     viewHome : '[User] home' , 
     viewPerfil : '[User] profile',
     viewNegocios : '[User] business',
     viewMenus: '[User] Cards',
     viewProductos: '[User] Productos',

     //Business
     AddMenu : '[Business] AddMenu',
     AddProducto : '[Business] AddProducto',
     AddCategoria : '[Business] AddCategoria ',
     SelectBusiness : '[Business] Selected' ,
     SelectCategory : '[Business] SelectedCategory',

     //errores
     LogSetError : '[User Auth] Set Error',
     LogRemoveError : '[User Auth] Remove Error',
     LogSetErrorAdmin :'[Admin] Set Error',
   
     //custom
     colores : '[CM] colorP',
     colorS : '[CM] colorS',

}