import { Replace } from 'src/helpers/replace';
import { Content } from './content';
import { randomUUID } from 'node:crypto';
export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  /* quando usamos undefined, é como se além de vazia, a informação não será mencionada, 
  diferente do null que indica que a informação tem um valor vazio mas é mencionada */
  readAt?: Date | null;
  canceledAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(
    props: Replace<NotificationProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  //id
  public get id() {
    return this._id;
  }

  //RecipientId
  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  //Content
  public get content() {
    return this.props.content;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  //Category
  public get category(): string {
    return this.props.category;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  //ReadAt
  public get readAt(): Date | null | undefined {
    return this.props.readAt;
  }

  public read() {
    this.props.readAt = new Date();
  }

  public unread() {
    this.props.readAt = null;
  }
  //canceledAt
  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }

  public cancel() {
    this.props.canceledAt = new Date();
  }

  //createdAt
  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
