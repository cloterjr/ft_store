import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable()
export class ConfigService {

  private _api_url = environment.apiUrl + '/api';

  private _auth_url = environment.apiHybris + '/api/oauth';

  private _api_hybris = environment.apiHybris + '/rest/v2/electronics/products';

  private _refresh_token_url = this._auth_url + '/refresh';

  private _login_url = this._auth_url + '/token';

  private _logout_url = this._api_url + '/logout';

  private _change_password_url = this._auth_url + '/changePassword';

  private _whoami_url = this._api_url + '/whoami';

  private _user_url = this._api_url + '/user';

  private _users_url = this._user_url + '/all';

  private _reset_credentials_url = this._user_url + '/reset-credentials';

  private _foo_url = this._api_url + '/foo';
  
  private _signup_url = this._api_url + '/signup';

  get reset_credentials_url(): string {
      return this._reset_credentials_url;
  }

  get refresh_token_url(): string {
      return this._refresh_token_url;
  }

  get whoami_url(): string {
      return this._whoami_url;
  }

  get users_url(): string {
      return this._users_url;
  }

  get login_url(): string {
      return this._login_url;
  }

  get logout_url(): string {
      return this._logout_url;
  }

  get change_password_url(): string {
      return this._change_password_url;
  }

  get foo_url(): string {
      return this._foo_url;
  }

  get signup_url():string {
      return this._signup_url;
  }

  get api_hybris_url():string{
      return this._api_hybris;
  }

}
