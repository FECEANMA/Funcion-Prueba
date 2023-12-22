'use strict'
function Student(nombre,correo,promedio) {
    this.nombre = nombre;
    this.correo = correo;
    this.promedio = promedio;
    this.validarPromedio = function () {
        if (this.promedio >= 70) {
            return 'Aprobado';
        } else {
            return 'Reporbado';
        }
    };
    this.getUser = function () {
        let email = this.correo;
        let pos = email.indexOf('@');
        let user = email.substring(0,pos);
        return user;
    };
}
let fernando = new Student('Fernando', 'fernandoencalada@gmail.com', 70);
alert(fernando.validarPromedio());
alert(fernando.getUser());