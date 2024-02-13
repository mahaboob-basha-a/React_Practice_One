const Login = ()=>{
    return(<div className="p-4">
        <form>
            <label className="text-dark" htmlFor="nameOne">Name</label>
            <input type="text" name="" id="nameOne" className="form-control" />
            <label className="text-dark" htmlFor="nameOne">Password</label>
            <input type="text" name="" id="nameOne" className="form-control" />
            <button className="btn btn-primary mt-4">Login Now</button>
        </form>
    </div>);
}

export default Login;