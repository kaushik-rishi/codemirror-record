let ed1 = CodeMirror.fromTextArea(document.querySelector("#ed-1"), {
	lineNumbers: true,
	tabSize: 2,
	mode: "javascript",
	theme: "monokai",
});

let ed2 = CodeMirror.fromTextArea(document.querySelector("#ed-2"), {
	lineNumbers: true,
	tabSize: 2,
	mode: "javascript",
	theme: "monokai",
});

const start = document.querySelector("button#start");
const stop = document.querySelector("button#stop");
const play = document.querySelector("button#play");

const codeRecorder = new CodeRecord(ed1);
const codePlayer = new CodePlay(ed2);
codePlayer.setSpeed(1.25);
let records = null;

start.addEventListener("click", () => {
	codeRecorder.listen();
});

stop.addEventListener("click", () => {
	records = codeRecorder.getRecords();
	codePlayer.addOperations(records);
	console.log(records);
});

play.addEventListener("click", () => {
	codePlayer.play();
});
