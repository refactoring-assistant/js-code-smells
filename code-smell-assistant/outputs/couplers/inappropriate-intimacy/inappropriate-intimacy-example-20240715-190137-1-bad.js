// AI-generated code smell for Inappropriate-Intimacy
class UserConfig {
    constructor() {
        this.config = {
            'username': 'admin',
            'password': '123456',
            'email': 'admin@example.com',
            'showNotification': true,
        };
    }

    getConfig() {
        return this.config;
    }
}

class User {
    updateConfig(config, newUsername, newPassword, newEmail, newShowNotification) {
        config.username = newUsername;
        config.password = newPassword;
        config.email = newEmail;
        config.showNotification = newShowNotification;
    }
}

const userConfig = new UserConfig();
const user = new User();
user.updateConfig(userConfig.getConfig(), 'newAdmin','newPassword','newAdmin@example.com',false);