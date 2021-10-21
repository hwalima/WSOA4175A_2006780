const commands = String.raw`Interactive Media 4:~ cd HAX
asciiArt@internal-https://hwalima.github.io/WSOA4175A_2006780/Index.html/:~ ls`;

const beep = String.raw`

🅰🅳 🆁🅴🅸🅽🅷🅰🆁🅳🆃
`;

const asciiArt = String.raw`










			██╗███╗░░██╗████████╗███████╗██████╗░███╗░░██╗███████╗████████╗  ░█████╗░██████╗░████████╗
			██║████╗░██║╚══██╔══╝██╔════╝██╔══██╗████╗░██║██╔════╝╚══██╔══╝  ██╔══██╗██╔══██╗╚══██╔══╝
			██║██╔██╗██║░░░██║░░░█████╗░░██████╔╝██╔██╗██║█████╗░░░░░██║░░░  ███████║██████╔╝░░░██║░░░
			██║██║╚████║░░░██║░░░██╔══╝░░██╔══██╗██║╚████║██╔══╝░░░░░██║░░░  ██╔══██║██╔══██╗░░░██║░░░
			██║██║░╚███║░░░██║░░░███████╗██║░░██║██║░╚███║███████╗░░░██║░░░  ██║░░██║██║░░██║░░░██║░░░
			╚═╝╚═╝░░╚══╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝╚═╝░░╚══╝╚══════╝░░░╚═╝░░░  ╚═╝░░╚═╝╚═╝░░╚═╝░░░╚═╝░░░
																													  
`;

let blink = document.querySelector('.blink');
const code = document.querySelector('.code');

const RandomNumber = (min, max) => {
	return Math.floor(Math.random() * max) + min
};

const Delay = (time) => {
	return new Promise((resolve) => setTimeout(resolve, time))
};

const ResetTerminal = () => {
	code.innerHTML = '<span class="blink">█</span>';
	blink = document.querySelector('.blink');
};

const RenderString = characters => {
	blink.insertAdjacentHTML('beforeBegin', characters);
};

const TypeString = async characters => {
	for(const character of characters.split('')) {
		await Delay(RandomNumber(100, 200));
		RenderString(character);
	}
}

const DrawLines = async ( characters, min = 50, max = 500 ) => {
	for(const line of characters.split('\n')) {
		await Delay(RandomNumber(min, max));
		RenderString(`${line}\n`);
	}
}

const DrawCommands = async commands => {
	for( const line of commands.split('\n')){
		// Seperate the directory and the command
		const [currentDir, command] = line.split(':~ ');

		// Print the directory, type the command and finish with new line
		RenderString(`${currentDir}:~ `);
		await TypeString(command);
		RenderString('\n');
	}
}


// Start the code
(async()=> {
	await DrawCommands("/:~ Interactive Media 4");
	await Delay(300);
	RenderString("asciiArt@internal-Sikhulile Dube 2006780 password:");
	await Delay(1000);
	RenderString("\n");
	await DrawCommands(commands);
	RenderString('\nreact.js    asciiArt.js\n\n');
	await DrawCommands('asciiArt@internal-Log in successful:~ React.js');
	await DrawLines( beep );
	
	await Delay(2000);
	ResetTerminal();
	await DrawCommands('Ad Reinhardt:~ QUOTE=Art is Art. Everything else is everything else');
	await DrawLines(asciiArt);
})();

