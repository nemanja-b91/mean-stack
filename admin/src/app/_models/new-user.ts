export class NewUser {
  constructor(
    public name: string,
    public email: string,
    public password: string,
    public role: string,
    public phone: number,
    public city: string,
    public country: string,
  ) {}
}
