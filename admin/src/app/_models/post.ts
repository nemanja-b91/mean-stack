export class NewPost {
  constructor(
    public image: string,
    public title: string,
    public url: string,
    public content: string,
    public excerpt: string,
    public views: number,
    public createdBy: string,
  ) {
  }
}
