import React, { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

const initialState = {
	chats: false,
	cart: false,
	userProfile: false,
	notifications: false,
};

export const ContextProvider = ({ children }) => {
	const [activeMenu, setActiveMenu] = useState(true);
	const [isClicked, setIsClicked] = useState(initialState);

	const [screenSize, setScreenSize] = useState(undefined);

	const [currentColor, setCurrentColor] = useState("#03C9D7");
	const [currentMode, setCurrentMode] = useState("Light");

	const [themeSettings, setThemeSettings] = useState(false);

	const setMode = (e) => {
		setCurrentMode(e.target.value);
		localStorage.setItem("themeMode", e.target.value);
		setThemeSettings(false);
	};

	const setColor = (e) => {
		setCurrentColor(e);
		localStorage.setItem("colorMode", e);
		setThemeSettings(false);
	};

	useEffect(() => {
		const handleResize = () => {
			setScreenSize(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	useEffect(() => {
		if (screenSize < 1200) {
			setActiveMenu(false);
		} else {
			setActiveMenu(true);
		}
	}, [screenSize]);

	const handleClick = (clicked) => {
		setIsClicked((previousState) => ({
			...initialState,
			[clicked]: !previousState[clicked],
		}));
		console.log(isClicked);
	};

	const closeApplication = () => {
		setIsClicked(initialState);
	};

	return (
		<StateContext.Provider
			value={{
				closeApplication,
				activeMenu,
				setActiveMenu,
				isClicked,
				setIsClicked,
				handleClick,
				screenSize,
				setScreenSize,
				currentColor,
				currentMode,
				themeSettings,
				setThemeSettings,
				setMode,
				setColor,
			}}>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
