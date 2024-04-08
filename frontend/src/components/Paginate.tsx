import React from "react";
import { Pagination } from "react-bootstrap";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import './Pagination.css';

interface PaginationProps {
  comesFrom: string;
  page: number;
  pages: number;
  isAdmin?: boolean;
  keyword?: any;
  category?: string;
}

const Paginate = ({
  pages,
  page,
  isAdmin = false,
  keyword = "",
  comesFrom,
  category,
}: PaginationProps) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smooth scrolling
    });
  };

  const generateTo = (x:any) => {
    if (!isAdmin) {
      if (keyword) {
        return `/search/${keyword}/page/${x}`;
      } else if (category) {
        return `/category/${category}/page/${x}`;
      } else if(comesFrom) {
        return `/${comesFrom}/${x}`;
      } else {
        return `/page/${x}`;
      }
    } else {
      return `/admin/${comesFrom}/${x}`;
    }
  };

  return (
    <>
      {pages > 1 && (
        <Pagination>
          {page > 1 ? (
            <LinkContainer to={generateTo(page - 1)} onClick={scrollToTop}>
              <Pagination.Prev
            
                className="custom-pagination-btn"
              >
                {/* <FaChevronLeft /> */}
                Prev
              </Pagination.Prev>
            </LinkContainer>
          ) : (
            <LinkContainer to={""}>
              <Pagination.Prev
               
                className="custom-pagination-btn"
              >
                {/* <FaChevronLeft /> */}
                Prev
              </Pagination.Prev>
            </LinkContainer>
          )}

          {page < pages ? (
            <LinkContainer to={generateTo(page + 1)} onClick={scrollToTop}>
              <Pagination.Next className="custom-pagination-btn">
                Next
                {/* <FaChevronRight /> */}
              </Pagination.Next>
            </LinkContainer>
          ) : (
            <LinkContainer to={""}>
              <Pagination.Next className="custom-pagination-btn">
                Next
                {/* <FaChevronRight /> */}
              </Pagination.Next>
            </LinkContainer>
          )}
        </Pagination>
      )}
    </>
  );
};

export default Paginate;
