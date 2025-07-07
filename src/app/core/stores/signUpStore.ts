import { defineStore } from 'pinia';

export interface User { email: string }

export const useSignUpStore = defineStore('signUp', {
    state: () => ({
        isSignedUp: false,
        user: null as User | null,
        receiveUpdates: false,
        error: null as string | null,
    }),
    actions: {
        signUp(user: User, receive: boolean) {
            const storage = useStorage();
            const registered = storage.getItem<User[]>('registeredUsers', []);

            if (registered.some(u => u.email === user.email)) {
                this.error = 'Email already registered';
                return false;
            }

            registered.push(user);
            storage.setItem('registeredUsers', registered);

            this.user = user;
            this.receiveUpdates = receive;
            this.isSignedUp = true;
            this.error = null;
            return true;
        },
    },
});
