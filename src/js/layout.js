import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./store/appContext";

// import ScrollToTop from "./component/scrollToTop";

import injectContext from "./store/appContext";

import NewContact from "./views/NewContact.js"; 
import EditContact  from "./views/EditContacts.js";
import Home from "./views/home.js"; 

const Layout = () => {
	return (
		<div>
			<BrowserRouter>
				<div>
					<ContextProvider>
						<Routes>
							<Route exact path="/" element={<Home />} />
							<Route exact path="/new" element={<NewContact />} />
							<Route exact path="/edit" element={<EditContact />} />
							<Route render={() => <h1 className="notfound">Not found!</h1>} />
						</Routes>
					</ContextProvider>	
				</div>
			</BrowserRouter>
		</div>
	);
};

export default Layout;
