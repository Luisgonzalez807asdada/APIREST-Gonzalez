import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
        private isLoggedIn: boolean = false;

    login(email: string, password: string): boolean {
        if (email === 'user@example.com' && password === 'password') {
            this.isLoggedIn = true;
            return true;
        } else {
            this.isLoggedIn = false;
            return false;
        }
    }

    logout(): void {
        this.isLoggedIn = false;
    }

    isAuthenticated(): boolean {
        return this.isLoggedIn;
    }
}
