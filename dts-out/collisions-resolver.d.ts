import * as ts from 'typescript';
export interface ResolverIdentifier {
    name: string;
    identifier?: ts.Identifier;
}
/**
 * A class that holds information about top-level scoped names and allows to get collision-free names in one occurred.
 */
export declare class CollisionsResolver {
    private typeChecker;
    private collisionsMap;
    private generatedNames;
    constructor(typeChecker: ts.TypeChecker);
    /**
     * Adds (or "registers") a top-level {@link identifier} (which takes a top-level scope name to use).
     */
    addTopLevelIdentifier(identifier: ts.ModuleExportName | ts.DefaultKeyword): string;
    /**
     * Returns a set of all already registered names for a given {@link symbol}.
     */
    namesForSymbol(symbol: ts.Symbol): Set<string>;
    /**
     * Resolves given {@link referencedIdentifier} to a name.
     * It assumes that a symbol for this identifier has been registered before by calling {@link addTopLevelIdentifier} method.
     * Otherwise it will return `null`.
     *
     * Note that a returned value might be of a different type of the identifier (e.g. {@link ts.QualifiedName} for a given {@link ts.Identifier})
     */
    resolveReferencedIdentifier(referencedIdentifier: ts.Identifier): string | null;
    /**
     * Similar to {@link resolveReferencedIdentifier}, but works with qualified names (Ns.Ns1.Interface).
     * The main point of this resolver is that it might change the first part of the qualifier only (as it drives uniqueness of a name).
     */
    resolveReferencedQualifiedName(referencedIdentifier: ts.QualifiedName | ts.PropertyAccessEntityNameExpression): string | null;
    private getSymbolScope;
    /**
     * Returns a node's scope where it is located in terms of namespaces/modules.
     * E.g. A scope for `Opt` in `declare module foo { type Opt = number; }` is `[Symbol(foo)]`
     */
    private getNodeScope;
    private registerSymbol;
}
