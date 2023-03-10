import { randomUUID } from 'crypto';

import { Replace } from 'src/helpers/Replace';
import { Content } from './content';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readtAt?: Date | null;
  canceledAt?: Date | null;
  createAt: Date;
}

export class Notification {
  private _id: string;
  private props: NotificationProps;

  constructor(
    props: Replace<NotificationProps, { createAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createAt: props.createAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this.props.recipientId;
  }

  public set content(content: Content) {
    this.props.content = content;
  }

  public get content(): Content {
    return this.props.content;
  }

  public set category(category: string) {
    this.props.category = category;
  }

  public get category(): string {
    return this.props.category;
  }

  public read() {
    this.props.readtAt = new Date();
  }

  public unread() {
    this.props.readtAt = null;
  }

  public get readtAt(): Date | null | undefined {
    return this.props.readtAt;
  }

  public cancel() {
    this.props.canceledAt = new Date();
  }

  public get canceledAt(): Date | null | undefined {
    return this.props.canceledAt;
  }

  public get createAt(): Date {
    return this.props.createAt;
  }
}
