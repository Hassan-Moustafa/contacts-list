export class ContactModel {
  constructor(
    public userId?: string,
    public firstName?: string,
    public lastName?: string,
    public userName?: string,
    public mobileNumber?: string,
    public email?: string,
    public image?: string,
    public contactDisplayName?: string,
    public contactDetail?: string) {}
}
