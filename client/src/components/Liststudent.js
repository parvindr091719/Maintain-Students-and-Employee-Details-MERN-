import React from 'react'
import axios from 'axios'
class Liststudent extends React.Component{
    state = {
        students : [],
        ufirstname:'',
        ulastname:'',
        uplace:'',
        uid:''
    }

    getStudents = ()=>{
        axios.get('http://localhost:5000/')
        .then(res=>{
            console.log(res);
            this.setState({students:res.data});
        })
    }

    componentDidMount = ()=>{
        this.getStudents();
    }

    handleDelete = (id)=>{
        axios.delete(`http://localhost:5000/student/${id}`)
        .then(res=>{
            console.log(res);
            window.location = '/';
        })
    }

    handleUpdate = (e)=>{
        this.setState({[e.target.name]:e.target.value});
    }

    handleModalUpdate = (e)=>{
        axios.put(`http://localhost:5000/student/${this.state.uid}`,{firstname:this.state.ufirstname,lastname:this.state.ulastname,place:this.state.uplace})
        .then(res=>{
            console.log(res);
            this.setState({ufirstname:'',ulastname:'',uplace:''})
            window.location = '/';
        })

    }

    render(){
        return(
            <div>{
                this.state.students.map(student=>(
                    <div key={student._id} className='card' style={{borderRadius:'10px',padding:'15px',backgroundColor:'whitesmoke',display:'inline-block',marginLeft:'15px',marginTop:'10px'}}>
                        <div className='card-body'>
                            <h4>First Name: {student.firstname}</h4>
                            <h4>Last Name: {student.lastname}</h4>
                            <h4>Place: {student.place}</h4>
                            <div className='container' style={{display:'inline'}}>
                                    
                                    
                                <button type="button" className='btn btn-warning' data-toggle="modal" data-target="#myModal" onClick={()=>{this.setState({uid:student._id,ufirstname:student.firstname,ulastname:student.lastname,uplace:student.place})}}>UPDATE</button>
                                <button style={{marginLeft:'20px'}} onClick={()=>this.handleDelete(student._id)} className='btn btn-danger'>DELETE</button>
                                
                                <div className='modal fade' id="myModal" role="dialog">
                                    <div className='modal-dialog'>    
                                        <div className='modal-content'>
                                            <div className='modal-header'>
                                                <button type="button" className='close' data-dismiss="modal">&times;</button>
                                                <h4 className='modal-title'>UPDATE</h4>
                                            </div>
                                            <div className='modal-body'>
                                                <input onChange={(e)=>this.handleUpdate(e)} value={this.state.ufirstname} name='ufirstname' className='form-control' style={{marginBottom:'10px',fontFamily:'cursive',fontSize:'15px'}} placeholder="First Name"/>
                                                <input onChange={(e)=>this.handleUpdate(e)} value={this.state.ulastname} name='ulastname' className='form-control' style={{marginBottom:'10px',fontFamily:'cursive',fontSize:'15px'}} placeholder="Last Name"/>
                                                <input onChange={(e)=>this.handleUpdate(e)} value={this.state.uplace} name='uplace' className='form-control' style={{marginBottom:'10px',fontFamily:'cursive',fontSize:'15px'}} placeholder="Place"/>               
                                            </div>
                                            <div className='modal-footer'>
                                                <button className='btn btn-warning' onClick={(e)=>this.handleModalUpdate(e)}>Update</button>    
                                                <button type="button" className='btn btn-danger' data-dismiss="modal" onClick={()=>{this.setState({ufirstname:'',ulastname:'',uplace:''})}}>Close</button>
                                            </div>
                                        </div>        
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div> 
                ))
            }</div>
        );
    }
}
export default Liststudent;