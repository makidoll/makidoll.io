import { Box, Flex } from "@chakra-ui/react";

export default function HomeCard(props: { children?: any }) {
	const opacity = 0.025;
	return (
		<Flex
			width={450}
			alignItems="center"
			justifyContent="center"
			marginBottom={[8, 8, 8, 0]}
		>
			<Box
				// boxShadow="0 0 64px #0000001a, 0 0 32px #0000001a"
				// boxShadow={`0 0 96px rgba(0,0,0,${opacity}), 0 0 64px rgba(0,0,0,${opacity}), 0 0 32px rgba(0,0,0,${opacity})`}
				boxShadow={`0 0 96px rgba(255,255,255,${opacity}), 0 0 64px rgba(255,255,255,${opacity}), 0 0 32px rgba(255,255,255,${opacity})`}
				border={"solid 2px rgba(255,255,255,0.04)"}
				borderRadius={16}
				padding={6}
				display="inline-block"
			>
				{props.children}
			</Box>
		</Flex>
	);
}
