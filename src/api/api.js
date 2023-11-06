import axios from "axios";
import * as constants from "../utilities/env";

export default class Api {

	static api;

	constructor() {
		this.api = axios;
		this.api.defaults.baseURL = constants.API_URL;
		this.api.defaults.headers = {
			Accept: "application/json",
			"Content-Type": "application/json",
			locale: "pt-br"
		};
	}


}