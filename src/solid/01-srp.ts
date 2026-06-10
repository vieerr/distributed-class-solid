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
        return user.id;
    }
}

class Mailer {
    sendEmail(user: User, message: string) {
        // Simula el envío de un correo electrónico
        console.log(`Enviando correo a ${user.name} con el mensaje: ${message}`);
    }
}
// Paso 4: UserBloc aún necesita coordinar el proceso. Refactorizar el constructor de UserBloc para aplicar inyección de dependencias, recibiendo UserService y Mailer como parámetros, permitiendo llamar a estos servicios dentro de los métodos originales de UserBloc (ej. this.userService.getUser(id).

class UserBloc {
    constructor(private userService: UserService, private mailer: Mailer) { }

    loadUser(id: number) {
        this.userService.loadUser(id);
    }

    saveUser(user: User) {
        return this.userService.saveUser(user);
         
    }

    sendWelcomeEmail(user: User) {
        this.mailer.sendEmail(user, 'Bienvenido a nuestro servicio!');
    }
}

const subscriptionBloc = new SubscriptionBloc();

const userBloc = new UserBloc(new UserService(), new Mailer());

const userId = userBloc.saveUser({ id: 10, name: 'Fernando' });
userBloc.loadUser(userId);
subscriptionBloc.onAddSubscription(userId);
userBloc.sendWelcomeEmail({ id: userId, name: 'Fernando' });
