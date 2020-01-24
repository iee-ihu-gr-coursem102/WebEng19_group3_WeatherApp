export class User {
  constructor(
    private token: string,
    private tokenExpirationDate: Date,
    private user: any
  ) {}
}
