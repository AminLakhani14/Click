import JqxGrid, { jqx } from "jqwidgets-scripts/jqwidgets-react-tsx/jqxgrid";
import React from "react";

let ClickHeaderFirstTime = true
export default class DemoGrid extends React.Component {
  constructor(props) {
    super(props);
    const source = {
      localdata: [],
      datatype: "json",
      datafields: [
        { name: "issuingDepartment", type: "string" },
        { name: "rlcoID", type: "string" },
        { name: "details", type: "string" },
        { name: "type", type: "string" },
        // { name: "prevailing", type: "string" },
        { name: "timeLine", type: "string" },
        { name: "fee", type: "string" },
        { name: "officials", type: "string" },
        { name: "Details", type: "button" },
      ],
    }

    const editIcon = (row, columnfield, value) => {
      return '<i class="fas fa-search mt-3" style="color: #4B4B4B;font-size: 13px; cursor:pointer; display:flex; justify-content:center;"></i>'
  };


    this.state = {
      columns: [
        { text: "Issuing Department", datafield: "issuingDepartment", width: "25%" },
        { text: "RLCO ID", datafield: "rlcoID", width: "7%" },
        { text: "RLCO Detail", datafield: "details", width: "34%" },
        { text: "Type", datafield: "type", width: "8%" },
        // {
        //   text: "Prevailing Law/Rules", datafield: "prevailing", width: "30%",
        // },
        { text: "Time Line", datafield: "timeLine", width: "8%" },
        { text: "Fee", datafield: "fee", width: "10%" },
        // {
        //   text: "Officials", datafield: "officials", width: "35%",
        // },
        { text: "Details", datafield: "detail", width: "8%", cellsrenderer: editIcon,align: "center",},
      ],
      source: new jqx.dataAdapter(source),
    };

    this.onRowclick = this.onRowclick.bind(this);
    this.Cellclick = this.Cellclick.bind(this);
    this.onColumnclick = this.onColumnclick.bind(this);
    this.onBindingcomplete = this.onBindingcomplete.bind(this);
    this.myGrid = React.createRef(JqxGrid);
  }



  onRowclick(event) {
    try {
      debugger;
      if (event !== null && event !== undefined) {
        const row = event.args.row.bounddata !== undefined ? event.args.row.bounddata : event.args.row
        const body = {
          index: event.args.rowindex,
          row: row
        }
        this.props?.GetGridData(row);
        console.log(body);
      }

    } catch (error) {
      console.log("Error: ", error)
    }
  }

  // this function is to check and uncheck all checkbox
  onColumnclick(event) {
    try {
      if (event !== null && event !== undefined) {
      }

    } catch (error) {
      console.log("Error: ", error)
    }



  }

  componentDidMount(prevState, prevProps, snapshot) {
    try {
      if (this.props.data.length > 0) {
        const source = {
          localdata: this.props.data,
          datatype: "json",
        };

        this.setState({ source: new jqx.dataAdapter(source) });
      }
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  componentDidUpdate(prevState, prevProps, snapshot) {
    try {
      if (prevState.data !== this.props.data) {
        const source = {
          localdata: this.props.data,
          datatype: "json",
        };
        this.setState({ source: new jqx.dataAdapter(source) });
      }
    } catch (error) {
      console.log("Error: ", error)
    }
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.data === nextProps.data && this.state === nextState) {
      return false;
    } else {
      return true;
    }
  }
  onBindingcomplete(event) {
    try {
      if (
        event !== null &&
        this.props.data !== null &&
        this.props.data !== undefined

      ) {
        this.myGrid.current.selectrow(0);
      }
    } catch (error) {
      console.log("Error: ", error)
    }
  }

  Cellclick (event) {
     
    if (event.args.datafield === "detail") {
        this.props.setOpenModal(true);
    }

}
  render() {
    return (
      <JqxGrid
        ref={this.myGrid}
        columnsheight={50}
        rowsheight={50}
        // autorowheight={true}
        onRowclick={this.onRowclick}
        source={this.state.source}
        columns={this.state.columns}
        onRowselect={this.onRowclick}
        height={610}
        width={"100%"}
        columnsresize={true}
        pageable={false}
        columnsreorder={true}
        autoloadstate={true}
        autosavestate={true}
        onBindingcomplete={this.onBindingcomplete}
        filterable={false}
        onCellclick={this.Cellclick}
        columnsmenu={true}
        onFilter={this.props.onFilterGrid}
        editable={false}
        showsortmenuitems={false}
        onColumnclick={this.onColumnclick}
      />
    );
  }
}
