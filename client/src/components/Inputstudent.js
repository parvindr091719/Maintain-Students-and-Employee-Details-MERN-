import React from 'react'
import axios from 'axios'
import team from '../team.png'
class Inputstudent extends React.Component{
    state = {
        firstname : '',
        lastname: '',
        place:''
    }
    handleChange = (e)=>{
        console.log(e.target.name);
        console.log(e.target.value);
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit = ()=>{
        if(this.state.firstname !== '' && this.state.lastname !== '' , this.state.place !== '')
        {
            axios.post('http://localhost:5000/students',this.state)
            .then(res=>{
                console.log('successfully posted');
                this.setState({firstname:'',lastname:'',place:''});
            });
            window.location = '/';
           
        }
    }
    render(){
        return(
            <div className="row text-center">
                <div className="col-md-4">
                    <form onSubmit={()=>this.handleSubmit()}>
                        <input required onChange={(e)=>this.handleChange(e)} name='firstname' value={this.state.firstname} style={{fontSize:'15px',fontFamily:'Cursive,sans-serif,Gugi',borderRadius:'10px',marginLeft:'50px',marginTop:'30px'}} placeholder="First Name" className="form-control"/>
                        <input required onChange={(e)=>this.handleChange(e)} name='lastname' value={this.state.lastname} style={{fontSize:'15px',fontFamily:'Cursive,sans-serif,Gugi',borderRadius:'10px',marginLeft:'50px',marginTop:'20px'}} placeholder="Last Name" className="form-control"/>
                        <input required onChange={(e)=>this.handleChange(e)} name='place' value={this.state.place} style={{fontSize:'15px',fontFamily:'Cursive,sans-serif,Gugi',borderRadius:'10px',marginLeft:'50px',marginTop:'20px'}} placeholder="Place" className="form-control"/>
                        <button style={{borderRadius:'8px',fontSize:'21px',fontFamily:'Cursive,sans-serif,Gugi',outline:'none',color:'white',backgroundColor:'#000066',marginLeft:'61px',marginTop:'20px'}} className="btn">CREATE</button>
                    </form>
                </div>
                <div className="col-md-8">
                    <img src={team}/>
                </div>
            </div>
        );
    }
}
export default Inputstudent;