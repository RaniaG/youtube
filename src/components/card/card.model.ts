import { ReactElement } from "react";
import { Thumbnails } from "../../models/thumbnails";

export interface CardModel {
  title: string;
  subTitleArray: any[]; //jsx
  description: string;
  thumbnails: Thumbnails;
  rounded?: boolean;
  overlay?: ReactElement;
  extraContent?: ReactElement;
}
