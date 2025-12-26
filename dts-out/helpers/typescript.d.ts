import * as ts from 'typescript';
export type NodeName = ts.DeclarationName | ts.DefaultKeyword | ts.QualifiedName | ts.PropertyAccessExpression | ts.BindingPattern;
export declare function isNodeNamedDeclaration(node: ts.Node): node is ts.NamedDeclaration;
export declare function hasNodeModifier(node: ts.Node, modifier: ts.SyntaxKind): boolean;
export declare function getNodeName(node: ts.Node): NodeName | undefined;
export declare function getActualSymbol(symbol: ts.Symbol, typeChecker: ts.TypeChecker): ts.Symbol;
export declare function getDeclarationNameSymbol(name: NodeName, typeChecker: ts.TypeChecker): ts.Symbol | null;
export declare function splitTransientSymbol(symbol: ts.Symbol, typeChecker: ts.TypeChecker): Set<ts.Symbol>;
/**
 * Returns whether node is ambient module declaration (declare module "name" or declare global)
 * @see https://github.com/Microsoft/TypeScript/blob/f7c4fefeb62416c311077a699cc15beb211c25c9/src/compiler/utilities.ts#L588-L590
 */
export declare function isAmbientModule(node: ts.Node): boolean;
/**
 * Returns whether node is `declare module` ModuleDeclaration (not `declare global` or `namespace`)
 */
export declare function isDeclareModule(node: ts.Node): node is ts.ModuleDeclaration;
/**
 * Returns whether statement is `declare global` ModuleDeclaration
 */
export declare function isDeclareGlobalStatement(statement: ts.Statement): statement is ts.ModuleDeclaration;
export declare function getDeclarationsForSymbol(symbol: ts.Symbol): ts.Declaration[];
export declare const enum ExportType {
    CommonJS = 0,
    ES6Named = 1,
    ES6Default = 2
}
export interface SourceFileExport {
    exportedName: string;
    symbol: ts.Symbol;
    originalSymbol: ts.Symbol;
    type: ExportType;
}
export declare function getExportsForSourceFile(typeChecker: ts.TypeChecker, sourceFileSymbol: ts.Symbol): SourceFileExport[];
export declare function resolveIdentifier(typeChecker: ts.TypeChecker, identifier: ts.Identifier): ts.NamedDeclaration | undefined;
export declare function getExportsForStatement(exportedSymbols: readonly SourceFileExport[], typeChecker: ts.TypeChecker, statement: ts.Statement | ts.NamedDeclaration): SourceFileExport[];
export type ModifiersMap = Record<ts.ModifierSyntaxKind, boolean>;
export declare function modifiersToMap(modifiers: (readonly ts.Modifier[]) | undefined | null): ModifiersMap;
export declare function modifiersMapToArray(modifiersMap: ModifiersMap): ts.Modifier[];
export declare function recreateRootLevelNodeWithModifiers(node: ts.Node, modifiersMap: ModifiersMap, newName?: string, keepComments?: boolean): ts.Node;
export declare function getModifiers(node: ts.Node): readonly ts.Modifier[] | undefined;
export declare function getRootSourceFile(program: ts.Program, rootFileName: string): ts.SourceFile;
export declare function getNodeOwnSymbol(node: ts.Node, typeChecker: ts.TypeChecker): ts.Symbol;
export declare function getNodeSymbol(node: ts.Node, typeChecker: ts.TypeChecker): ts.Symbol | null;
export declare function getClosestModuleLikeNode(node: ts.Node): ts.SourceFile | ts.ModuleDeclaration;
export declare function getClosestSourceFileLikeNode(node: ts.Node): ts.SourceFile | ts.ModuleDeclaration;
export type NodeWithReferencedModule = ts.ExportDeclaration | ts.ImportDeclaration | ts.ImportEqualsDeclaration | ts.ImportTypeNode | ts.ModuleDeclaration;
export declare function resolveReferencedModule(node: NodeWithReferencedModule, typeChecker: ts.TypeChecker): ts.SourceFile | ts.ModuleDeclaration | null;
export declare function getImportModuleName(imp: ts.ImportEqualsDeclaration | ts.ImportDeclaration | ts.ExportDeclaration): string | null;
/**
 * Returns a symbol that an {@link importExportSpecifier} node references to.
 *
 * For example, for given `export { Value }` it returns a declaration of `Value` whatever it is (import statement, interface declaration, etc).
 */
export declare function getImportExportReferencedSymbol(importExportSpecifier: ts.ExportSpecifier | ts.ImportSpecifier, typeChecker: ts.TypeChecker): ts.Symbol;
export declare function getSymbolExportStarDeclarations(symbol: ts.Symbol): ts.ExportDeclaration[];
export declare function getDeclarationsForExportedValues(exp: ts.ExportAssignment | ts.ExportDeclaration, typeChecker: ts.TypeChecker): ts.Declaration[];
export declare function resolveGlobalName(typeChecker: ts.TypeChecker, name: string): ts.Symbol | undefined;
