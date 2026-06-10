interface User {
    id: number;
    name: string;
}


class SubscriptionBloc {

    onAddSubscription(subscriptionId: number) {
        // Simula la gestión de suscripciones
        console.log('Agregando suscripción:', subscriptionId);
    }
}

class UserService {

    loadUser(id: number) {
        // Simula la carga de un usuario
        console.log('Cargando usuario con id:', id);
    }
    saveUser(user: User) {
        // Simula el guardado en base de datos
        console.log('Guardando en base de datos:', user);
    }
}

class Mailer {
    sendEmail(user: User, message: string) {
        // Simula el envío de un correo electrónico
        console.log(`Enviando correo a ${user.name} con el mensaje: ${message}`);
    }
}
class UserBloc {
}


const userBloc = new UserBloc();
const subscriptionBloc = new SubscriptionBloc();
const userService = new UserService();
const mailer = new Mailer();

userService.loadUser(10);
userService.saveUser({ id: 10, name: 'Fernando' });
mailer.sendEmail({ id: 10, name: 'Fernando' }, 'Bienvenido a nuestro servicio!');
subscriptionBloc.onAddSubscription(1234);
