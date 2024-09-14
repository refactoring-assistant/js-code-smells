// User hierarchy
class BaseUser {
  login() {}
}

class AdminUser extends BaseUser {
  login() {
    console.log('Admin user logging in');
  }
}

class GuestUser extends BaseUser {
  login() {
    console.log('Guest user logging in');
  }
}

class MemberUser extends BaseUser {
  login() {
    console.log('Member user logging in');
  }
}

class BaseAuthentication {
  authenticate() {}
}

class PasswordAuthentication extends BaseAuthentication {
  authenticate() {
    console.log('Authenticating with password');
  }
}

class TokenAuthentication extends BaseAuthentication {
  authenticate() {
    console.log('Authenticating with token');
  }
}

class FingerprintAuthentication extends BaseAuthentication {
  authenticate() {
    console.log('Authenticating with fingerprint');
  }
}

class AdminPasswordLogin extends AdminUser {
  constructor() {
    super();
    this.authMethod = new PasswordAuthentication();
  }

  login() {
    super.login();
    this.authMethod.authenticate();
  }
}

class AdminTokenLogin extends AdminUser {
  constructor() {
    super();
    this.authMethod = new TokenAuthentication();
  }

  login() {
    super.login();
    this.authMethod.authenticate();
  }
}

class GuestPasswordLogin extends GuestUser {
  constructor() {
    super();
    this.authMethod = new PasswordAuthentication();
  }

  login() {
    super.login();
    this.authMethod.authenticate();
  }
}

class GuestTokenLogin extends GuestUser {
  constructor() {
    super();
    this.authMethod = new TokenAuthentication();
  }

  login() {
    super.login();
    this.authMethod.authenticate();
  }
}

class MemberFingerprintLogin extends MemberUser {
  constructor() {
    super();
    this.authMethod = new FingerprintAuthentication();
  }

  login() {
    super.login();
    this.authMethod.authenticate();
  }
}

class MemberPasswordLogin extends MemberUser {
  constructor() {
    super();
    this.authMethod = new PasswordAuthentication();
  }

  login() {
    super.login();
    this.authMethod.authenticate();
  }
}

const adminWithPassword = new AdminPasswordLogin();
adminWithPassword.login();

const guestWithToken = new GuestTokenLogin();
guestWithToken.login();

const memberWithFingerprint = new MemberFingerprintLogin();
memberWithFingerprint.login();
