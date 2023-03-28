import React from "react";
import { Link } from "react-router-dom";

export default function SignIn () {
    

    return (
        <div class="card">
            <div class="card-body">
                <h1>Login here</h1><form>
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" placeholder="E-mail" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" placeholder="Password" class="form-control" id="exampleInputPassword1" />
            </div>
            
            <Link to="/task"><button type="submit" class="btn btn-primary">Submit</button></Link>
        </form>
        </div>
        </div>
    )
}