"use client";

import { FC } from "react";
import {
  DataGrid,
  GridColumnHeaderParams,
  type GridColDef,
} from "@mui/x-data-grid";
import { ApiRequest } from "@prisma/client";
import { createTheme, styled, ThemeProvider } from "@mui/material";
import { useTheme } from "next-themes";

const columnsList: GridColDef[] = [
  { field: "col1", headerName: "API key used", width: 400 },
  { field: "col2", headerName: "Path", width: 250 },
  { field: "col3", headerName: "Recency", width: 250 },
  { field: "col4", headerName: "Duration", width: 150 },
  { field: "col5", headerName: "Status", width: 150 },
];

const columns = columnsList.map((col) => {
  return {
    ...col,
    renderHeader(params: GridColumnHeaderParams<any, any, any>) {
      return (
        <strong className="font-semibold">{params.colDef.headerName}</strong>
      );
    },
  };
});

type ModifiedRequestType<T extends keyof ApiRequest> = Omit<ApiRequest, T> & {
  timestamp: string;
};
interface TableProps {
  userRequests: ModifiedRequestType<"timestamp">[];
}

const Table: FC<TableProps> = ({ userRequests }) => {
  const { theme: applicationTheme } = useTheme();
  const theme = createTheme({
    palette: {
      mode: applicationTheme === "light" ? "light" : "dark",
    },
  });
  const rows = userRequests.map((request) => ({
    id: request.id,
    col1: request.usedApiKey,
    col2: request.path,
    col3: `${request.timestamp} ago`,
    col4: `${request.duration} ms`,
    col5: request.status,
  }));
  const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    border: 0,
    color: "#757575",
    fontFamily: "Lato",
    WebkitFontSmoothing: "auto",
    letterSpacing: "normal",
    "& .MuiDataGrid-row": {
      width: "1191px",
      height: "34px",
      background: "#FFFFFF",
      borderRadius: "27px",
    },
    "& .MuiDataGrid-iconSeparator": {
      display: "none",
    },
    "& .MuiDataGrid-columnHeaders": {
      width: "1191px",
      minHeight: "34px",
      background: "#D5DFED",
      borderRadius: "20px",
    },
    "& .MuiDataGrid-columnHeaderTitle": {
      fontWeight: 700,
      fontSize: "14px",
      minHeight: "34px",
    },
    "& .MuiDataGrid-row.Mui-selected": {
      background: " #FFFFFF",
      border: "1px solid #73A0FF",
      borderRadius: " 27px",
    },
    "& .MuiDataGrid-cell": {
      fontFamily: "Lato",
      fontWeight: 400,
      fontSize: "14px",
      lineHeight: "17px",
      color: "#757575",
      boxSizing: "none",
      borderBottom: "none",
    },
    "& .MuiPaginationItem-root": {
      borderRadius: 0,
    },
  }));

  return (
    <div>
      <ThemeProvider theme={theme}>
        <DataGrid
          className="font-roboto-mono bg-perfume-100  text-perfume-700 dark:bg-minsk-800 dark:text-minsk-200"
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
          autoHeight
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          sx={{ "&, [class^=MuiDataGrid]": { border: "none" } }}
          columns={columns}
          rows={rows}
        ></DataGrid>
      </ThemeProvider>
    </div>
  );
};

export default Table;
