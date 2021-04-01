import './index.scss'

const SignIn=()=>{
           return (
             <form>
               <div className="form-group">
                 <label>Email address</label>
                 <input
                   type="email"
                   className="form-control"
                   placeholder="Enter email"
                 />
               </div>

               <div className="form-group">
                 <label>Password</label>
                 <input
                   type="password"
                   className="form-control"
                   placeholder="Enter password"
                 />
               </div>

               <div className="form-group">
                 <div className="custom-control custom-checkbox">
                   <input
                     type="checkbox"
                     className="custom-control-input"
                     id="customCheck1"
                   />
                 </div>
               </div>

               <button type="submit" className="btn btn-primary btn-block">
                 Soumettre
               </button>
             </form>
           );
}
export default SignIn