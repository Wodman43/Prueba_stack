// import React,{Component} from 'react';
// class App extends Component {
//     render() {
//         return(
//             <div>
//                 {/* navegacion */}
//                 <nav className="light-blue darken-4">
//                     <div className="container">
//                         <a className="brand-logo" href="/">Mern Stack</a>
//                     </div>
//                 </nav>
//                 <div className="container">
//                     <div className="row">
//                        <div className="col s5">
//                         <div className='card'>
//                             <div className="card-content">
//                                 <form>
//                                     <div className="row">
//                                         <div className="input-field col s12">
//                                             <input type="text" placeholder='Task Title'/>
//                                         </div>
//                                     </div>
//                                     <div className="row">
//                                         <div className="input-field col s12">
//                                             <textarea className='materialize-textarea' placeholder='Task Description'></textarea>
//                                         </div>
//                                     </div>
//                                     <button type='submit' className='btn ligth-blue darken-4'>Enviar</button>
//                                 </form>
//                             </div>
//                         </div>
//                        </div>
//                        <div className="col s7">
                        
//                        </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default App;


// import React,{Component} from 'react';
// // import task from '../models/task';
// class App extends Component {
//     constructor(){
//         super();
//         this.state = {
//             title: '',
//             description:'',
//             tasks: [],
//             _id: ''
//         };
//         this.handleChange = this.handleChange.bind(this);
//         this.addTask = this.addTask.bind(this);
//     }

//     addTask(e){
//         if(this.state._id){
//             fetch(`/api/tasks/${this.state._id}`,{
//                 method: 'PUT',
//                 body: JSON.stringify(this.state),
//                 headers: {
//                     'Accept':'application/json',
//                     'content-type': 'application/json'
//                 }
//             })
//             .then(res=>res.json)
//             .then(data=> {
//                 console.log(data)
//                 M.toast({html: 'Tarea Actualizada'})
//                 this.setState({title: '',description: '', _id: ''})
//                 this.fetchTaskS();
//             })
//         }else{
//             fetch('/api/tasks',{
//                 method: 'POST',
//                 body: JSON.stringify(this.state),
//                 headers: {
//                     'Accept':'application/json',
//                     'content-type': 'application/json'
//                 }
    
//             })
        
//             .then(res => res.json())
//             .then(data=>{
//                 console.log(data)
//                 M.toast({html: 'Tarea Guardada'});
//                 this.setState({title: '', description: ''});
//                 this.fetchTaskS();
//             })
//             .catch(err => console.log(err));
//         }
//         e.preventDefault();
//     }

//     componentDidMount(){
//         this.fetchTaskS();
//         // console.log('el componente fue montado');
//     }

// fetchTaskS(){
//     fetch('/api/tasks')
//     .then(res => res.json())
//     .then(data => {
//     this.setState({tasks: data});
//     console.log(this.state.tasks)});
// }

// deleteTasks(id){
//     if(confirm('esta seguro de eliminar este elemeto')){
//         fetch(`/api/tasks/${id}`,{
//             method: 'DELETE',
//             headers: {
//                 'Accept':'application/json',
//                 'content-type': 'application/json'
//             }
//         })
//         .then(res => res.json())
//         .then(data => {
//             console.log(data);
//             M.toast({html: 'Tasks deleted'})
//             this.fetchTaskS();
//         })
//     }
// }

// editTask(id){
//     fetch(`/api/tasks/${id}`)
//     .then(res => res.json)
//     .then(data =>{
//     console.log(data)})
//     this.setState({
//         title: data.title,
//         description: data.description,
//         _id: data._id
//     });
// }

//     handleChange(e){
//         const {name, value} = e.target;
//         this.setState({[name]:value});
//     }
//     render() {
//         return(
//             <div>
//                 {/* navegacion */}
//                 <nav className="light-blue darken-4">
//                     <div className="container">
//                         <a className="brand-logo" href="/">Mern Stack</a>
//                     </div>
//                 </nav>
//                 <div className="container">
//                     <div className="row">
//                        <div className="col s5">
//                         <div className='card'>
//                             <div className="card-content">
//                                 <form onSubmit={this.addTask}>
//                                     <div className="row">
//                                         <div className="input-field col s12">
//                                             <input name='title' onChange={this.handleChange} type="text" placeholder='Task Title' value={this.state.title}/>
//                                         </div>
//                                     </div>
//                                     <div className="row">
//                                         <div className="input-field col s12">
//                                             <textarea name='description' onChange={this.handleChange} className='materialize-textarea' placeholder='Task Description' value={this.state.description}></textarea>
//                                         </div>
//                                     </div>
//                                     <button type='submit' className='btn ligth-blue darken-4'>Enviar</button>
//                                 </form>
//                             </div>
//                         </div>
//                        </div>
//                        <div className="col s7">
//                         <table>
//                             <thead>
//                                 <tr>
//                                     <th>Title</th>
//                                     <th>Description</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {
//                                     this.state.title.map(task =>{
//                                         return(
//                                             <tr key={task._id}>
//                                                 <td>{task.title}</td>
//                                                 <td>{task.des}</td>
//                                                 <td>
//                                                     <button className='btn ligth-blue darken-4' onClick={()=> this.deleteTasks(task._id)}><i className='material-icons'>delete</i></button>
//                                                     <button className='btn ligth-blue darken-4' onClick={()=> this.editTask(task._id)} style={{margin: '4px'}}><i className='material-icons'>Edit</i></button>
//                                                 </td>
//                                             </tr>
//                                         )
//                                     })
//                                 }
//                             </tbody>
//                         </table>
//                        </div>
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

// export default App;