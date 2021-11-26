import React from "react";
import { Profile } from "./CardProfile";
import CardProfile from'./CardProfile';
export default function ProfilePage(){
	return (
		<div
		style={{
			display:'flex',
			flexDirection:'column',
			justifyContent:'center',
			alignItems:'center',
		}}>
			<h1 style={{color:'white'}}>Profile</h1>
					<div>
					{Profile.map((item,index)=>(
						<CardProfile
						
						nama={item.nama}
						nim={item.nim}
						prodi={item.prodi}
						/>
					))}
					</div>
	</div>

	)
					}
