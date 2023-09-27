import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";

import { Contacts } from "./views/contacts.js";
import { AddContact } from "./views/addContact.js";

export const Layout = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<Routes>
						<Route exact path="/index.html" component={Contacts} />
						<Route exact path="/" component={Contacts} />
						<Route exact path="/contacts" component={Contacts} />
						<Route exact path="/add" component={AddContact} />
						<Route exact path="/edit" component={AddContact} />
						<Route render={() => <h1 className="notfound">Not found!</h1>} />
					</Routes>
				</div>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);