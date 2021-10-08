import React from "react";
import styled from "styled-components";
// import SidebarOptionChannel from "../SidebarOptionChannel/SidebarOptionChannel";

import db from "../../firebase";

function SidebarOption({ Icon, title, addChannelOption, id }) {

	const addChannel = () => {
		const channelName = prompt('Please enter the channel name');

		if(channelName) {
			 db.collection('rooms').add({
			 	name: channelName,
		 	});
		}
	};

	const selectChannel = () => {}

	return (
		<SidebarOptionContainer
			onClick={addChannelOption ? addChannel : selectChannel}
		>
		
			{Icon && <Icon fontSize='small' style={{padding: 10}} />}
			{Icon ? (
				<h3>{title}</h3>
			) : (
				<SidebarOptionChannel>
					<span>#</span>{title}
				</SidebarOptionChannel>
			)}
		</SidebarOptionContainer>
	);
}

export default SidebarOption;

const SidebarOptionContainer = styled.div`
	display: flex;
	font-size: 12px;
	align-items: center;
	padding-left: 2px;
	cursor: pointer;

	:hover {
		opacity: 0.9;
		background-color: #340e36;
	}
	> h3 {
		font-weight: 500;
	}
	> h3 > span {
		padding: 13px;
	}
`;

const SidebarOptionChannel = styled.h3`
	padding: 10px 0;
	font-weight: 300;
`;


// https://www.youtube.com/watch?v=aKIEp9i2svE
// https://youtu.be/QiTq5WrWoJw?t=4288
