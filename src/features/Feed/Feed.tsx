import * as C from "./Feed.styles";
import { InteractiveRating, OrderSummary, QRcode } from "@/posts";

export const Feed = () => {
  return (
    <C.FeedWrapper>
      <InteractiveRating />
      <OrderSummary />
      <QRcode />
    </C.FeedWrapper>
  )
}
