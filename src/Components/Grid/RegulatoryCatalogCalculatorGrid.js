import React from "react";
import JqxGrid, { jqx } from "jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid";

export default class RegulatoryCatalogCalculatorGrid extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        {
          text: "Time Line",
          datafield: "timeLineText",
          width: "35%",
          cellsalign: "left",
          align: "left",
          editable: false,
        },
        {
          text: "Validity",
          datafield: "validityYear",
          width: "30%",
          cellsalign: "left",
          align: "left",
          editable: false,
        },
        {
          text: "Fee",
          datafield: "feeValue",
          width: "35%",
          cellsalign: "left",
          align: "left",
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
    const source = {
      localdata: this.props.changeValue,
      datatype: "json",
      datafields: [
        { name: "timeLineText", type: "string" },
        { name: "feeValue", type: "string" },
        { name: "validityYear", type: "string" },
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
      const isEvenRow = datafield % 2 === 0;
      const backgroundColor = isEvenRow ? "red" : "blue";
      const style = `background-color: ${backgroundColor};`;

      return `<div style="${style}">${defaultHtml}</div>`;
    };

    return (
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
      />
    );
  }
}
