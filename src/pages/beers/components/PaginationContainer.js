import React from "react";
import TablePagination from "@material-ui/core/TablePagination";

export default function PaginationContainer({
  page,
  handleChangePage,
  rowsPerPage,
  handleChangeRowsPerPage,
}) {
  return (
    <div className="table-pagination-container">
      <TablePagination
        component="div"
        count={325}
        page={page}
        onChangePage={handleChangePage}
        rowsPerPage={rowsPerPage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
}
