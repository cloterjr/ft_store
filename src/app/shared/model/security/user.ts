import { Menu } from "./menu";
import { BaseEntity } from "../base/baseEntity";

export class User extends BaseEntity{
    name: string;
    userName: string;
    email: string;
    document: string;
    password?: string;
    permissions: Menu[];
    authenticated?: boolean;

    constructor(id, name, userName, email, document, password = null, permissions, authenticated = false){
        super();
        this.id = id;
        this.name = name;
        this.userName = userName;
        this.email = email;
        this.document = document;
        this.password = password;
        this.permissions = permissions;
        this.authenticated = authenticated;
    }
}