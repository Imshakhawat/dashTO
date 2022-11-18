import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { CourseData, CourseGrid } from "../data/dummyTO";
import { Header } from '../components';

const Orders = () => {
  const editing = { allowDeleting: true, allowEditing: false };
  return (
    <div className="m-2 md:m-10 mt-20 p-2 md:p-10 bg-blue rounded-3xl">
      <Header category="Page" title="Courses" />
      <GridComponent
        id="gridcomp"
        // dataSource={ordersData}
        dataSource={CourseData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
        //height={315}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {CourseGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};
export default Orders;
