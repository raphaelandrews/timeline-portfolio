import { useEffect, useRef, useState } from "react";
import * as C from "./Feed.styles";
import { InteractiveRating, OrderSummary, ThreeColumnPreviewCard, QRcode, ProfileCardComponent, NftCard, MovieApp } from "@/posts";
import { Button } from "@/components";
import { StatsPreviewCard } from "@/posts/StatsPreviewCard";
import { Next, Previous } from "@/assets/svg";

export const Feed = () => {
  const itemsPerPage = 2;
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

  const handlePageChange = (event: { target: { value: string } }) => {
    let pageNumber = parseInt(event.target.value);
    
    if (pageNumber > totalPages) {
      pageNumber = totalPages;
    }

    if (pageNumber < 1) {
      setCurrentPage(1);
    }

    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      (inputRef.current as HTMLInputElement).value = currentPage.toString();
    }
  }, [currentPage]);


  return (
    <C.FeedWrapper>
      {itemsToRender}
      <C.Pagination>
        <div className="pagination__nav">
          <Button
            action={() => setCurrentPage(currentPage - 1)}
            display="flex"
            border="none"
            backgroundColor="transparent"
            disabled={currentPage === 1}
          >
            <Previous width="1.25rem" />
          </Button>
          <span>
            {currentPage}/{totalPages}
          </span>
          <Button
            action={() => setCurrentPage(currentPage + 1)}
            display="flex"
            border="none"
            backgroundColor="transparent"
            disabled={currentPage === totalPages}
          >
            <Next width="1.25rem" />
          </Button>
        </div>
        <C.InputWrapper>
          Go to page
          <C.Input type="number" min="1" max={totalPages} onChange={handlePageChange} ref={inputRef} onKeyPress={(event) => {
            if (event.key === "-" || event.key === "+") {
              event.preventDefault();
            }
          }} />
        </C.InputWrapper>
      </C.Pagination>
    </C.FeedWrapper>
  );
};
