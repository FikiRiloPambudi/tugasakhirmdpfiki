import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import './LoginPage.css';

function LoginPage() {
	const navigate = useNavigate();
	const [ username, setUsername ] = useState();
	const [ password, setPassword ] = useState();
	const user = 'fikirilo';
	const pwd = '123';
	function getuser(e) {
		setUsername(e.target.value);
	}
	function getpass(e) {
		setPassword(e.target.value);
	}
	function validation() {
		if (username === user && password === pwd) {
			navigate('/todo');
		} else {
			alert('Unable to Login');
		}
	}
	const onSubmit = (e) => {
		e.preventDefault();
		validation();
	};
	return (
		<div>
			<h1 style={{color: '#686868', fontSize: 40}}>Login</h1>
			<div className="settingWrapper">
				<div>
					<p style={{color: '#686868', fontSize: 20}}>Username</p>
					<div className="boxWrapper">
						<input className="boxInfo" type="text" onChange={getuser} placeholder="masukan username anda" />
					</div>
				</div>
				<div>
					<p style={{color: '#686868', fontSize: 20}}>Password</p>
					<div className="boxWrapper">
						<input
							className="boxInfo"
							type="password"
							onChange={getpass}
							placeholder="masukan password anda"
						/>
					</div>
				</div>
				<div className="saveBtnWrapper">
					<button className="saveBtn" onClick={onSubmit}>
						LOGIN
					</button>
				</div>
			</div>
		</div>
	);
}

export default LoginPage;
