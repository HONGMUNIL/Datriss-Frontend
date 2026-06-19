import type { ReactNode } from "react";

export type TableColumn ={
    label: string;
    width?: string;
};


export type TableProps = {
    columns: TableColumn[];
    children: ReactNode;
};
