// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { TextDocument, Diagnostic, DiagnosticSeverity, Range, workspace, languages, ExtensionContext } from 'vscode';

const diagnosticCollection = languages.createDiagnosticCollection();

function validateTextDocument(textDocument: TextDocument): void {
	// The validator creates diagnostics for all uppercase words length 2 and more
	const text = textDocument.getText();
	const pattern = /\b[A-Z]{2,}\b/g;
	
	let diagnostics: Diagnostic[] = [];
	let match: RegExpExecArray | null;
	while (match = pattern.exec(text)) {
		const index = match.index;
		const value = match[0];
		const diagnostic = new Diagnostic(
			new Range(textDocument.positionAt(index), textDocument.positionAt(index + value.length)),
 			`${value} is all uppercase.`,
			DiagnosticSeverity.Warning
		);
		diagnostics.push(diagnostic);
	};

	console.log(diagnostics);
	// Send the computed diagnostics to VS Code.
	diagnosticCollection.set(textDocument.uri, diagnostics);
}


// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "graudit" is now active!');

	function didOpenTextDocument(textDocument: TextDocument) {
		console.log('didOpenTextDocument');
		validateTextDocument(textDocument);
	}

	function didSaveTextDocument(textDocument: TextDocument) {
		console.log('didSaveTextDocument');
		validateTextDocument(textDocument);
	}

	const openedDisposable = workspace.onDidOpenTextDocument(didOpenTextDocument);
	context.subscriptions.push(openedDisposable);
	const savedDisposable = workspace.onDidSaveTextDocument(didSaveTextDocument);
	context.subscriptions.push(savedDisposable);

	workspace.textDocuments.map(validateTextDocument);

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	// let disposable = commands.registerCommand('graudit.run', () => {
	// 	// The code you place here will be executed every time your command is executed
	// });
	// context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() { }
