import React, {Component} from 'react';

class Table extends Component{

    render(){
        return(
         <div>
     <div className="form-group">
                        <div className="div-rows" >Number of records: <label className="label-row">{this.props.data.length}</label></div>
                    </div>
                
                    <div className="table-responsive">
                     
            <table className="table table-bordered" style={styles.table}>
                <thead>
                    <tr style={styles.tr}>
                        <th>Calldate</th>
                        <th>Clid</th>
                        <th>Src</th>
                        <th>Dst</th>
                        <th>Dcontext</th>
                        <th>Channel</th>
                        <th>DstChannel</th>
                        <th>Lastapp</th>
                        <th>Lastdata</th>
                        <th>Duration</th>
                        <th>Billsec</th>
                        <th>Dispotition</th>
                        <th>Amaflags</th>
                        <th>Accountcode</th>
                        <th>Uniqueid</th>
                        <th>Userfield</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.data.map((row,index)=>(
                        <tr key={index} >
                        <td>{row.calldate}</td>
                        <td>{row.clid}</td>
                        <td>{row.src}</td>
                        <td>{row.dst}</td>
                        <td>{row.dcontext}</td>
                        <td>{row.channel}</td>
                        <td>{row.dstchannel}</td>
                        <td>{row.lastapp}</td>
                        <td>{row.lastdata}</td>
                        <td>{row.duration}</td>
                        <td>{row.billsec}</td>
                        <td>{row.disposition}</td>
                        <td>{row.amaflags}</td>
                        <td>{row.accountcode}</td>
                        <td>{row.uniqueid}</td>
                        <td>{row.userfield}</td>
                        </tr>
                    ))}
                  

                </tbody>
            </table>
        </div>
                
         </div>
           
          
       
     
        

         );
    }
}
var styles={
    tr:{
        borderColor: '#FB7B47',
        border:'2px solid #FB7B47',
        color:'#FB7B47',
    },

 
   
}

export default Table;