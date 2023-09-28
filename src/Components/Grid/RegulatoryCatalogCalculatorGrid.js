import React from "react";
import JqxGrid, { jqx } from "jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid";

export default class RegulatoryCatalogCalculatorGrid extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        // {
        //   text: "Validity",
        //   datafield: "validityYear",
        //   width: "30%",
        //   cellsalign: "left",
        //   align: "left",
        //   editable: false,
        // },
        {
          text: "Department",
          datafield: "departments",
          width: "75%",
          cellsalign: "left",
          align: "left",
          editable: false,
        },
        // {
        //   text: "Time Line",
        //   datafield: "timeLineText",
        //   width: "25%",
        //   cellsalign: "left",
        //   align: "left",
        //   editable: false,
        // },

        {
          text: "Fee",
          datafield: "feeValue",
          width: "25%",
          cellsalign: "right",
          align: "right",
          editable: false,
        },
      ],
      source: null,
    };

    this.onRowclick = this.onRowclick.bind(this);
    this.myGrid = React.createRef(JqxGrid);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.changeValue !== this.props.changeValue) {
      this.updateSource();
    }
  }

  componentDidMount() {
    this.updateSource();
  }

  updateSource() {
    const changeValue = this.props.changeValue || []; // Add a check here

    const source = {
      localdata: changeValue,
      datatype: "json",
      datafields: [
        { name: "timeLineText", type: "string" },
        { name: "feeValue", type: "string" },
        { name: "departments", type: "string" },
        { name: "id", type: "string" },
      ],
    };

    this.setState({
      source: new jqx.dataAdapter(source),
    });
  }

  onRowclick(event) {
    const row = event.args.row.bounddata;
    const body = {
      index: event.args.rowindex,
      row: row,
    };
    console.log(body);
  }

  render() {
    const rowRenderer = (row, datafield, value, defaultHtml, column, rowdata) => {
      const isEvenRow = row % 2 === 0;
      const backgroundColor = isEvenRow ? "red" : "blue";
      const style = `background-color: ${backgroundColor};`;

      return `<div style="${style}">${defaultHtml}</div>`;
    };

    const changeValue = this.props.changeValue || []; // Add a check here
    const totalValue = changeValue.reduce((total, item) => {
    //  const feeValue = feeValue.replace(/[^\d]/g, '');
      const feeValue = parseFloat(item.feeValue);
      return isNaN(feeValue) ? total : total + feeValue;
    }, 0);

    return (
      <div style={{ position: "relative" }}>
        <JqxGrid
          ref={this.myGrid}
          columnsheight={50}
          rowsheight={50}
          source={this.state.source}
          columns={this.state.columns}
          onRowclick={this.onRowclick}
          height={300}
          width={"100%"}
          editable={false}
          columnsresize={true}
          columnsreorder={true}
          showsortmenuitems={false}
          autoloadstate={true}
          autosavestate={true}
          sortable={true}
          columnsmenu={false}
          rowrenderer={rowRenderer}
          showstatusbar={true} // Show the footer section
        />
        <div
          style={{
            borderTop: "1px solid #ddd",
            height:"50px",
            display:"flex",
            position: "absolute",
            bottom: 0, // Stick to the bottom
            left: 0,
            right: 0,
            background: "#f2f2f2", // Gray background color
            zIndex: 10, // Ensure it stays on top of the grid
          }}
        >
          <div style={{ fontWeight: "bold" ,width:"501px",borderRight:"1px solid #E0E0E0",paddingTop:"11px",paddingLeft:"10px",width:"66%"}}>Total:</div>{" "}
          <div style={{paddingTop:"11px",paddingLeft:"3px",width:"34%",marginLeft:"-2px",textAlign:"right"}}>{totalValue.toFixed(2)}</div>
        </div>
      </div>
    );
  }
}
