import { Link } from "react-router-dom";
import "./cn-nav-bar.css";

export function CNNavigationBar() {
	return (
		<div className='cnavbar'>
			<Link
				className='links'
				to='/'>
				Novetats
			</Link>
			<Link
				className='links'
				to='/nosaltres'>
				Nosaltres
			</Link>
			<Link
				className='links'
				to='/noticies'>
				Notícies
			</Link>
			<Link
				className='links'
				to='/contacte'>
				Contacte
			</Link>
			<Link
				className='links'
				to='/podcast'>
				Pòdcast
			</Link>
		</div>
	);
}

/*

			<Link
				className='links'
				to='/divulgacio'>
				Divulgació
			</Link>
			<Link
				className='links'
				to='/cultura'>
				Cultura
			</Link>
			<Link
				className='links'
				to='/altres'>
				Altres
			</Link>
*/
