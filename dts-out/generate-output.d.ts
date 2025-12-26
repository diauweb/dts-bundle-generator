import * as ts from 'typescript';
export interface ModuleImportsSet {
    defaultImports: Set<string>;
    nsImport: string | null;
    namedImports: Map<string, string>;
    requireImports: Set<string>;
    reExports: Map<string, string>;
}
export interface OutputInputData {
    typesReferences: Set<string>;
    imports: Map<string, ModuleImportsSet>;
    statements: readonly ts.Statement[];
    renamedExports: Map<string, string>;
    wrappedNamespaces: Map<string, Map<string, string>>;
}
export interface NeedStripDefaultKeywordResult {
    needStrip: boolean;
    newName?: string;
}
export interface StatementSettings {
    shouldHaveExportKeyword: boolean;
    shouldHaveJSDoc: boolean;
}
export interface OutputHelpers {
    getStatementSettings(statement: ts.Statement): StatementSettings;
    needStripConstFromConstEnum(constEnum: ts.EnumDeclaration): boolean;
    needStripImportFromImportTypeNode(importType: ts.ImportTypeNode): boolean;
    resolveIdentifierName(identifier: ts.Identifier | ts.QualifiedName | ts.PropertyAccessEntityNameExpression): string | null;
}
export type OutputParams = OutputHelpers & OutputInputData;
export interface OutputOptions {
    umdModuleName?: string;
    sortStatements?: boolean;
    noBanner?: boolean;
}
export declare function generateOutput(params: OutputParams, options?: OutputOptions): string;
