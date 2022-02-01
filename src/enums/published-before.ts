import moment from "moment";

export enum PublishedBefore {
  AnyTime,
  Today,
  ThisWeek,
  ThisMonth,
  ThisYear,
}

export const publishDateMapping = {
  [PublishedBefore.Today]: moment(),
  [PublishedBefore.ThisWeek]: moment().startOf("week"),
  [PublishedBefore.ThisMonth]: moment().startOf("month"),
  [PublishedBefore.ThisYear]: moment().startOf("year"),
};
