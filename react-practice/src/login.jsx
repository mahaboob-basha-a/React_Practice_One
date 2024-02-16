const Login = ()=>{
    function para(){
        return alert("hi");
    }
    return(<div className="p-4">
        <form>
            <label className="text-dark" htmlFor="nameOne">Name</label>
            <input type="text" name="" id="nameOne" className="form-control" />
            <label className="text-dark" htmlFor="nameOne">Password</label>
            <input type="text" name="" id="nameOne" className="form-control" />
            <button className="btn btn-primary mt-4" onClick={para}>Login Now</button>
        </form>
        <p></p>
    </div>);
}

export default Login;