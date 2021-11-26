import './CardProfile.css'
export default function CardProfile({nama, nim, prodi}){
	return(
		<div className="card-profile">
			<div className="profile-left">
				
			</div>
			<div className="profile-details">
				<h1 style={{color:'white'}}>{nama}</h1>
				<h2 style={{color:'white'}}>{nim}</h2>
				<h2 style={{color:'white'}}>{prodi}</h2>

			</div>
			</div>

	)
}
export const Profile=[
	{
		
		nama:'Fiki Rilo Pambudi',
		nim:'21120119120001',
		prodi: 'Teknik komputer',
		
	},
]