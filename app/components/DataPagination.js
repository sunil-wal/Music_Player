import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import classnames from 'classnames';
import { userActions } from '../actions';

class DataPagination extends React.Component {
  constructor(props) {
    super(props);
    this.itemsLength = this.props.itemsLength;

    this.pageSize = 5;
    this.pagesCount = Math.ceil(this.itemsLength / this.pageSize);

    this.handlePageChange = this.handlePageChange.bind(this);
    this.state = {
      currentPage: 0
    };
  }
  handlePageChange(e, index) {
    e.preventDefault();

    this.setState({
      currentPage: index
    });
  }
  render() {
    const { currentPage } = this.state;
    return (
      <div>
        <Pagination aria-label="Page navigation example">
          <PaginationItem disabled={currentPage <= 0}>
            <PaginationLink
              onClick={e => this.handlePageChange(e, currentPage - 1)}
              previous
              href="#"
            />
          </PaginationItem>

          {[...Array(this.pagesCount)].map((page, i) => (
            <PaginationItem active={i === currentPage} key={i}>
              <PaginationLink
                onClick={e => this.handlePageChange(e, i)}
                href="#"
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem disabled={currentPage >= this.pagesCount - 1}>
            <PaginationLink
              onClick={e => this.handlePageChange(e, currentPage + 1)}
              next
              href="#"
            />
          </PaginationItem>
        </Pagination>
      </div>
    );
  }
}
export default DataPagination;
