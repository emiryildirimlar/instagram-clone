import {logout} from "../firabase.js";
import {useEffect} from "react";


export default function Logout() {

	useEffect(() => {
		logout()
	})

	return null

}