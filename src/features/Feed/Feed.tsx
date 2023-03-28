import { useState } from "react";
import * as C from "./Feed.styles";
import { InteractiveRating, OrderSummary, ThreeColumnPreviewCard, QRcode, ProfileCardComponent, NftCard, MovieApp } from "@/posts";
import { StatsPreviewCard } from "@/posts/StatsPreviewCard";

export const Feed = () => {
  const itemsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const numItems = 8;

  const totalPages = Math.ceil(numItems / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const itemsToRender = [
    <MovieApp key="movie-app" />,
    <NftCard key="nft-card" />,
    <ProfileCardComponent key="profile-card" />,
    <StatsPreviewCard key="stats-preview-card" />,
    <ThreeColumnPreviewCard key="three-column-preview-card" />,
    <InteractiveRating key="interactive-rating" />,
    <OrderSummary key="order-summary" />,
    <QRcode key="qr-code" />,
  ].slice(startIndex, endIndex);

  return (
    <C.FeedWrapper>
      {itemsToRender}
      <div>
        {currentPage > 1 && (
          <button onClick={() => setCurrentPage(currentPage - 1)}>
            Previous
          </button>
        )}
        {currentPage < totalPages && (
          <button onClick={() => setCurrentPage(currentPage + 1)}>
            Next
          </button>
        )}
      </div>
    </C.FeedWrapper>
  );
};
